import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService {

  constructor(public http: Http) { }

  public postRequest(url, data) {
    this.http.post(url, data)
      .map(res => {
        return res.json()
      })
  }

}
