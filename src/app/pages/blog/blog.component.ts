import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'src/app/components/post/post.component';
import { trigger, transition,animate,style} from '@angular/animations';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,PostComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations:[trigger('fadeIn',[
    transition(':enter',[
      style({opacity:0}),
      animate('300ms ease-out',style({opacity:1}))
    ])
  ])]
})
export class BlogComponent {

  post:string="3";
}
