# angular2-http-interceptor
Http interceptor for angular2. Built with <a href="https://github.com/manekinekko/angular-library-starter">angular-library-starter</a>

## Features

* Registering interceptors globally
* Separate interceptors for requests and responses
* Modify requests (even url) from request interceptors
* Cancel requests from request interceptors
* Modify responses from response interceptors
* Interceptor Service is not coupled with Http Service
* Choose between overriding original Http Service or keep it and still use interceptors
* Support AOT.

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)

## Installation

To install this library, run:

```bash
$ npm install angular2-http-interceptor --save
```

## Usage
First, write your interceptor.

```typescript
import {Request, Response} from '@angular/http';
import {Inject} from '@angular/core';
import {Platform} from 'ionic-angular';

import {IHttpInterceptor} from 'angular2-http-interceptor';
export class AuthInterceptor implements IHttpInterceptor {
  constructor(@Inject(Platform) private platform: Platform) {
  }

  before(request: Request): Request {
    if (this.platform.is('cordova') && request.url.match(/^\/api-hk\//)) {
      request.url = `http://yulonh.com${request.url}`;
    }
    return request;
  }
}
```

Then add code   ```HttpInterceptorModule.withInterceptors([AuthInterceptor])``` in ```app.module.ts``` file.

```typescript
...
import {HttpInterceptorModule} from 'angular2-http-interceptor';

@NgModule({
  ...
  imports: [
    ...
    HttpInterceptorModule.withInterceptors(      [{
                                                   deps: [Platform],
                                                   provide: HttpInterceptor,
                                                   useClass: AuthInterceptor,
                                                   multi: true
                                                 }])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...
  ],
  providers: [...]
})
export class AppModule {

}
```

## License

MIT © [yulonh](421998192@qq.com)