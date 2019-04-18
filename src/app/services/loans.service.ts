import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  users: any[] = [];

  constructor(private http: HttpClient) {
    console.log('servicio listo');
  }

  getUsers() {
    return this.http.get(`http://localhost:3000/users`);
  }
}
