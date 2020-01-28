import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://localhost:5001/api/Student';

  constructor(private http: HttpClient) { }

  getuser(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.url);
  }
}
