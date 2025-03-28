import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() postData:any;
  @Input() tipoPost:string="";

  constructor(){

  }

  ngOnInit(){
    console.log(this.tipoPost);
  }

}
