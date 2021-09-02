import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersGalleryComponent } from './characters-gallery.component';

describe('CharactersGalleryComponent', () => {
  let component: CharactersGalleryComponent;
  let fixture: ComponentFixture<CharactersGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
