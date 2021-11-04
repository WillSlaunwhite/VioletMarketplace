import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions, ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Bid } from 'src/app/models/bid';
import { Token } from 'src/app/models/token';
import { Tokentx } from 'src/app/models/tokentx';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { LoginComponent } from '../login/login.component';
import { PictureuploadComponent } from '../pictureupload/pictureupload.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  bsModalRef?: BsModalRef;
  editProfile: boolean = false;
  activatedRoute: any;
  parameterValue: any;

  user: User = new User();
  bids: Bid[] = [];
  transactions: Tokentx[] = [];
  tokens: Token[] = [];


  constructor(
    private auth: AuthService,
    private tokenSvc: TokenService,
    private transSvc: TransactionService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.transSvc.getAllUserTransfers();
    // this.parameterValue = this.activatedRoute.params.subscribe((params) => {
    //   this.setUser(params['username']);
    // });
  }

  loggedIn(): boolean {
    return this.auth.isUserLoggedIn();
  }


  setUser(username: string): void {
    this.auth.getUser(username).subscribe(
      (user) => {
        this.user = user;
      },
      (fail) => {
        console.log('Failed to Retrieve User: user-page SetUser()');
      }
    );
  }




  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...',
        ],
        title: 'Modal with component',
      },
    };
    this.bsModalRef = this.modalService.show(
      PictureuploadComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
