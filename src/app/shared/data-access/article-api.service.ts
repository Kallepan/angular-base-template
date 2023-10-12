import { Injectable } from "@angular/core";
import { delay, of, switchMap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ArticleApiService {
    articles = [
        {
            id: "1",
            title: "Decoding the Future: Unraveling the Mysteries of Quantum Programming",
        },
        { 
            id: "2", 
            title: "Beyond Syntax: Mastering the Art of Clean Code",
        },
        {
            id: "3",
            title: "The AI Codebreaker: How Neural Networks are Transforming Programming",
        },
        {
            id: "4",
            title: "Bug Busters: A Journey into the World of Debugging",
        },
        {
            id: "5",
            title:
            "Programming Paradigms: Navigating the Landscape of Code Structures",
        },
        {
            id: "6",
            title:
            "Ethical Algorithms: Balancing Innovation and Responsibility in Programming",
        },
    ];

    getArticleById(id: string | null) {
        const article = this.articles.find((article) => article.id === id);

        if (!article) {
            return throwError(() => new Error("Must not be null"));
        }

        return of(article).pipe(
            delay(200)
        );
    }

    getArticlesByPage(page: number) {
        const articles = this.articles.map((article) => ({
            ...article,
            title: `Page ${page}: ${article.title}`,
        }));

        return of(articles).pipe(
            delay(200),
            switchMap(() =>
                // Introduce a 10% chance of failure
                Math.random() < 0.1 ? throwError(() => new Error("Error fetching articles")) : of(articles)
            )
        );
    }
}