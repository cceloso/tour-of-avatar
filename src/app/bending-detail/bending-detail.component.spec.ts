import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingDetailComponent } from './bending-detail.component';

describe('BendingDetailComponent', () => {
  let component: BendingDetailComponent;
  let fixture: ComponentFixture<BendingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BendingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
