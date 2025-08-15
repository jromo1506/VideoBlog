import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Verifica que se haya renderizado el compoente
  it("Debe renderizar el componente ad-banner",()=>{
    const ads = fixture.debugElement.queryAll(By.css('app-ad-banner'));
    expect(ads).toBeTruthy();
  });



  //Verificar que tipoPost se pase a cada uno de los app-post
  it("Verifica que tipóPost se envia a cada uno de los app-post sea 1",()=>{
      const posts = fixture.debugElement.queryAll(By.css('app-post'));
      posts.forEach((post)=>{
        expect(post.componentInstance.tipoPost).toBe('1');
      });
  });
});
