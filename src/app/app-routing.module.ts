import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { VillageMasterComponent } from './Components/village-master/village-master.component';
import { CustomerMasterComponent } from './Components/customer-master/customer-master.component';
import { GroupCustomerMasterComponent } from './Components/group-customer-master/group-customer-master.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { DilayFinanceComponent } from './Components/dilay-finance/dilay-finance.component';
import { ExpensesMasterComponent } from './Components/expenses-master/expenses-master.component';
import { IncomesMasterComponent } from './Components/incomes-master/incomes-master.component';
import { DialySheetComponent } from './Components/dialy-sheet/dialy-sheet.component';
import { NewshopNameComponent } from './Components/newshop-name/newshop-name.component';
import { PersonalPassBookComponent } from './Components/personal-pass-book/personal-pass-book.component';
import { OfficeStaffComponent } from './Components/office-staff/office-staff.component';
import { AddLawyerComponent } from './Components/add-lawyer/add-lawyer.component';
import { AddBankComponent } from './Components/add-bank/add-bank.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'accounts',
    component:AccountsComponent
  },
  {
    path:'logout',
    component:LoginComponent
  },
  {
    path:'villagemaster',
    component:VillageMasterComponent
  },
  {
    path:'customers',
    component:CustomerMasterComponent
  },
  {
    path:'groupcustomers',
    component:GroupCustomerMasterComponent
  },
  {
    path:'documents',
    component:DocumentsComponent
  },
  {
    path:'dialyfinance',
    component:DilayFinanceComponent
  },
  {
    path:'expenses',
    component:ExpensesMasterComponent
  },
  {
    path:'incomes',
    component:IncomesMasterComponent
  },
  {
    path:'dialysheet',
    component:DialySheetComponent
  },
  {
    path:'newshop',
    component:NewshopNameComponent
  },
  {
    path:'personalpassbook',
    component:PersonalPassBookComponent
  },
  {
    path:'officestaff',
    component:OfficeStaffComponent
  },
  {
    path:'addlawyer',
    component:AddLawyerComponent
  },
  {
      path:'addbank',
      component:AddBankComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
