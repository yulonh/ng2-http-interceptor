import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HttpInterceptorModule} from "../http_interceptor_module";
import {TestInterceptor} from "./interceptors/test.interceptor";
import {TestService} from "./services/test.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpInterceptorModule.withInterceptors([TestInterceptor])
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
