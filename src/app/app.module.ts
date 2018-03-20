import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './/app-routing.module';
import { AuthGuardService } from './shared/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
