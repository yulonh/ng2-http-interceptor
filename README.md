# angular2-http-interceptor
Http interceptor for angular2.

## Features

* Registering interceptors globally
* Separate interceptors for requests and responses
* Modify requests (even url) from request interceptors
* Cancel requests from request interceptors
* Modify responses from response interceptors
* Interceptor Service is not coupled with Http Service
* Choose between overriding original Http Service or keep it and still use interceptors

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
import {Observable} from 'rxjs';

import {HttpInterceptor} from 'angular2-http-interceptor';
export class AuthInterceptor implements HttpInterceptor {
  before(request: Request): Request {
    //do something ...
    console.log(request);
    return request;
  }

  after(res: Observable<Response>): Observable<any> {
    //do something ...
    console.log(res);
    return res;
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
    HttpInterceptorModule.withInterceptors([AuthInterceptor])
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
