import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import { BookDataService } from "../shared/book-data.service";
import { Book } from "../shared/book";
import { Router } from "@angular/router";

@Component({
  selector: "book-new",
  templateUrl: "./book-new.component.html",
  styleUrls: ["./book-new.component.css"]
})
export class BookNewComponent implements OnInit {


  form: FormGroup;
  constructor(private fb: FormBuilder, private bookData: BookDataService , private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      "title": ["", Validators.required],
      "author": ["", Validators.required],
      "isbn": ["", Validators.compose([  Validators.required, Validators.minLength(11)] )],
    });
  }

  onSubmit() {
    if (this.form.get("title").hasError("required")) {
      alert("fck no title");
      return;
    }
    if (this.form.get("isbn").hasError("required")) {
      alert("no isbn --> not saving");
      return;
    }

    console.log(this.form.value);
     let newBook: Book;
     newBook = {newBook, ...this.form.value};

    this.bookData.newBook(newBook).subscribe(b => this.router.navigate(["/books"]));
  }
}
