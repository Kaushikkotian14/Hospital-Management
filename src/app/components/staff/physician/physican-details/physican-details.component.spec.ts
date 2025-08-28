import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicanDetails } from './physican-details';

describe('PhysicanDetails', () => {
  let component: PhysicanDetails;
  let fixture: ComponentFixture<PhysicanDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicanDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicanDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
