import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrencies,  } from '../ICurrencies';
import { IHistory } from '../IHistory';
@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  checkHistory!: IHistory[];
  constructor(private http: HttpClient) {
    if(localStorage.getItem("checkHistory") === null)
    {
     localStorage.setItem("checkHistory", 'null');
    }
  }
  getCurrencyTypes(): Observable<ICurrencies> {
    return this.http.get<ICurrencies>("https://v6.exchangerate-api.com/v6/7e8a74d1ea24d8ea5179702c/latest/USD")
  }
}
