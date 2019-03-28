import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargePage } from './large.page';

describe('LargePage', () => {
  let component: LargePage;
  let fixture: ComponentFixture<LargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
