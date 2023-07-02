import { Injectable } from '@angular/core';
import { Books } from '../types/Books';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //create an Array of type Books
  cart: Books [] = [];

  constructor() { }

  add(books : Books){
    console.log(books);
    // adding book to cart
    this.cart.push(books);
  }

  get(){
    return this.cart;
  }

  remove(books : Books){
    // Using filter and removing from the cart
    this.cart = this.cart.filter((b) => b != books);
  }
}
