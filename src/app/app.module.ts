import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HttpInterceptorModule} from "../http_interceptor_module";
import {TestInterceptor} from "./interceptors/test.interceptor";
import {TestService} from "./services/test.service";
import {Test1Interceptor} from "./interceptors/test1.interceptor";
import {Test2Interceptor} from "./interceptors/test2.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpInterceptorModule.withInterceptors([TestInterceptor, Test1Interceptor, Test2Interceptor])
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
