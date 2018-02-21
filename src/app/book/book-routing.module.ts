import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

const routes: Routes = [{
  path: "books",
  component: BookComponent,
  children: [{
    component: BookListComponent,
    path: ""
  }, { 
    component: BookDetailComponent,
    path: ":isbn"
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }

