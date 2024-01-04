import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-optional-form',
  templateUrl: './optional-form.component.html',
  styleUrls: ['./optional-form.component.scss']
})
export class OptionalFormComponent implements OnInit {
  @Input() optionalFormGroup: FormGroup = this.fb.group({});
  @Input() fields: string[] = [];
  fieldType: string = "text";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  getControl(fieldName: string): FormControl {
    return this.optionalFormGroup.get(fieldName) as FormControl;
  }

  getFieldType(fieldName: string) {
    if (fieldName === "biography") { return "textarea"; }
    else { return "text"; }
  }

}
