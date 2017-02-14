import {IHttpInterceptor} from "./interceptor.interface";
import {
  Request,
  Response
} from "@angular/http";
import {Observable} from "rxjs";
/**
 * Created by yulonh on 2016/11/22.
 */
export class HttpInterceptor implements IHttpInterceptor {
  // before(request: Request): Request;
  public before?(request: Request): Request|Observable<Request> {
    return request;
  }

  public after?(res: Observable<Response>): Observable<any> {
    return res;
  }
}
