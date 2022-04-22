import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';
import { Transaction } from '../models/Transaction';


/*const ACCOUNTS = "http://localhost:28888/endpoint2";*/
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  jsonPipe : JsonPipe = new JsonPipe;

  toJSON(account : Account){
    const json : string = 
    "{" +
    "\"id\": \"" + account.id + "\","+
    "\"money\": \"" + account.money + "\","+
    "\"status\": \"" + account.status + "\","+
    "\"clino\": \"" + account.clino + "\","+
    "\"fname\": \"" + account.fname + "\","+
    "\"lname\": \"" + account.lname + "\","+
    "\"passport\": \"" + account.passport + "\","+
    "\"password\": \"" + account.password + "\"}";

    return json;
    }



  addAccount(account : Account):Observable<Account>{
    return this.http.post<any>(
      'http://localhost:28888/endpoint2', this.toJSON(account));
  }

  changeStatus(account : Account):Observable<Account>{
    return this.http.post<any>(
      'http://localhost:28888/status', this.toJSON(account));
      console.log(this.toJSON(account));
  }

  topBalance(account : Account):Observable<Account>{
    return this.http.post<any>(
      'http://localhost:28888/balance', this.toJSON(account));
  }

  wirhdrawBalance(account : Account):Observable<Account>{
    return this.http.post<any>(
      'http://localhost:28888/balancewirthdraw', this.toJSON(account));
  }

  constructor(private http: HttpClient) { }

  getAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(
      'http://localhost:28888/endpoint2'
    );
  }

  getTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(
      'http://localhost:28888/transactions'
    );
  }


}
