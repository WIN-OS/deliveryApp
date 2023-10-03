import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSidenavComponent } from './collapsible-sidenav.component';

describe('CollapsibleSidenavComponent', () => {
  let component: CollapsibleSidenavComponent;
  let fixture: ComponentFixture<CollapsibleSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleSidenavComponent]
    });
    fixture = TestBed.createComponent(CollapsibleSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
