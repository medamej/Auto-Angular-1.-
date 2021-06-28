import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseimpactComponent } from './analyseimpact.component';

describe('AnalyseimpactComponent', () => {
  let component: AnalyseimpactComponent;
  let fixture: ComponentFixture<AnalyseimpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseimpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
