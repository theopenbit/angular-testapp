import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { ConfirmCandeactivateGuard } from "./shared/confirm-candeactivate.guard";
import { BookNewComponent } from "./book-new/book-new.component";

const routes: Routes = [{
  path: "",
  component: BookComponent,
  children: [{
    component: BookListComponent,
    path: ""
  },
  {
    component: BookNewComponent,
    path: "new"
  },
  
  { 
    component: BookDetailComponent,
    path: ":isbn",
    canDeactivate: [ConfirmCandeactivateGuard]
  },
  { 
    component: BookEditComponent,
    path: ":isbn/edit",
    canDeactivate: [ConfirmCandeactivateGuard]
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }

