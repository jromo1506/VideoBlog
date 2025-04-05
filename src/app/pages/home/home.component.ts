import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'src/app/components/post/post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopularesComponent } from 'src/app/components/populares/populares.component';
import { AdBannerComponent } from 'src/app/components/ads/ad-banner/ad-banner.component';
import { trigger,transition,animate,style } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PostComponent,NgxPaginationModule,PopularesComponent,AdBannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('fadeIn',[
      transition(':enter',[
        style({opacity:0}),
        animate('300ms ease-out',style({opacity:1}))
      ])
    ])
  ]
})
export class HomeComponent {
  items = ["","","","","","","","","","","",""];
  page = 1;

  tipo:string="1";

}
