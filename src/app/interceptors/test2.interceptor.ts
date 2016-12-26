import {HttpInterceptor} from "../../http_interceptor";
import {Request} from "@angular/http";
import {Observable} from "rxjs";
export class Test2Interceptor implements HttpInterceptor {
  before(request: Request) {
    console.log("Test2Interceptor");
    request.url = '/cancel';
    return Observable.throw("cancel");
  }
}
