import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGUComponent } from './cgu.component';

describe('CGUComponent', () => {
  let component: CGUComponent;
  let fixture: ComponentFixture<CGUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CGUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CGUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
