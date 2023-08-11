import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghost-grad-button',
  templateUrl: './ghost-grad-button.component.html',
  styleUrls: ['./ghost-grad-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GhostGradButtonComponent implements OnInit {
  @Input() gradient: string = "default";
  @Input() label: string = "";
  @Input() size: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
