import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { LivroService } from "../livro.service";
import { livroActions } from "./livro.actions";

export const buscarLivroEffect = createEffect(
  (actions$ = inject(Actions), livroService = inject(LivroService)) => {
    return actions$
      .pipe(
        ofType(livroActions.carregarLivros),
        tap(() => console.log('Passou pelo Effect')),
        switchMap(() => livroService.obterLivrosApi()
          .pipe(
            map(livros => livroActions.livrosCarregadosSucesso({ livros }))
          )
        )
      )
  }, { functional: true }
)