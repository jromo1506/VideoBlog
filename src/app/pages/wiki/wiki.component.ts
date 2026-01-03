import { Component } from '@angular/core';
import { ArticleImgComponent } from 'src/app/components/wiki/article-img/article-img.component';
import { ArticleComponent } from 'src/app/components/wiki/article/article.component';
import { ContentAnchorComponent } from 'src/app/components/wiki/content-anchor/content-anchor.component';
import { GalleryComponent } from 'src/app/components/wiki/gallery/gallery.component';
import { TableComponent } from 'src/app/components/wiki/table/table.component';

@Component({
  selector: 'app-wiki',
  imports: [ArticleComponent,ArticleImgComponent,ContentAnchorComponent,GalleryComponent,TableComponent],
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.scss'
})
export class WikiComponent {

}
