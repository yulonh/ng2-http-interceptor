/**
 * Created by yulonh on 2016/11/22.
 */
import {Request, Response} from '@angular/http'
import {Observable} from 'rxjs';
export interface HttpInterceptor {
    before?(request: Request): Request;
    after?(res: Observable<Response>): Observable<any> ;
}
