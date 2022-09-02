import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApvInvoiceComponent } from './components/adminPage/admin-apv-invoice/admin-apv-invoice.component';
import { AdminApvPartnerComponent } from './components/adminPage/admin-apv-partner/admin-apv-partner.component';
import { AdminDashboardComponent } from './components/adminPage/admin-dashboard/admin-dashboard.component';
import { AdminEachInvoiceComponent } from './components/adminPage/admin-each-invoice/admin-each-invoice.component';
import { AdminEachWorkorderComponent } from './components/adminPage/admin-each-workorder/admin-each-workorder.component';
import { AdminGenWorkorderComponent } from './components/adminPage/admin-gen-workorder/admin-gen-workorder.component';
import { AdminPaymentComponent } from './components/adminPage/admin-payment/admin-payment.component';
import { AdminWorkorderComponent } from './components/adminPage/admin-workorder/admin-workorder.component';
import { FinanceApvWorkorderComponent } from './components/financePage/finance-apv-workorder/finance-apv-workorder.component';
import { FinanceDashboardComponent } from './components/financePage/finance-dashboard/finance-dashboard.component';
import { FinanceEachInvoceComponent } from './components/financePage/finance-each-invoce/finance-each-invoce.component';
import { FinanceEachPaymentComponent } from './components/financePage/finance-each-payment/finance-each-payment.component';
import { FinanceEachWorkorderComponent } from './components/financePage/finance-each-workorder/finance-each-workorder.component';
import { FinanceInvoiceComponent } from './components/financePage/finance-invoice/finance-invoice.component';
import { FinancePaymentComponent } from './components/financePage/finance-payment/finance-payment.component';
import { HomeComponent } from './components/mainPage/home/home.component';
import { LoginComponent } from './components/mainPage/login/login.component';
import { SignUpComponent } from './components/mainPage/sign-up/sign-up.component';
import { PartnerDashboardComponent } from './components/partnerPage/partner-dashboard/partner-dashboard.component';
import { PartnerEachWorkorderComponent } from './components/partnerPage/partner-each-workorder/partner-each-workorder.component';
import { PartnerEditProfileComponent } from './components/partnerPage/partner-edit-profile/partner-edit-profile.component';
import { PartnerInvoiceComponent } from './components/partnerPage/partner-invoice/partner-invoice.component';
import { PartnerProfileComponent } from './components/partnerPage/partner-profile/partner-profile.component';
import { PartnerWorkorderComponent } from './components/partnerPage/partner-workorder/partner-workorder.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/generate/workorder', component: AdminGenWorkorderComponent },
  { path: 'admin/workorder', component: AdminWorkorderComponent },
  { path: 'admin/workorder/:id', component: AdminEachWorkorderComponent },
  { path: 'admin/invoice', component: AdminApvInvoiceComponent },
  { path: 'admin/invoice/:id', component: AdminEachInvoiceComponent },
  { path: 'admin/payment', component: AdminPaymentComponent },
  { path: 'superadmin/approve', component: AdminApvPartnerComponent },
  { path: 'finance/dashboard', component: FinanceDashboardComponent },
  { path: 'finance/payment', component: FinancePaymentComponent },
  { path: 'finance/payment/:id', component: FinanceEachPaymentComponent },
  { path: 'finance/workorder', component: FinanceApvWorkorderComponent },
  { path: 'finance/workorder/:id', component: FinanceEachWorkorderComponent },
  { path: 'finance/invoice', component: FinanceInvoiceComponent },
  { path: 'finance/invoice/:id', component: FinanceEachInvoceComponent },
  { path: 'partner/dashboard', component: PartnerDashboardComponent },
  { path: 'partner/profile', component: PartnerProfileComponent },
  { path: 'partner/workorder', component: PartnerWorkorderComponent },
  { path: 'partner/workorder/:id', component: PartnerEachWorkorderComponent },
  { path: 'partner/invoice', component: PartnerInvoiceComponent },
  { path: 'partner/profile/edit', component: PartnerEditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
