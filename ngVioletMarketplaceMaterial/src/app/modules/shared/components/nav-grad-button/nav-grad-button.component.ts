import { RouterModule } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav-grad-button',
  templateUrl: './nav-grad-button.component.html',
  styleUrls: ['./nav-grad-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavGradButtonComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() routerLink: string = '';
  @Input() clickAction: Function = () => { };
  constructor(router: RouterModule) { }

  ngOnInit(): void {
  }

}
