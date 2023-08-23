import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFolderComponent } from './file-folder.component';

describe('FileFolderComponent', () => {
  let component: FileFolderComponent;
  let fixture: ComponentFixture<FileFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileFolderComponent]
    });
    fixture = TestBed.createComponent(FileFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
