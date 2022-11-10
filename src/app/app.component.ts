import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSpinner: boolean = false;
  title = 'propertiesApp';

  constructor(private fs:AngularFirestore){
  }

  ngOnInit() {
    this.fs.collection('test').stateChanges().subscribe(data => {
      console.log(data.map((person => person.payload.doc.data())));
    })
  }

  onToggleSpinner() : void {
    this.showSpinner = !this.showSpinner;
  }

  onFilesChanged(urls: string | string[]): void {
    console.log(urls);
  }
}
