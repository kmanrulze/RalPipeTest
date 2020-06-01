import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThisIsMyComponentComponent } from './this-is-my-component/this-is-my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisIsMyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
