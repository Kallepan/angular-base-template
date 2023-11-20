import { Component, inject } from "@angular/core";
import { ArticleDetailService } from "./services/article-detail.service";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-article-detail",
  template: `
  @if (ads.article(); as article) {
    <h1>{{ article.title }}</h1>
    <p>
        If I were determined enough to follow through with these jokes I would
        also get ChatGPT to write fake articles for these titles as well
      </p>
  } @else {
    @if (ads.status() === 'loading') { <p>Loading...</p> }
    @if (ads.status() === 'error') { <p>{{ ads.error() }}</p> }
  }`,
  providers: [ArticleDetailService],
  imports: [CommonModule],
})
export default class ArticleDetailComponent {
  public ads = inject(ArticleDetailService);
}