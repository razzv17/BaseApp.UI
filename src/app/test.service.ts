import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTests(): Observable<any> {
    return this.http.get('http://localhost:7288/test/getfromdb');
  }
}
