export interface FolderType {
  type: string;
  name: string;
  children: FolderType[];
  isShowIcon?: boolean;
  isShowButton?: boolean;
}

export enum Entities {
  FOLDER = 'folder',
  FILE = 'file',
}
