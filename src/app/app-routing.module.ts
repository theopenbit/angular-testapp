import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { InfoBoxComponent } from "./info-box/info-box.component";
import { MouseCursorComponent } from "./mouse-cursor/mouse-cursor.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

export const routes: Routes = [
    {
        path: "m",
        component: MouseCursorComponent
      },
      {
        path: "i",    
        component: InfoBoxComponent
      },
      {
        path: "books",
        component: BookListComponent
      },
      {
        path: "books/:isbn",
        component: BookDetailComponent
      },

  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/books"
  }

]

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        { enableTracing: false } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}