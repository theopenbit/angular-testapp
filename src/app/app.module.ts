import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./app.component";
import { InfoBoxComponent } from "./info-box/info-box.component";
import { MouseCursorComponent } from "./mouse-cursor/mouse-cursor.component";
import { TitleBoxComponent } from "./title-box/title-box.component";
import { AppRoutingModule } from "./app-routing.module";
import { NotfoundComponent } from './notfound/notfound.component';
import { TooltipDirective } from './shared/tooltip.directive';



@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    NotfoundComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
