import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { LinksComponent } from "../links/links.component";
import { ExpComponent } from "../exp/exp.component";
import { GameComponent } from "../game/game.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [AboutComponent, LinksComponent, ExpComponent, GameComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
