import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCampaignComponent } from './dashboard-campaign.component';

describe('DashboardCampaignComponent', () => {
  let component: DashboardCampaignComponent;
  let fixture: ComponentFixture<DashboardCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
