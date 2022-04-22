import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {

  @Input()
  transaction: Transaction = {
    id: 0,
    bankaccno: '',
    trancname: '',
    date: '',
    time: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
