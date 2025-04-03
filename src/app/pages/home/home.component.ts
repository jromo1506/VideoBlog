import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'src/app/components/post/post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopularesComponent } from 'src/app/components/populares/populares.component';
import { AdBannerComponent } from 'src/app/components/ads/ad-banner/ad-banner.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PostComponent,NgxPaginationModule,PopularesComponent,AdBannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items = ["","","","","","","","","","","",""];
  page = 1;

  tipo:string="1";

}
