import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateContentComponent } from './navigate-content.component';

describe('NavigateContentComponent', () => {
  let component: NavigateContentComponent;
  let fixture: ComponentFixture<NavigateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
