import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-required-form',
  templateUrl: './required-form.component.html',
  styleUrls: ['./required-form.component.scss']
})
export class RequiredFormComponent implements OnInit {
  @Input() requiredFormFields: FormGroup;

  constructor(private fb: FormBuilder) {
    this.requiredFormFields = this.fb.group({});
  }

  ngOnInit(): void {
  }

}
