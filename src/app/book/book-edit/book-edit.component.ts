import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookDataService } from "../shared/book-data.service";
import { Book } from "../shared/book";

@Component({
  selector: "book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.css"]
})
export class BookEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookData: BookDataService, private router: Router) { }
  book: Book;
  orig_isbn: String;
  ngOnInit() {
    this.route.params.subscribe(
      (params: {isbn: string}) => {
        this.orig_isbn = params.isbn;
        this.bookData.getBookByIsbn(params.isbn).subscribe(b => this.book = b);
    } );
  }
  save(){
    console.log(this.book);
    this.bookData.save(this.orig_isbn,this.book).subscribe(b => this.router.navigate(["/books"]));

  }

}
