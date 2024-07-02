import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Livro } from "./livro.model";

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private obterLivros(): Livro[] {
    return [
      {
        id: 1,
        nome: 'Harry Potter',
      },
      {
        id: 2,
        nome: 'Senhor do Aneis',
      },
    ];
  }

  obterLivrosApi() {
    return of(this.obterLivros()).pipe(delay(1000));
  }
}