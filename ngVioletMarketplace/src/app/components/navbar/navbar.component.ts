import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BsModalRef, BsModalService, ModalOptions, ModalDirective } from 'ngx-bootstrap/modal';
import { PictureuploadComponent } from '../pictureupload/pictureupload.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private modalService: BsModalService) { }
  bsModalRef?: BsModalRef;
  // check login

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

 loggedIn(): boolean {
  return this.auth.isUserLoggedIn();
  }


  ngOnInit(): void {
  }

}
