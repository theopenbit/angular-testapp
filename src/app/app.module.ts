import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./app.component";
import { InfoBoxComponent } from "./info-box/info-box.component";
import { MouseCursorComponent } from "./mouse-cursor/mouse-cursor.component";
import { TitleBoxComponent } from "./title-box/title-box.component";
import { BookListComponent } from "./book-list/book-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { BookDataService } from "./shared/book-data.service";
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
