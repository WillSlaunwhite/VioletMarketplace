import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-optional-form',
  templateUrl: './optional-form.component.html',
  styleUrls: ['./optional-form.component.scss']
})
export class OptionalFormComponent implements OnInit {
  optionalFormArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.optionalFormArray = this.fb.array([]);
  }


  ngOnInit(): void {
  }

  addOptionalField(fieldInfo: any) {
    this.optionalFormArray.push(this.fb.group({
      fieldName: [fieldInfo.name],
      // * other properties?
    }))
  }

}
