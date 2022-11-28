import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BsModalService,
  BsModalRef,
  ModalOptions,
  ModalDirective,
} from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
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
  user: User = new User();
  activatedRoute: any;
  parameterValue: any;
  constructor(
    private auth: AuthService,
    private modalService: BsModalService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
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

  ngOnInit(): void {
    this.parameterValue = this._activatedRoute.params.subscribe((params) => {
      this.setUser(params['username']);
    });
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
}
