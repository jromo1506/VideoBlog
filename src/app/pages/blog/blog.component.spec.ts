import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { By } from '@angular/platform-browser';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogComponent]
    });
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("Post debe ser '3'", () => {
    expect(component.post).toBe("3");
  });

  it('Debe renderizar 3 app-posts',() => {
    const post = fixture.debugElement.queryAll(By.css('app-post'));
    expect(post.length).toBe(3);
  });



});
