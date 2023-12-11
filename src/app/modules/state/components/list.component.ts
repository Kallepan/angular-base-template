import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Article } from '../interfaces/article';

@Component({
  standalone: true,
  selector: 'app-list',
  template: `
    <ul>
      @for (article of articles; track $index) {
        <li>
          <a [routerLink]="article.id">{{ article.title }}</a>
        </li>
      }
    </ul>
  `,
  imports: [CommonModule, RouterModule],
  styles: [
    `
      ul {
        padding: 0;
      }
      li {
        border: 1px solid #bdc3c7;
        list-style: none;
        margin-bottom: 1rem;
        padding: 1rem;
      }
    `,
  ],
})
export class ListComponent {
  @Input({ required: true }) articles!: Article[];
}
