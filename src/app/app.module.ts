import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DisabledDirective } from './input-directives/disabled.directive';
import { InvalidDirective } from './input-directives/invalid.directive';
import { HelperTextDirective } from './input-directives/helper-text.directive';
import { ValueDirective } from './input-directives/value.directive';
import { SizeDirective } from './input-directives/size.directive';
import { FullWidthDirective } from './input-directives/full-width.directive';
import { StartIconDirective } from './input-directives/start-icon.directive';
import { EndIconDirective } from './input-directives/end-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisabledDirective,
    InvalidDirective,
    HelperTextDirective,
    ValueDirective,
    SizeDirective,
    FullWidthDirective,
    StartIconDirective,
    EndIconDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
