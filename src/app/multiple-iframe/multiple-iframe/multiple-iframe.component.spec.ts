import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleIframeComponent } from './multiple-iframe.component';

describe('MultipleIframeComponent', () => {
  let component: MultipleIframeComponent;
  let fixture: ComponentFixture<MultipleIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleIframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
