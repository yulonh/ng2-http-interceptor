import {
  Connection,
  ReadyState,
  Request,
  XHRBackend,
  Response
} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";

export class HttpInterceptorConnection implements Connection {
  public readyState: ReadyState;
  public request: Request;
  public response: Observable<Response>;
  public subscription: Subscription;

  constructor(requestObservable: Observable<Request>, xhrBackend: XHRBackend) {
    this.response = new Observable<Response>(
      (responseObserver: Observer<Response>) => {
        this.subscription = requestObservable.subscribe((req) => {
            this.request = req;
            let xhrConnection = xhrBackend.createConnection(req);
            xhrConnection.response.subscribe(
              (response) => responseObserver.next(response),
              (error) => responseObserver.error(error),
              () => responseObserver.complete()
            );
          },
          (error) => console.error(error));
      }
    );
  }
}
