import { Injectable } from '@angular/core';
import { Consola } from '../interface/consola';
//para la comunicacion HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsolaserviceService {

  static httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  static URL: string = "https://api.game.albertolopma.top";
  static PATH = "/games";

  constructor(private clienteHttp: HttpClient) {
    this.load();
    this.clienteHttp.get<Consola[]>(`${ConsolaserviceService.URL}${ConsolaserviceService.PATH}`)
      .forEach(data => {
        data.forEach(consola => {
          this.consolas.push(consola);
        });
      })
  }

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
