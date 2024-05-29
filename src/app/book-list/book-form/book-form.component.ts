import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }
  
  onSaveBook() {
    const titleControl = this.bookForm.get('title');
    const authorControl = this.bookForm.get('author');
    const synopsisControl = this.bookForm.get('synopsis');
  
    if (!titleControl ||!authorControl ||!synopsisControl) {
      console.error("Un ou plusieurs champs du formulaire sont manquants.");
      return;
    }
  
    const title = titleControl.value;
    const author = authorControl.value;
    const synopsis = synopsisControl.value;
    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }
}

