import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralPageComponent } from './components/general-page/general-page.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { CashtrancsComponent } from './components/cashtrancs/cashtrancs.component';
import { AccountItemComponent } from './components/account-item/account-item.component';
import { FormsModule } from '@angular/forms';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    GeneralPageComponent,
    TransactionsComponent,
    AddAccountComponent,
    CashtrancsComponent,
    AccountItemComponent,
    TransactionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
