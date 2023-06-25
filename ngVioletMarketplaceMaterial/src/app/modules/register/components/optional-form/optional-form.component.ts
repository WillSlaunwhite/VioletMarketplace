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
  fieldType: string = "text";

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  getControl(index: number): FormControl {
    return this.optionalFormArray.at(index) as FormControl;
  }

  getFieldType(fieldName: string) {
    if (fieldName === "biography") { return "textarea"; }
    else { return "text"; }
  }

}
