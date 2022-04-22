import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-cashtrancs',
  templateUrl: './cashtrancs.component.html',
  styleUrls: ['./cashtrancs.component.css']
})
export class CashtrancsComponent implements OnInit {

  @Input()
  account: Account = {
    id: '',
    money: 0,
    status: '',
    clino: 0,
    fname: '',
    lname: '',
    passport: '',
    password: '',

  }

  onTop(){
    this.accountService.topBalance(this.account).subscribe();
    //this.router.navigate([''], {relativeTo: this.route}); 
  }


  onWithdraw(){
    this.accountService.wirhdrawBalance(this.account).subscribe();
  }


  constructor(private route: ActivatedRoute, private router: Router,private accountService: AccountsService) { }

  ngOnInit(): void {
  }

}

