import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items.component';
import { ItemDetailedViewComponent } from './item-detailed-view/item-detailed-view.component';
import { AlllistitemsComponent } from './alllistitems/alllistitems.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemsComponent,
    ItemDetailedViewComponent,
    AlllistitemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
