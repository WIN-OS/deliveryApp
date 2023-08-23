import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByOccasionsMenuComponent } from './shop-by-occasions-menu.component';

describe('ShopByOccasionsMenuComponent', () => {
  let component: ShopByOccasionsMenuComponent;
  let fixture: ComponentFixture<ShopByOccasionsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopByOccasionsMenuComponent]
    });
    fixture = TestBed.createComponent(ShopByOccasionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
