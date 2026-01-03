import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImgComponent } from './article-img.component';

describe('ArticleImgComponent', () => {
  let component: ArticleImgComponent;
  let fixture: ComponentFixture<ArticleImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
