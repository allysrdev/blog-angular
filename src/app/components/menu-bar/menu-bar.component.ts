import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  menuItems: string[] = [
    'Notícias & Editorias',
    'Ver & Ouvir',
    'Dia a dia',
    'Produtos',
  ];
}
