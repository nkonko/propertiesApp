import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from './IDialogData';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {
  public isHovering!: boolean;
  files: File[] = [];
  imageFile!: File;
  isError!: boolean;

  public filesUrls: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<FilesUploadComponent>,
     @Inject(MAT_DIALOG_DATA) public data: IDialogData) { }

  ngOnInit(): void {
  }

  public toggleHover(event: boolean): void {
    this.isHovering = event;
  }

  onDrop(files: FileList | any): void {
    this.dropGeneral(files);
  }

  onDropFile(event: FileList | any): void {
    this.dropGeneral(event.target.files);
  }

  dropGeneral(files: FileList): void {
    this.isError = false;

    if(this.data.crop && files.length > 1){
      this.isError = true;
      return;
    }

    for(let i = 0; i < files.length;i++) {
      this.files.push(files.item(i) as File);
    }

    console.log(this.files);
  }

  onUploadComplete(url: string): void {
    this.filesUrls.push(url);
  }

  onClose() {
    this.dialogRef.close();
  }

  onComplete() {
    const res = this.data.multiple ? this.filesUrls : this.filesUrls[0];
    this.dialogRef.close(res);
  }

}
