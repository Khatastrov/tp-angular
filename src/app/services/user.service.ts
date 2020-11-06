import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API: string = "http://localhost:8080/lunchtime";
const TOKEN: string = "we do not care";
const AMOUNT: number = 10;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  option = {
    headers: {
      "authorization": TOKEN
    }
  };

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(API + '/user/findall', this.option);
  }

  addMoney(userId) {
    return this.http.post(
      `${API}/user/credit/${userId}?amount=${AMOUNT}`,
      this.option
    );
  }

  removeMoney(userId) {
    return this.http.post(
      `${API}/user/debit/${userId}?amount=${AMOUNT}`,
      this.option
    );
  }
}
