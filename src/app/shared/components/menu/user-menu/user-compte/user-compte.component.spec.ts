import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompteComponent } from './user-compte.component';

describe('UserCompteComponent', () => {
  let component: UserCompteComponent;
  let fixture: ComponentFixture<UserCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCompteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
