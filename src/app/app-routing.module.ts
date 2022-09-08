import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApvInvoiceComponent } from './components/adminPage/admin-apv-invoice/admin-apv-invoice.component';
import { AdminApvPartnerComponent } from './components/adminPage/admin-apv-partner/admin-apv-partner.component';
import { AdminDashboardComponent } from './components/adminPage/admin-dashboard/admin-dashboard.component';
import { AdminEachInvoiceComponent } from './components/adminPage/admin-each-invoice/admin-each-invoice.component';
import { AdminEachWorkorderComponent } from './components/adminPage/admin-each-workorder/admin-each-workorder.component';
import { AdminEditWorkorderComponent } from './components/adminPage/admin-edit-workorder/admin-edit-workorder.component';
import { AdminGenWorkorderComponent } from './components/adminPage/admin-gen-workorder/admin-gen-workorder.component';
import { AdminPaymentComponent } from './components/adminPage/admin-payment/admin-payment.component';
import { AdminSidenavComponent } from './components/adminPage/admin-sidenav/admin-sidenav.component';
import { AdminWorkorderComponent } from './components/adminPage/admin-workorder/admin-workorder.component';
import { FinanceApvWorkorderComponent } from './components/financePage/finance-apv-workorder/finance-apv-workorder.component';
import { FinanceDashboardComponent } from './components/financePage/finance-dashboard/finance-dashboard.component';
import { FinanceEachPaymentComponent } from './components/financePage/finance-each-payment/finance-each-payment.component';
import { FinanceEachWorkorderComponent } from './components/financePage/finance-each-workorder/finance-each-workorder.component';
import { FinancePaymentComponent } from './components/financePage/finance-payment/finance-payment.component';
import { FinanceSidenavComponent } from './components/financePage/finance-sidenav/finance-sidenav.component';
import { HomeComponent } from './components/mainPage/home/home.component';
import { LoginComponent } from './components/mainPage/login/login.component';
import { SignUpComponent } from './components/mainPage/sign-up/sign-up.component';
import { PartnerDashboardComponent } from './components/partnerPage/partner-dashboard/partner-dashboard.component';
import { PartnerEachWorkorderComponent } from './components/partnerPage/partner-each-workorder/partner-each-workorder.component';
import { PartnerEditProfileComponent } from './components/partnerPage/partner-edit-profile/partner-edit-profile.component';
import { PartnerInvoiceComponent } from './components/partnerPage/partner-invoice/partner-invoice.component';
import { PartnerProfileComponent } from './components/partnerPage/partner-profile/partner-profile.component';
import { PartnerSidenavComponent } from './components/partnerPage/partner-sidenav/partner-sidenav.component';
import { PartnerWorkorderComponent } from './components/partnerPage/partner-workorder/partner-workorder.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {path: 'admin', component:AdminSidenavComponent,
  children:[
  { path: 'dashboard', component: AdminDashboardComponent,canActivate:[AuthGuard] },
  { path: 'generate/workorder', component: AdminGenWorkorderComponent,canActivate:[AuthGuard] },
  { path: 'workorder', component: AdminWorkorderComponent,canActivate:[AuthGuard] },
  { path: 'workorder/:id', component: AdminEachWorkorderComponent,canActivate:[AuthGuard] },
  { path: 'edit', component:AdminEditWorkorderComponent,canActivate:[AuthGuard]},
  { path: 'invoice', component: AdminApvInvoiceComponent,canActivate:[AuthGuard] },
  { path: 'invoice/:id', component: AdminEachInvoiceComponent,canActivate:[AuthGuard] },
  { path: 'payment', component: AdminPaymentComponent,canActivate:[AuthGuard] },
  ]},
  { path: 'superadmin/approve', component: AdminApvPartnerComponent,canActivate:[AuthGuard] },
  { path: 'finance', component:FinanceSidenavComponent,
  children:[
  { path: 'dashboard', component: FinanceDashboardComponent,canActivate:[AuthGuard] },
  { path: 'payment', component: FinancePaymentComponent,canActivate:[AuthGuard] },
  { path: 'payment/:id', component: FinanceEachPaymentComponent,canActivate:[AuthGuard] },
  { path: 'workorder', component: FinanceApvWorkorderComponent ,canActivate:[AuthGuard]},
  { path: 'workorder/:id', component: FinanceEachWorkorderComponent,canActivate:[AuthGuard] },
  ]},
  {path: 'partner', component:PartnerSidenavComponent,
  children:[
  { path: 'dashboard', component: PartnerDashboardComponent ,canActivate:[AuthGuard]},
  { path: 'profile', component: PartnerProfileComponent,canActivate:[AuthGuard] },
  { path: 'workorder', component: PartnerWorkorderComponent,canActivate:[AuthGuard] },
  { path: 'workorder/:id', component: PartnerEachWorkorderComponent ,canActivate:[AuthGuard]},
  { path: 'invoice', component: PartnerInvoiceComponent,canActivate:[AuthGuard] },
  { path: 'profile/edit', component: PartnerEditProfileComponent,canActivate:[AuthGuard] },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
