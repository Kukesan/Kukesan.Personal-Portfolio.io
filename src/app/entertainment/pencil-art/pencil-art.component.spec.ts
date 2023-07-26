import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilArtComponent } from './pencil-art.component';

describe('PencilArtComponent', () => {
  let component: PencilArtComponent;
  let fixture: ComponentFixture<PencilArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PencilArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PencilArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
