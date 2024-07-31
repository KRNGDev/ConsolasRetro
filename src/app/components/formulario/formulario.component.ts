import { Component } from '@angular/core';
import { ConsolaserviceService } from '../../service/consolaservice.service';
import { Consola } from '../../interface/consola';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public nombre: string = "";
  public fecha: string = "";
  public empresa: string = "";
  public imagenUrl: string = "";

  constructor(private consolaservice: ConsolaserviceService) {

  }
  crearConsola() {
    const nuevaConsola: Consola = {
      nombre: this.nombre,
      fecha: this.fecha,
      empresa: this.empresa,
      imagenUrl: this.imagenUrl
    }
    console.log("Creando consola:" + this.nombre + " : " + this.empresa);
    this.consolaservice.agregarConsola(nuevaConsola);
  }

}
