import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [FormsModule, NgIf,NgFor ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  numeroSecreto: string = '';
  palpite: string = '';
  resposta: { bulls: number; cows: number } | null = null;
  historicoDePalpites: { palpite: string; bulls: number; cows: number }[] = [];

  ngOnInit(): void {
    this.gerarNumeroSecreto();
  }


  gerarNumeroSecreto(): void {
    const digitos = Array.from({ length: 10 }, (_, i) => i.toString());
    this.numeroSecreto = digitos
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
      .join('');
    console.log('Número Secreto:', this.numeroSecreto);
  }

  // Verifica o palpite do jogador
  verificarPalpite(palpite: string): { bulls: number; cows: number } {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < palpite.length; i++) {
      if (palpite[i] === this.numeroSecreto[i]) {
        bulls++;
      } else if (this.numeroSecreto.includes(palpite[i])) {
        cows++;
      }
    }

    return { bulls, cows };
  }


  enviarPalpite(): void {
    if (this.palpite.length !== 6 || !/^\d+$/.test(this.palpite)) {
      alert('Por favor, insira um número válido de 6 dígitos únicos.');
      return;
    }

    this.resposta = this.verificarPalpite(this.palpite);
    this.historicoDePalpites.push({ ...this.resposta, palpite: this.palpite });
    this.palpite = '';

    if (this.resposta.bulls === 6) {
      alert('Parabéns! Você acertou o número secreto!');
    }
  }
}
