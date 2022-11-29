import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterMenuComponent } from './category-filter-menu.component';

describe('CategoryFilterMenuComponent', () => {
  let component: CategoryFilterMenuComponent;
  let fixture: ComponentFixture<CategoryFilterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFilterMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
