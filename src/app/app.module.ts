import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: [],
  // comment the following line for the standalone version (see readme.md)
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const customHelloWorld = createCustomElement(HelloWorldComponent, {injector});
    customElements.define('app-hello-world-custom', customHelloWorld);
  }

  // uncomment the following line for the standalone version (see readme.md)
  // ngDoBootstrap() {} // function called by Angular when bootstrapping the application
}
