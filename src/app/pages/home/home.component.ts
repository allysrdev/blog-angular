import { Component, OnInit } from '@angular/core';
import { IMockData, mockData } from '../../data/mockData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setArticles();
  }

  firstArticle: IMockData = {
    id: '',
    description: '',
    photoCover: '',
    title: '',
  };
  otherArticles: IMockData[] = [];

  setArticles() {
    this.firstArticle = mockData[0];
    this.otherArticles = mockData.filter(
      (article) => article.id !== this.firstArticle.id
    );
  }
}
