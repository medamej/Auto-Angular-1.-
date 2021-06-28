import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGenComponent } from './scriptGen.component';

describe('ScriptGenComponent', () => {
  let component: ScriptGenComponent;
  let fixture: ComponentFixture<ScriptGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
