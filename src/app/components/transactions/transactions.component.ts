import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions : Transaction[] = [];

  constructor(private transactionsService : AccountsService) { }

  ngOnInit(): void {

    this.transactionsService.getTransactions().subscribe( 
      massiv => {
        massiv.forEach(element => { this.transactions.push(element)})
      }
    );
}

}
