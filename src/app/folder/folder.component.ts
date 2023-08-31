import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.fileFolderForm = this.formbuilder.group({
      fileFolderFormArray: this.formbuilder.array([]),
    });
  }

  /**
   *This Function is Add root folder
   *
   * @return {*}  {void}
   * @memberof FolderComponent
   */
  addFolder(type: string): void {
    if (this.fileFolderForm.invalid) {
      return;
    }
    this.fileFolderFormArray.push(this.folderInput(type));
  }

  folderInput(type: string): FormGroup {
    return this.formbuilder.group({
      name: ['', Validators.required],
      type: [type],
      isEditableText: [false],
      isHidden: [false],
      isViewFolder: [false],
      children: this.formbuilder.array([]),
    });
  }

  /**
   *This Function is Save input name
   *
   * @param {*} folder
   * @return {*}  {void}
   * @memberof FolderComponent
   */
  save(folder: any): void {
    if (this.fileFolderForm.invalid) {
      return;
    }
    folder.get('isEditableText').setValue(true);
  }

  cancel(index: number): void {
    this.fileFolderFormArray.removeAt(index);
  }

  onMouseEnter(index: number): void {
    this.fileFolderFormArray.controls[index]?.get('isHidden')?.setValue(true);
  }

  onMouseLeave(index: number): void {
    this.fileFolderFormArray.controls[index]?.get('isHidden')?.setValue(false);
  }

  /**
   *This Function is show File_Folder button after click this
   *
   * @param {number} index
   * @memberof FolderComponent
   */
  addFileFolder(index: number): void {
    this.fileFolderFormArray.controls[index]
      ?.get('isViewFolder')
      ?.setValue(true);
  }

  deleteFileFolder(index: number): void {
    this.fileFolderFormArray.removeAt(index);
  }

  /**
   *  This Function is add children file and folder
   *
   * @param {number} index
   * @param {*} folder
   * @param {string} type
   * @memberof FolderComponent
   */
  addChildrenFileFolder(index: number, folder: any, type: string): void {
    this.fileFolderFormArray.controls[index]
      ?.get('isViewFolder')
      ?.setValue(false);

    folder.controls.children.push(this.folderInput(type));
  }
}
