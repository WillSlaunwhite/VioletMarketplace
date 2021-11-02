import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions, ModalDirective } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { PictureuploadComponent } from '../pictureupload/pictureupload.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  bsModalRef?: BsModalRef;
  constructor(private auth: AuthService, private modalService: BsModalService) { }

  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(PictureuploadComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }


  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return this.auth.isUserLoggedIn();
  }

}
