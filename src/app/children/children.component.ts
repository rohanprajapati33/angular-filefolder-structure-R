import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entities } from '../model/folder';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  @Input() folderItem!: any;
  fileFolderForm!: FormGroup;
  isShowIconFile!: boolean;
  isShowIconFolder!: boolean;
  entities!: Entities;

  constructor(private formbuilder: FormBuilder) {}

  get children() {
    return this.folderItem.get('children') as FormArray;
  }

  // get fileFolderFormArray() {
  //   return this.fileFolderForm.get('fileFolderFormArray') as FormArray;
  // }

  ngOnInit() {
    this.fileFolderForm = this.formbuilder.group({
      children: this.formbuilder.array([]),
    });
  }

  folderInput() {
    return this.formbuilder.group({
      name: ['', Validators.required],
      isEditable: [false],
      isEditableText: [false],
      isHidden: [false],
      isViewFolder: [false],
      children: this.formbuilder.array([]),
    });
  }

  save(folder: any) {
    console.log(folder);
    if (this.folderItem.invalid) {
      return;
    }
    folder.get('isEditableText').setValue(true);
  }

  cancel(index: number) {
    this.children.removeAt(index);
  }

  onMouseEnter(index: number) {
    this.children.controls[index]?.get('isHidden')?.setValue(true);
  }

  onMouseLeave(index: number) {
    this.children.controls[index]?.get('isHidden')?.setValue(false);
  }

  addFileFolder(index: number) {
    this.children.controls[index]?.get('isViewFolder')?.setValue(true);
  }

  deleteFolder(index: number) {
    this.children.removeAt(index);
  }

  addChildrenFile(index: number, folder: any) {
    this.isShowIconFile = false;
    this.children.controls[index]?.get('isViewFolder')?.setValue(false);
    folder.controls.children.push(this.folderInput());
    console.log(this.isShowIconFile);
  }

  addChildrenFolder(index: number, folder: any) {
    this.isShowIconFolder = false;
    this.children.controls[index]?.get('isViewFolder')?.setValue(false);
    folder.controls.children.push(this.folderInput());
    console.log(this.isShowIconFolder);
  }
}
