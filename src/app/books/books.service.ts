import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getAllBooks(){
    return [
      {
        name : 'Clean Code',
        author: 'Robert Martin',
        image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        ammount: 599
      },
      {
        name: 'Learning with Python',
        author: 'Allen Downey',
        image: 'https://m.media-amazon.com/images/I/51R9msLhVrL._SX352_BO1,204,203,200_.jpg',
        ammount: 799
      },
      {
        name:'Java for Dummies',
        author:'Barry burd',
        image:'https://m.media-amazon.com/images/I/51IAhnRcQRL._SX385_BO1,204,203,200_.jpg',
        ammount: 650
      },
      {
        name:'Data Analytics using Python',
        author:'Bharti motwani',
        image:'https://m.media-amazon.com/images/I/41rniDM2CkL._SX378_BO1,204,203,200_.jpg',
        ammount: 499
      }
    ]
  }
}
