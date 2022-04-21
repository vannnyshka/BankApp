import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './components/accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralPageComponent } from './components/general-page/general-page.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { CashtrancsComponent } from './components/cashtrancs/cashtrancs.component';


const routes: Routes = [
  { path: '', component:  GeneralPageComponent},
  { path: 'accounts', component:  AccountsComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'addaccount', component: AddAccountComponent},
  { path: 'cashtrancs', component: CashtrancsComponent}
 /* { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent },*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
