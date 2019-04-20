import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { User } from "../interfaces/user.interface";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoansService {
  public users: User[];
  public url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.url);
  }

  newLoan(user: User) {
    let body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post(this.url, user, httpOptions).pipe(
      map(res => {
        return res;
      })
    );
  }
}
