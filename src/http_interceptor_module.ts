/**
 * Created by yulonh on 2016/11/22.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import {Http, RequestOptions, XHRBackend} from '@angular/http';
import {HttpInterceptor} from './http_interceptor';
import {InterceptorXHRBackend} from  './interceptor_xhr_backend';

/**
 * The module that includes http interceptor providers
 */
@NgModule()
export class HttpInterceptorModule {
  static withInterceptors(httpInterceptors: HttpInterceptor[]): ModuleWithProviders {

    function interceptorXHRBackendFactory(xhrBackend: XHRBackend) {
      return new InterceptorXHRBackend(httpInterceptors, xhrBackend);
    }

    return {
      ngModule: HttpInterceptorModule,
      providers: [
        {provide: InterceptorXHRBackend, useFactory: interceptorXHRBackendFactory, deps: [XHRBackend]},
        {provide: Http, useClass: Http, deps: [InterceptorXHRBackend, RequestOptions]}
      ]
    };
  }
}
