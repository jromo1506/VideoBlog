import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    login:FormGroup;

    constructor(private fb:FormBuilder){
      this.login = this.fb.group({
        username:['',[Validators.required]],
        password:['',[Validators.required]]
      });

    }

    submit(){
      if(this.login.valid){
        console.log(this.login.value);
      }
    }


    calcular(){
     
    }
}
