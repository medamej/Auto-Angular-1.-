import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-scriptGene',
  templateUrl: './scriptGen.component.html',
  styleUrls: ['./scriptGen.component.scss'],
})
export class ScriptGenComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  upld(file) :Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  console.log("RRRRRRRRRRRRRR",file);
  return this.http.post('http://localhost:8050' + '/up', formData);
}

  selectFile(event) {
  this.selectedFiles = event.target.files;
}
  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    console.log("DDDDDDDD",this.currentFile);

    this.upld(this.selectedFiles.item(0)).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;

          
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }




}