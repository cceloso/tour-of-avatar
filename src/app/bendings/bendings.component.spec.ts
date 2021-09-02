import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingsComponent } from './bendings.component';

describe('BendingsComponent', () => {
  let component: BendingsComponent;
  let fixture: ComponentFixture<BendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BendingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
