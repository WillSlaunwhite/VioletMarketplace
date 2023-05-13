import { trigger, transition, animate, style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideInAnimation],
})
export class SidenavComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFile = faFile;
  constructor() { }
  @Input() animationData: string | undefined;

  ngOnInit(): void { }
}
