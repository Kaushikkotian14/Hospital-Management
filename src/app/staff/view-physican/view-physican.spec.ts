import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhysican } from './view-physican';

describe('ViewPhysican', () => {
  let component: ViewPhysican;
  let fixture: ComponentFixture<ViewPhysican>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPhysican]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPhysican);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
