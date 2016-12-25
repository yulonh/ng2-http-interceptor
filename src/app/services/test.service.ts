import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class TestService {
  constructor(private  http: Http) {
  }

  getToken(): Observable<Response> {
    return this.http.get(``);
  }

  getUser() {
    return this.http.get('/user').catch(err => {
      console.log(err);
      return Observable.of(err);
    });
  }
}
