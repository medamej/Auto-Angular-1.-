import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouvertureComponent } from './couverture.component';

describe('AnalyseimpactComponent', () => {
  let component: CouvertureComponent;
  let fixture: ComponentFixture<CouvertureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouvertureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouvertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
