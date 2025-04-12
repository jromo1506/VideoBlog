import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Quill from 'quill';

@Component({
    selector: 'app-editor',
    imports: [CommonModule],
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  quill?: Quill;


  ngAfterViewInit() {
    this.quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['bold', 'italic', 'underline'],
          ['link', 'image', 'emoji'],
          [{ 'align': [] }],
          ['clean']
        ]
      }
    });
  }


  submitComment() {
    if(this.quill){
      const comment = this.quill.root.innerHTML; // o quill.getText() si solo quieres el texto plano
      console.log(comment);
    }
  }
}
