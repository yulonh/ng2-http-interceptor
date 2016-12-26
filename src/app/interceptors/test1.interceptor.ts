import {HttpInterceptor} from "../../http_interceptor";
import {Request} from "@angular/http";
import {Observable} from "rxjs";
export class Test1Interceptor implements HttpInterceptor {
  before(request: Request) {
    console.log("Test1Interceptor");
    request.url = '/observable';
    return Observable.of(request);
  }
}
