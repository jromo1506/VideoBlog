import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post',
    imports: [CommonModule],
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() postData:any;
  @Input() tipoPost:string="";

  constructor(private router:Router){

  }

  ngOnInit(){
    console.log(this.tipoPost);
  }

  navegarPost(){
    this.router.navigate(['/postPage']);
  }

}
