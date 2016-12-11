/**
 * Created by yulonh on 2016/11/22.
 */
import {ConnectionBackend, XHRConnection, XHRBackend} from '@angular/http'
import {HttpInterceptor} from './http_interceptor';

export class HttpInterceptorBackend implements ConnectionBackend {
    constructor(private httpInterceptors: HttpInterceptor[], private xhrBackend: XHRBackend) {
    }

    createConnection(request: any): XHRConnection {
        let req: any = request, interceptor: HttpInterceptor;
        for (interceptor of this.httpInterceptors) {
            req = interceptor.before ? interceptor.before(req) : req;
        }

        let result: XHRConnection = this.xhrBackend.createConnection(req);

        for (interceptor of this.httpInterceptors) {
            result.response = interceptor.after ? interceptor.after(result.response) : result.response;
        }

        return result;
    }
}
