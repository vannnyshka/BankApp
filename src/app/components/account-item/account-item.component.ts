import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.css']
})
export class AccountItemComponent implements OnInit {

  @Input()
  account: Account = {
    id: '',
    money: 0.0,
    status: '',
    clino: 0,
    fname: '',
    lname: '',
    passport: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
