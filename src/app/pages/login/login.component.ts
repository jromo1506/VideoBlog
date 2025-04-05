import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { trigger,animate,transition,style} from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[trigger('fadeIn',[
    transition(':enter',[
      style({opacity:0}),
      animate('300ms ease-out',style({opacity:1}))
    ])
  ])]
})
export class LoginComponent {
    login:FormGroup;
    register:FormGroup;

    constructor(private fb:FormBuilder){
      this.login = this.fb.group({
        username:['',[Validators.required]],
        password:['',[Validators.required]]
      });

      this.register =this.fb.group({
        usernamre:['',Validators.required],
        password:['',Validators.required],
        repassword:['',Validators.required]
      });

    }

    submit(){
      if(this.login.valid){
        console.log(this.login.value);
      }
    }


    registrarUsuario(){
      if(this.register.valid){
        if(this.register.get('password')?.value === this.register.get('repassword')?.value){
          console.log(this.register.value);
        }
      }
    }
}
