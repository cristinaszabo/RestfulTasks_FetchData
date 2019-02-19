import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks(); // this is how i run getTasks()
    this.getOneTask();
  }

  getTasks() {
    let tempObservable = this._http.get("/tasks");
    tempObservable.subscribe(data => console.log("Here is our data: ", data));
  }
  getOneTask() {
    let tempObservable = this._http.get("/tasks/5c670142e14499406c9548e9");
    tempObservable.subscribe(one_task => console.log("Here is one task: ", one_task));
  }

}
