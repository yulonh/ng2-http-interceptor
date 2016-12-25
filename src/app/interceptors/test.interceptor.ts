import {HttpInterceptor} from "../../http_interceptor";
import {Request} from "@angular/http";
export class TestInterceptor implements HttpInterceptor {
  before(request: Request) {
    request.url = '/interceptor';
    return request;
  }
}
