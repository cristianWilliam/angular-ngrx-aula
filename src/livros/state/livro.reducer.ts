import { createReducer, on } from "@ngrx/store";
import { Livro } from "../livro.model";
import { livroActions } from "./livro.actions";

enum LivroStatus {
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success'
}

export interface LivroState {
  livros: Livro[],
  error: '' | null,
  status: LivroStatus
}

const initialState: LivroState = {
  error: null,
  status: LivroStatus.pending,
  livros: []
}

export const livroReducer = createReducer(
  initialState,
  on(livroActions.carregarLivros, (stateAtual) => {
    console.log('Passou por aqui', stateAtual)
    return {
      ...stateAtual,
      status: LivroStatus.loading
    }
  }),
  on(livroActions.livrosCarregadosSucesso, (stateAtual, livroObj) => {
    return {
      ...stateAtual,
      livros: livroObj.livros,
      status: LivroStatus.success
    }
  }),
  on(livroActions.adicionarLivros, (stateAtual, livro) => {
    return {
      ...stateAtual,
      livros: [...stateAtual.livros, livro]
    }
  })
);