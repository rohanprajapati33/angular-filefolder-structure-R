export interface FolderType {
  name: string;
  type: string;
  isEditableText?: boolean;
  isHidden?: boolean;
  isViewFolder?: boolean;
  children: FolderType[];
}

export enum Entities {
  FOLDER = 'folder',
  FILE = 'file',
}
