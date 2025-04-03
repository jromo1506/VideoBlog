import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBannerVerticalComponent } from 'src/app/components/ads/ad-banner-vertical/ad-banner-vertical.component';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule,AdBannerVerticalComponent],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {

}
