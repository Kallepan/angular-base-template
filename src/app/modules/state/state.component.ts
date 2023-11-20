import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticlesService } from "./services/article.service";
import { PaginationComponent } from "./components/pagination.component";
import { SearchComponent } from "./components/search.component";
import { ListComponent } from "./components/list.component";

@Component({
  standalone: true,
  selector: "app-articles",
  providers: [ArticlesService],
  template: `
    <app-search [control]="service.filterControl" />
    <app-list [articles]="service.filteredArticles()" />

    <div class="status">
      @if (service.status() === 'loading') {
        <p>Loading...</p>
      }
      @if (service.status() === 'error') {
        <p>{{ service.error() }}</p>
        <button (click)="service.retry$.next()">Retry</button>
      }
    </div>

    <app-pagination
      [currentPage]="service.currentPage()"
      (pageChange)="service.currentPage$.next($event)"
    />
  `,
  imports: [ListComponent, SearchComponent, PaginationComponent, CommonModule],
  styles: [
    `
      :host {
        display: block;
        padding: 2rem;
      }

      .status {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        align-items: center;
      }
    `,
  ],
})
export default class StateComponent {
  service = inject(ArticlesService);
}