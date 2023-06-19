import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-register-tab',
  template: `
    <app-form-container></app-form-container>
  `,
  styleUrls: ['./register-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterTabComponent implements OnInit {
  @Input() label: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
