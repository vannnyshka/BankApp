import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts : Account[] = [];

  constructor(private accountsService : AccountsService) { }

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe( 
      massiv => {
        massiv.forEach(element => {this.accounts.push(element)}
        )
      }
    );
  }

}
