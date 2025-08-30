import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from 'src/app/data/mockData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://repository-images.githubusercontent.com/314186076/79a18fff-1aeb-4a12-9340-db81b383b5e7';
  title: string = 'Novas ferramentas para atuar com Angular';
  description: string =
    'lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore dolorem, tempore labore qui. Beatae earum cupiditate voluptas!';
  private id: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(Id: string | null) {
    const result = mockData.filter((article) => article.id == Id)[0];

    if (result) {
      this.photoCover = result.photoCover;
      this.title = result.title;
      this.description = result.description;
    }
  }
}
