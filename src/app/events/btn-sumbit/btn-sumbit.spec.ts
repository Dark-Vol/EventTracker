import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSumbit } from './btn-sumbit';

describe('BtnSumbit', () => {
  let component: BtnSumbit;
  let fixture: ComponentFixture<BtnSumbit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSumbit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSumbit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
