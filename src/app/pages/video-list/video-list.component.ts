import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBannerVerticalComponent } from 'src/app/components/ads/ad-banner-vertical/ad-banner-vertical.component';
import {trigger, animate, transition, style} from '@angular/animations';
@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule,AdBannerVerticalComponent],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  animations:[trigger('fadeIn',[
    transition(':enter',[
      style({opacity:0}),
      animate('300ms ease-out',style({opacity:1}))
    ])
  ])]
})
export class VideoListComponent {

}
