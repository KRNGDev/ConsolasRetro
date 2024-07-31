import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ConsolaComponent } from './components/consola/consola.component';
import { ConsolaserviceService } from './service/consolaservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ConsolaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ConsolasRetro';
  constructor(public gestorConsola: ConsolaserviceService) {

  }
}
