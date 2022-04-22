import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountsService } from 'src/app/services/accounts.service';
import { AccountItemComponent } from '../account-item/account-item.component';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

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
  constructor(private route: ActivatedRoute, private router: Router,private accountService: AccountsService) {}

  // variable - default false
show: boolean = false;

onInsert(){
  this.accountService.addAccount(this.account).subscribe();
  this.router.navigate([''], {relativeTo: this.route}); 
}


// click event function toggle
password() {
    this.show = !this.show;
}

  ngOnInit(): void {
    
  }



}
