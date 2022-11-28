import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixTopMenuComponent } from './fix-top-menu.component';

describe('FixTopMenuComponent', () => {
  let component: FixTopMenuComponent;
  let fixture: ComponentFixture<FixTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixTopMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
