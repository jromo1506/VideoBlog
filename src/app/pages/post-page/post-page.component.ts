import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from 'src/app/components/editor/editor.component';
import { VideoComponent } from 'src/app/components/video/video.component';

@Component({
    selector: 'app-post-page',
    imports: [CommonModule, EditorComponent,VideoComponent],
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  
}
