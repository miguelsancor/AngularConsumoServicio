import { Component } from '@angular/core';
import { Users } from './models/users';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Users: Array<Users>;

  constructor(private http: Http){
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users = resp.json());
  }
}
