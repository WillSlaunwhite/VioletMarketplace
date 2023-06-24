import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-optional-form',
  templateUrl: './optional-form.component.html',
  styleUrls: ['./optional-form.component.scss']
})
export class OptionalFormComponent implements OnInit {
  @Input() optionalFormArray: FormArray = this.fb.array([]);
  @Input() fields: string[] = [];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    console.log(this.optionalFormArray);
  }

  getControl(name: string): FormControl {
    return this.optionalFormArray.get(name) as FormControl;
  }

}
