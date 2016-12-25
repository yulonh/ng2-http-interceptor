import {HttpInterceptor} from "../../http_interceptor";
import {Request} from "@angular/http";
export class TestInterceptor implements HttpInterceptor {

  constructor() {
  }

  before(request: Request) {
    request.url = '/interceptor';
    return request;
  }
}
