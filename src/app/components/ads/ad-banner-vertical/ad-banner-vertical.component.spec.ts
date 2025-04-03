import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBannerVerticalComponent } from './ad-banner-vertical.component';

describe('AdBannerVerticalComponent', () => {
  let component: AdBannerVerticalComponent;
  let fixture: ComponentFixture<AdBannerVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdBannerVerticalComponent]
    });
    fixture = TestBed.createComponent(AdBannerVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
