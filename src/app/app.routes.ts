import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { CreateCampaignComponent } from './features/create-campaign/create-campaign.component';
import { DashboardCampaignComponent } from './features/dashboard-campaign/dashboard-campaign.component';
import { FormContactComponent } from './features/form-contact/form-contact.component';
import { CGUComponent } from './shared/components/footer/Mention/cgu/cgu.component';
import { CookiesComponent } from './shared/components/footer/Mention/cookies/cookies.component';
import { MentionLegalComponent } from './shared/components/footer/Mention/mention-legal/mention-legal.component';
import { UserCompteComponent } from './shared/components/menu/user-menu/user-compte/user-compte.component';

export const routes: Routes = [
    // Routes Menu
    { path: '', component: HomeComponent }, // Route par défaut (page d'accueil)
    { path: 'createCampaign', component: CreateCampaignComponent  }, // Route  page Créer une Campagne
    { path: 'dashboard-campaign', component: DashboardCampaignComponent }, // Route page Tableau de bord
    { path: 'contact', component: FormContactComponent }, // Route page Contact

    //Routes Footer
    { path: 'cgu', component: CGUComponent},
    { path: 'cookies', component: CookiesComponent},
    { path: 'mention-legal', component: MentionLegalComponent},

    //Routes Divers
    { path: 'user', component: UserCompteComponent}
];
