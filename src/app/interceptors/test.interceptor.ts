import {HttpInterceptor} from "../../http_interceptor";
import {Request} from "@angular/http";
export class TestInterceptor implements HttpInterceptor {
  before(request: Request) {
    console.log("TestInterceptor");
    request.url = '/interceptor';
    return request;
  }
}
