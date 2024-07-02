import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Livro } from './livro.model';
import { LivroService } from './livro.service';

@Injectable({
  providedIn: 'root',
})
export class LivroStateService {
  private livros$ = new BehaviorSubject<Livro[]>([]);
  private livroService = inject(LivroService);

  carregarLivros() {
    this.livroService
      .obterLivrosApi()
      .pipe(take(1))
      .subscribe((livros) => this.publicarLivrosParaTodosOuvintes(livros));
  }

  private publicarLivrosParaTodosOuvintes(livros: Livro[]) {
    this.livros$.next(livros);
  }

  escutarMudancasDeLivros(comecaCom: string = '') {
    if (!comecaCom) return this.livros$.asObservable();

    return this.livros$.pipe(
      map((todosLivros) =>
        todosLivros.filter((x) => x.nome.startsWith(comecaCom))
      )
    );
  }

  adicionarLivro(livro: Livro) {
    const livrosAtuais = this.livros$.value;
    this.livros$.next([...livrosAtuais, livro]);
  }
}
