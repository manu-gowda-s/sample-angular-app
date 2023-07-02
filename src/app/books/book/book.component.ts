import { Component, Input, OnInit, Output } from '@angular/core';
import { Books } from '../../types/Books';
import { CartService } from 'src/app/services/cart.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit  {

  
  @Input() book : Books ={} as Books;

  // sending data from child to parent
  // @Output() bookEmiter = new EventEmitter<Books>();

  constructor(private cartService: CartService){

  }

  ngOnInit(): void {
  }

  isIntheCart: boolean = false;

  addToCart(){
    this.isIntheCart = true;
    // then do this
    this.cartService.add(this.book);
    // this.bookEmiter.emit(this.book);
  }

  removeFromCart(){
    this.isIntheCart = false;
    //then remove
    this.cartService.remove(this.book);
  }
}
