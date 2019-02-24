import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
})
export class SimpleHttpComponent implements OnInit {

  data: object;
  loading: boolean;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }


  makeGetRequest() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      (data) => {
        this.data = data;
        this.loading = false;
      });
  }

}
