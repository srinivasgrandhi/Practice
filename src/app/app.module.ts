import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AngularMaterialModule } from './Modules/angular-material/angular-material.module';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AccountsComponent,
    VillageMasterComponent,
    CustomerMasterComponent,
    GroupCustomerMasterComponent,
    DocumentsComponent,
    DilayFinanceComponent,
    ExpensesMasterComponent,
    IncomesMasterComponent,
    DialySheetComponent,
    NewshopNameComponent,
    PersonalPassBookComponent,
    OfficeStaffComponent,
    AddLawyerComponent,
    AddBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
