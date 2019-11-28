import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { TemplateFormModule } from './components/template-form/template-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TemplateFormModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
