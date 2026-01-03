import { Component } from '@angular/core';
import { ArticleImgComponent } from '../article-img/article-img.component';

@Component({
  selector: 'app-article',
  imports: [ArticleImgComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

}
