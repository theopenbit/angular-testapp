import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { Book } from '../shared/book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  isbn: String;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: {isbn: string}) => {
        this.isbn = params.isbn;
        this.bookData.getBookByIsbn(params.isbn).subscribe(b => this.book = b);
    } );
  }

}
