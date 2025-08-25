import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhysican } from './add-physican';

describe('AddPhysican', () => {
  let component: AddPhysican;
  let fixture: ComponentFixture<AddPhysican>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPhysican]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhysican);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
