import { MdAngularModule } from './material-design-module/md-angular.module';
import { MdBootstrapModule } from './material-design-module/md-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MdBootstrapModule,
    MdAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
