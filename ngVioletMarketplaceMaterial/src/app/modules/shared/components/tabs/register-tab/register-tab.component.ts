import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-register-tab',
  templateUrl: './register-tab.component.html',
  styleUrls: ['./register-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterTabComponent implements OnInit {
  @Input() label: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
