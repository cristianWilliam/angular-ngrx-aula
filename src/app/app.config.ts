import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { buscarLivroEffect } from '../livros/state/livro.effects';
import { routes } from './app.routes';
import { appReducers } from './state/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(appReducers),
    provideEffects({ buscarLivroEffect })
]
};
