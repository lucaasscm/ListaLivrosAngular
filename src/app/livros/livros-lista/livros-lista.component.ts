import { Component, Input, OnInit } from '@angular/core';
import {Livro} from '../livros.model';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {

  /*livros = [
    {
    id: '1',
    titulo: 'O Hobbit',
    autor: 'J.R.R Tolkein',
    nPag: '280',
    },
    {
      id: '2',
      titulo: 'Harry Potter',
      autor: 'J.K Rowling',
      nPag: '900',
    },
    ];*/


    @Input() livros: Livro[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
