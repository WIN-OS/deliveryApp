import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingMenuComponent } from './best-selling-menu.component';

describe('BestSellingMenuComponent', () => {
  let component: BestSellingMenuComponent;
  let fixture: ComponentFixture<BestSellingMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSellingMenuComponent]
    });
    fixture = TestBed.createComponent(BestSellingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
