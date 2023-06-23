import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-optional-form',
  templateUrl: './optional-form.component.html',
  styleUrls: ['./optional-form.component.scss']
})
export class OptionalFormComponent implements OnInit {
  @Input() optionalFormArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.optionalFormArray = this.fb.array([]);
  }

  ngOnInit(): void {
  }

  getControl(name: string): FormControl {
    return this.optionalFormArray.get(name) as FormControl;
  }

}
