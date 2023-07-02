import { Component, OnInit } from '@angular/core';
import { Books } from '../types/Books';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  // Books is array of Books Interface
  allBooks: Books [] = [];

  isDisabled:boolean = false;

  // Performing Dependency Injection on Constructor
  constructor(private booksService: BooksService)
  {
    // when the class initated this object will be loaded
    // we can also use this line in ngOnInIt method
    // this.allBooks=this.booksService.getAllBooks();
  }

  ngOnInit(): void {
    this.allBooks=this.booksService.getAllBooks();
  }

  isShowing:boolean = true;

  // Consuming data from the child component
  // addToCart(event : any){
  //   console.log(event);
  // }

}
