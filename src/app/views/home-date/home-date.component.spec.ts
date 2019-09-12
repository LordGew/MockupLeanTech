import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDateComponent } from './home-date.component';

describe('HomeDateComponent', () => {
  let component: HomeDateComponent;
  let fixture: ComponentFixture<HomeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
