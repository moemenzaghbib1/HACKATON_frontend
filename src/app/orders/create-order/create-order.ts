import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgFor, NgIf } from '@angular/common';
import {materialModules} from '../../material';

@Component({
  standalone: true,
  selector: 'app-create-order',
  templateUrl: './create-order.html',
  imports: [
    NgFor,
    NgIf,
    materialModules,
    ReactiveFormsModule,
  ]
})
export class CreateOrderComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateOrderComponent>
  ) {
    this.form = this.fb.group({
      customerName: ['', Validators.required],
      items: this.fb.array([
        this.buildItem()
      ])
    });
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  buildItem(): FormGroup {
    return this.fb.group({
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  addItem() {
    this.items.push(this.buildItem());
  }

  removeItem(i: number) {
    this.items.removeAt(i);
  }

  submit() {
    if (this.form.invalid) return;
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close(null);
  }
}
