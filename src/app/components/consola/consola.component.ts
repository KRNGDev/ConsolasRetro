import { Component, Input } from '@angular/core';
import { Consola } from '../../interface/consola';
import { ConsolaserviceService } from '../../service/consolaservice.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-consola',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './consola.component.html',
  styleUrl: './consola.component.css'
})
export class ConsolaComponent {
  @Input() consola: Consola | any;
  @Input() index: number | any;

  constructor(public consolaservice: ConsolaserviceService) {

  }
  eliminarConsola(dato: number) {
    console.log("Pulsado");
    this.consolaservice.quitarConsola(dato);
    console.log("otra");

  }
}
