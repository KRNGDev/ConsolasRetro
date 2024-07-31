import { Injectable } from '@angular/core';
import { Consola } from '../interface/consola';

@Injectable({
  providedIn: 'root'
})
export class ConsolaserviceService {

  consolas: Consola[] = [];


  quitarConsola(index: number) {
    const indice = index;
    console.log("quitar " + indice);
    if (indice !== -1) {
      console.log("en el if");
      this.consolas.splice(indice, 1);
      console.log(this.consolas);
      this.save();
    }
    else {
      console.log(`No se encontró un objeto con el nombre "${index}".`);

    }

  }
  agregarConsola(consola: Consola) {
    this.consolas.push(consola);
    this.save()
  }

  private static LS_KEY = "consolas";
  constructor() {
    this.load();
  }
  public load() {
    const data = localStorage.getItem(ConsolaserviceService.LS_KEY);
    if (data != null) {
      this.consolas = JSON.parse(data);
    }
  }
  public save() {
    const data = JSON.stringify(this.consolas);
    localStorage.setItem(ConsolaserviceService.LS_KEY, data);
  }


}
