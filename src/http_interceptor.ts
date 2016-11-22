/**
 * Created by yulonh on 2016/11/22.
 */
import {Request, Response} from '@angular/http'
import {Observable} from 'rxjs';
export class HttpInterceptor {
  before(request: Request): Request {
    return request;
  };

  after(res: Observable<Response>): Observable<any> {
    return res;
  };
}

export type httpInterceptor = {
  before?: any;
  after?: any;
}
