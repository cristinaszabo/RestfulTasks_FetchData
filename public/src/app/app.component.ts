import { Component } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular project!';

  constructor(private _httpService: HttpService){
    this.hello();
  }
  hello(){
    console.log("function hello() runs because constructor has a this.hello()");
  }
}
