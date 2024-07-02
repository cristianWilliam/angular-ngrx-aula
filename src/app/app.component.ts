import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LivroStateService } from '../livros/livro-state.service';
import { Livro } from '../livros/livro.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-aula';
  private livroStateService = inject(LivroStateService);
  protected livros$ = this.livroStateService.escutarMudancasDeLivros();

  private livroState2 = inject(LivroStateService);
  protected livros2$ = this.livroState2.escutarMudancasDeLivros('H');

  protected livroInput = '';

  ngOnInit(): void {
    this.livroStateService.carregarLivros();
  }

  adicionar() {
    const livro: Livro = {
      id: 10,
      nome: this.livroInput,
    };

    this.livroStateService.adicionarLivro(livro);
  }
}
