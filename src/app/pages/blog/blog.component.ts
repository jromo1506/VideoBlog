import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'src/app/components/post/post.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,PostComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  post:string="3";
}
