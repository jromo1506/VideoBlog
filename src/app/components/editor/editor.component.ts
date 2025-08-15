import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Quill from 'quill';
import  DOMPurify  from 'dompurify';
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
        toolbar: {
          container: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image', 'emoji'],
            [{ 'align': [] }],
            ['clean']
          ],
          handlers: {
            image: () => this.imageHandler()
          }
        }
      }
    });
  }

  
  imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
  
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
  
      const maxSizeMB = 2; // 🔒 Límite de tamaño en MB
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
  
      if (file.size > maxSizeBytes) {
        alert(`La imagen supera los ${maxSizeMB}MB permitidos.`);
        return;
      }
  
      const formData = new FormData();
      formData.append('image', file);
  
      // Aquí iría el fetch para subirla al backend
      console.log('Imagen válida, lista para subir:', file);
    };
  }
  submitComment() {
      if(this.quill) {
        let comment = this.quill.root.innerHTML;
        comment = DOMPurify.sanitize(comment); // Sanitiza el contenido
        console.log(comment);
      }
  }


}
