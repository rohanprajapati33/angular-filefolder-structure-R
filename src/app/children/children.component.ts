import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  @Input() folderItem!: any;
  constructor(private formbuilder: FormBuilder) {}

  get children() {
    return this.folderItem.get('children') as FormArray;
  }

  ngOnInit(): void {}

  /**
   *This Function is Save input name
   *
   * @param {*} folder
   * @return {*}  {void}
   * @memberof ChildrenComponent
   */
  save(folder: any): void {
    console.log(folder);
    if (this.folderItem.invalid) {
      return;
    }
    folder.get('isEditableText').setValue(true);
  }

  cancel(index: number): void {
    this.children.removeAt(index);
  }

  onMouseEnter(index: number): void {
    this.children.controls[index]?.get('isHidden')?.setValue(true);
  }

  onMouseLeave(index: number): void {
    this.children.controls[index]?.get('isHidden')?.setValue(false);
  }
  /**
   *This Function is show File_Folder button after click this
   *
   * @param {number} index
   * @memberof ChildrenComponent
   */
  addFileFolder(index: number): void {
    this.children.controls[index]?.get('isViewFolder')?.setValue(true);
  }

  deleteFileFolder(index: number): void {
    this.children.removeAt(index);
  }

  /**
   *This Function is add children file and folder
   *
   * @param {number} index
   * @param {*} folder
   * @memberof ChildrenComponent
   */
  addChildrenFileFolder(index: number, folder: any, type: string): void {
    this.children.controls[index]?.get('isViewFolder')?.setValue(false);
    folder.controls.children.push(
      this.formbuilder.group({
        name: ['', Validators.required],
        type: [type],
        isEditableText: [false],
        isHidden: [false],
        isViewFolder: [false],
        children: this.formbuilder.array([]),
      })
    );
  }
}
