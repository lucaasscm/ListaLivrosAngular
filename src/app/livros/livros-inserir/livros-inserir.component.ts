import { Component, EventEmitter, Output } from '@angular/core';
import {Livro} from '../livros.model';
@Component({
selector: 'app-livros-inserir',
templateUrl: './livros-inserir.component.html',
styleUrls:['./livros-inserir.component.css']
})
export class LivrosInserirComponent {
  @Output() livroAdicionado = new EventEmitter<Livro>();
  id: string;
  titulo: string;
  autor: string;
  nPag: string;
  onAdicionarLivro() {
    const livro: Livro = {
      titulo: this.titulo,
      autor: this.autor,
      id: this.id,
      nPag: this.nPag
    };
    this.livroAdicionado.emit(livro);
    }
}
