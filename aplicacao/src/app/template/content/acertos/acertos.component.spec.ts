import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcertosComponent } from './acertos.component';

describe('AcertosComponent', () => {
  let component: AcertosComponent;
  let fixture: ComponentFixture<AcertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcertosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
