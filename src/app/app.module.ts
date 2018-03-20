import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './/app-routing.module';
import { CustomPipe } from './shared/custom.pipe';
import {AuthGuard} from './shared/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    BaseModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
