import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getCovidData(): Observable<any> {
    return this.http.get("https://corona.lmao.ninja/v2/countries");
  }

}
