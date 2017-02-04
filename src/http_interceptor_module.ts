/**
 * Created by yulonh on 2016/11/22.
 */
import {NgModule, ModuleWithProviders, Type, Provider, OpaqueToken} from "@angular/core";
import {
  Http,
  RequestOptions,
  XHRBackend,
  BaseRequestOptions,
  ResponseOptions,
  BaseResponseOptions,
  XSRFStrategy,
  CookieXSRFStrategy,
  BrowserXhr
} from "@angular/http";
import {HttpInterceptor} from "./http_interceptor";
import {HttpInterceptorBackend} from "./http_interceptor_backend";

export function httpFactory(httpInterceptorBackend: HttpInterceptorBackend, requestOptions: RequestOptions): Http {
  return new Http(httpInterceptorBackend, requestOptions);
}


export function createDefaultCookieXSRFStrategy() {
  return new CookieXSRFStrategy();
}

/**
 * The module that includes http interceptor providers
 */
@NgModule()
export class HttpInterceptorModule {
  static withInterceptors(interceptorTypes: Type<HttpInterceptor>[]): ModuleWithProviders {
    let opaqueToken: OpaqueToken = new OpaqueToken('HttpInterceptor');

    let interceptorProviders: Provider[] = interceptorTypes.map(type => {
      return {provide: opaqueToken, useClass: type, multi: true};
    });

    return {
      ngModule: HttpInterceptorModule,
      providers: interceptorProviders.concat([
        {provide: HttpInterceptorBackend, useClass: HttpInterceptorBackend, deps: [opaqueToken, XHRBackend]},
        {provide: Http, useFactory: httpFactory, deps: [HttpInterceptorBackend, RequestOptions]},
        BrowserXhr,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ResponseOptions, useClass: BaseResponseOptions},
        XHRBackend,
        {provide: XSRFStrategy, useFactory: createDefaultCookieXSRFStrategy},
      ])
    };
  }
}
