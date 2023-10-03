import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSpaceComponent } from './ad-space.component';

describe('AdSpaceComponent', () => {
  let component: AdSpaceComponent;
  let fixture: ComponentFixture<AdSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdSpaceComponent]
    });
    fixture = TestBed.createComponent(AdSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
