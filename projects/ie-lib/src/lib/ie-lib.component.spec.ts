import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeLibComponent } from './ie-lib.component';

describe('IeLibComponent', () => {
  let component: IeLibComponent;
  let fixture: ComponentFixture<IeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IeLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
