import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Entities, FolderType } from '../model/folder';

@Component({
  selector: 'app-file-folder',
  templateUrl: './file-folder.component.html',
  styleUrls: ['./file-folder.component.scss'],
})
export class FileFolderComponent {
  folderName: string = '';
  isAddFolder: boolean = false;
  isShowButton: boolean = false;
  entities = Entities;
  folderArray: FolderType[] = [];
  childFolderName: string = '';
  childFolderType: string = '';
  fileFolderForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  get fileFolderFormArray() {
    return this.fileFolderForm.get('fileFolderFormArray') as FormArray;
  }

  ngOnInit() {
    this.fileFolderForm = this.formbuilder.group({
      fileFolderFormArray: this.formbuilder.array([this.folderInput()]),
    });
  }

  folderInput() {
    return this.formbuilder.group({
      name: [this.folderName],
      // type : [type],
      isShowIcon: [false],
      isShowButton: [false],
      children: [],
    });
  }

  addFolderRoot(): void {
    this.folderInput();
    this.isAddFolder = true;
    this.folderName = '';
  }

  saveFolderName(type: string): void {
    if (this.folderName) {
      this.folderInput();
      this.isAddFolder = false;
    }
  }

  deleteFolder(): void {
    this.isAddFolder = false;
  }

  // private pushFolderInFolderArray(type: string): void {
  //   this.folderArray.push({
  //     name: this.folderName,
  //     type: type,
  //     children: [],
  //   });
  // }

  showFileFolderBtn(folder: any): void {
    folder.isShowButton = true;
  }

  addChildren(index: any, event: MouseEvent): void {
    index.isShowIcon = true;
    index.isShowButton = false;
    this.childFolderType = (event.target as HTMLInputElement).value;
  }

  deleteItem(folder: any): void {
    const index = this.folderArray.indexOf(folder);
    this.folderArray.splice(index, 1);
  }

  // saveChildrenArray(folder: FolderType): void {
  //   if (this.childFolderName && this.childFolderType) {
  //     delete folder.isShowIcon;
  //     folder.children.push({
  //       name: this.childFolderName,
  //       type: this.childFolderType,
  //       children: [],
  //     });
  //     this.childFolderName = '';
  //     this.childFolderType = '';
  //   }
  // }

  // removeChildrenArray(folder: FolderType): void {
  //   delete folder.isShowIcon;
  //   this.childFolderName = '';
  // }
}
