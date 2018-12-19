import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class TestService {


  testTItle:String = 'Test Title';

  constructor(private http: HttpClient) {

  }

  getData(){
     return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
