import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairlistComponent } from './shared/components/fairlist/fairlist.component';
import { FaircardComponent } from './shared/components/fairlist/faircard/faircard.component';
import { FairdetailsComponent } from './shared/components/fairdetails/fairdetails.component';
import { GitlearningComponent } from './shared/components/gitlearning/gitlearning.component';

@NgModule({
  declarations: [
    AppComponent,
    FairlistComponent,
    FaircardComponent,
    FairdetailsComponent,
    GitlearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
