import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent {
  
}

