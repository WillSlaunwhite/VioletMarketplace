import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pictureupload',
  templateUrl: './pictureupload.component.html',
  styleUrls: ['./pictureupload.component.css'],
})
export class PictureuploadComponent implements OnInit {
  loginUser = new User();
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
