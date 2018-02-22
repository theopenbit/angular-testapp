import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { Book } from "../shared/book";
import { BookDataService } from "../shared/book-data.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";


@Component({
  // tslint:disable-next-line:component-selector
  selector: "book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated // |  None 
})
export class BookListComponent implements OnInit, OnDestroy {


  booksSub: Subscription;
  books: Book[];
  titles: String[] ;
  constructor(private bookData: BookDataService) {

  }

  getBooktitles() {
    return this.titles ;
  }

  getBooks() {
    return this.books ;
  }
  ngOnInit() {
    this.booksSub = this.bookData.getBooks().subscribe(data => this.books = data  );
    this.bookData.getBooks().pipe(
      map(books => books.map(book => book.title)),
      map(titles => titles.map(title => title.split("").reverse().join("")))
    ).subscribe(t => this.titles = t);
  }

  ngOnDestroy(): void {
   this.booksSub.unsubscribe();
  }

}
