import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductListComponent } from './app-product-list.component';

describe('AppProductListComponent', () => {
  let component: AppProductListComponent;
  let fixture: ComponentFixture<AppProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppProductListComponent]
    });
    fixture = TestBed.createComponent(AppProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
