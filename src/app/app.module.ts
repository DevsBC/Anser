import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { CmsLayoutComponent } from './layouts/cms-layout/cms-layout.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { HeaderComponent } from './components/header/header.component';
import { CardOptionComponent } from './components/card-option/card-option.component';
import { RegisterPinComponent } from './components/register-pin/register-pin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangPipe } from './pipes/lang.pipe';
import { ConsultDig12Component } from './components/consult-dig12/consult-dig12.component';
import { ConsultDig14Component } from './components/consult-dig14/consult-dig14.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CmsLayoutComponent,
    MaterialElevationDirective,
    HeaderComponent,
    CardOptionComponent,
    RegisterPinComponent,
    LangPipe,
    ConsultDig12Component,
    ConsultDig14Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
