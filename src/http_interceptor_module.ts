/**
 * Created by yulonh on 2016/11/22.
 */
import {
  NgModule,
  ModuleWithProviders,
  Provider
} from "@angular/core";
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
  public static withInterceptors(interceptors: Provider[]): ModuleWithProviders {
    return {
      ngModule: HttpInterceptorModule,
      providers: [
        ...interceptors,
        {
          deps: [HttpInterceptor, XHRBackend],
          provide: HttpInterceptorBackend,
          useClass: HttpInterceptorBackend,
        },
        {
          deps: [HttpInterceptorBackend, RequestOptions],
          provide: Http,
          useFactory: httpFactory,
        },
        BrowserXhr,
        {
          provide: RequestOptions,
          useClass: BaseRequestOptions
        },
        {
          provide: ResponseOptions,
          useClass: BaseResponseOptions
        },
        XHRBackend,
        {
          provide: XSRFStrategy,
          useFactory: createDefaultCookieXSRFStrategy
        },
      ]
    };
  }
}
