import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'src/app/components/post/post.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PostComponent,NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items = ["","","","","","","","","","","",""];
  page = 1;

}
