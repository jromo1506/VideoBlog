import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-populares',
  standalone: true,
  imports: [CommonModule,PostComponent],
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.scss']
})
export class PopularesComponent {

}
