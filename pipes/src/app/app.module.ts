import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import {FormsModule} from "@angular/forms"
import {registerLocaleData} from "@angular/common"

import { AppComponent } from "./app.component";
import { ExemplosPipeComponent } from "./exemplos-pipe/exemplos-pipe.component";
import { CamelCasePipe } from "./camel-case.pipe";
import {SettingsService} from ".//settings.service";
import { FiltroArrayPipe } from './filtro-array.pipe'

import br from '@angular/common/locales/br';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

registerLocaleData(br, 'pt-BR');


@NgModule({
  declarations: [AppComponent, ExemplosPipeComponent, CamelCasePipe, FiltroArrayPipe, FiltroArrayImpuroPipe,],
  imports: [BrowserModule, FormsModule],
  // providers: [
  //   //   {
  //   //   provide: LOCALE_ID,
  //   //   useValue: "pt-BR",
  //   // }],
  //   SettingsService,{
  //     provide: LOCALE_ID,
  //     deps:[SettingsService],
  //     useFactory:(settingsService) => settingsService.getLocale()
  //   }

  // ],
  bootstrap: [AppComponent]
})
export class AppModule {}
