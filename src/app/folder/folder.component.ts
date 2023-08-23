import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent {
  fileFolderForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  get fileFolderFormArray() {
    return this.fileFolderForm.get('fileFolderFormArray') as FormArray;
  }

  // get children() {
  //   return this.fileFolderFormArray.controls['children'] as FormArray;
  // }

  ngOnInit() {
    this.fileFolderForm = this.formbuilder.group({
      fileFolderFormArray: this.formbuilder.array([]),
    });
  }

  addFolder() {
    if (this.fileFolderForm.invalid) {
      return;
    }
    this.fileFolderFormArray.push(this.folderInput());
  }

  folderInput() {
    return this.formbuilder.group({
      name: ['', Validators.required],
      isEditableText: [false],
      isEditable: [false],
      isHidden: [false],
      isViewFolder: [false],
      children: this.formbuilder.array([]),
    });
  }

  save(index: any) {
    if (this.fileFolderForm.invalid) {
      return;
    }
    index.get('isEditableText').setValue(true);
  }

  cancel(index: number) {
    this.fileFolderFormArray.removeAt(index);
  }

  onMouseEnter(index: number) {
    this.fileFolderFormArray.controls[index]?.get('isHidden')?.setValue(true);
  }

  onMouseLeave(index: number) {
    this.fileFolderFormArray.controls[index]?.get('isHidden')?.setValue(false);
  }

  addFileFolder(index: number) {
    this.fileFolderFormArray.controls[index]
      ?.get('isViewFolder')
      ?.setValue(true);
  }

  deleteFolder(index: number) {
    this.fileFolderFormArray.removeAt(index);
  }

  addChildren(index: number, folder: any) {
    folder.controls.isEditable.setValue(false);

    this.fileFolderFormArray.controls[index]
      ?.get('isViewFolder')
      ?.setValue(false);

    folder.controls.children.push(this.folderInput());
  }
}
