import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanTechMockupComponent } from './lean-tech-mockup.component';

describe('LeanTechMockupComponent', () => {
  let component: LeanTechMockupComponent;
  let fixture: ComponentFixture<LeanTechMockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanTechMockupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanTechMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
