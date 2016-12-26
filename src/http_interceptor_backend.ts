/**
 * Created by yulonh on 2016/11/22.
 */
import {ConnectionBackend, XHRBackend, Request} from "@angular/http";
import {HttpInterceptor} from "./http_interceptor";
import {Observable} from "rxjs";
import {HttpInterceptorConnection} from "./http_interceptor_connection";

export class HttpInterceptorBackend implements ConnectionBackend {
  constructor(private httpInterceptors: HttpInterceptor[], private xhrBackend: XHRBackend) {
  }

  createConnection(request: any): HttpInterceptorConnection {
    let reqObs: Observable<Request> = Observable.of(request);
    for (let interceptor of this.httpInterceptors) {
      if (!interceptor.before)
        continue;
      reqObs = reqObs.mergeMap(req => {
        let nextReq = interceptor.before(req);
        return nextReq instanceof Observable ? nextReq : Observable.of(nextReq);
      });
    }
    let connection = new HttpInterceptorConnection(reqObs, this.xhrBackend);
    this.httpInterceptors.forEach(interceptor => {
      if (interceptor.after) {
        connection.response = interceptor.after(connection.response);
      }
    });
    return connection;
  }
}
