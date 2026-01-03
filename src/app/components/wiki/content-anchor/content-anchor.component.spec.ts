import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAnchorComponent } from './content-anchor.component';

describe('ContentAnchorComponent', () => {
  let component: ContentAnchorComponent;
  let fixture: ComponentFixture<ContentAnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAnchorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
