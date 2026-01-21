import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromInput } from './from-input';

describe('FromInput', () => {
  let component: FromInput;
  let fixture: ComponentFixture<FromInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
