import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookRoutingModule } from "./book-routing.module";
import { BookComponent } from "./book/book.component";
import { BookDataService } from "./shared/book-data.service";
import { ConfirmCandeactivateGuard } from "./shared/confirm-candeactivate.guard";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";
import { TooltipDirective } from "../shared/tooltip.directive";

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookDataService, ConfirmCandeactivateGuard],
  declarations: [BookComponent,
    BookDetailComponent,
    BookListComponent,
    BookEditComponent,
    BookNewComponent
      ]
})
export class BookModule { }
