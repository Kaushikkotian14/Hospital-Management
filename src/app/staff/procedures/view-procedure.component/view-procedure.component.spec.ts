import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcedureComponent } from './view-procedure.component';

describe('ViewProcedureComponent', () => {
  let component: ViewProcedureComponent;
  let fixture: ComponentFixture<ViewProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProcedureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
