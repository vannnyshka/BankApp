import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

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

  accounts : Account[] = [];
  //check:boolean = false;
  id: string = '';

  OnStatus(account : Account){
    account.status = "ON";
    //console.log(account.status);
  }
  
  OffStatus(account : Account){
    account.status = "OFF";
    //console.log(account.status);
  }

  onUpdateStatus(){

    this.id = this.account.id;
    console.log(this.id);
    this.accountService.getAccounts().subscribe( 
      massiv => {
        massiv.forEach(element => {
          if (this.id==element.id){

            this.accountService.changeStatus(this.account).subscribe();
            console.log(this.account);

          }
        }
        )
      }
      );

  }

  onCheck(){
    this.id = this.account.id;
    this.accountService.getAccounts().subscribe( 
      massiv => {
        massiv.forEach(element => {
          if (this.id==element.id){
          this.accounts.unshift(element);
          }
        }
        )
      }
      );
    }



  constructor(private route: ActivatedRoute, private router: Router,private accountService: AccountsService) { }

  ngOnInit(): void {
  }

}
