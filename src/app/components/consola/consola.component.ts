import { Component, Input } from '@angular/core';
import { Consola } from '../../interface/consola';
import { ConsolaserviceService } from '../../service/consolaservice.service';

@Component({
  selector: 'app-consola',
  standalone: true,
  imports: [],
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
