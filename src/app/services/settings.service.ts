import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  }

  constructor() {
    this.cargarAjustes();
  }

  guardarAjustes(){
    console.log('Tema guardado en el LocalStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')){
      console.log('Tema cargado del LocalStorage');
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log(this.ajustes.tema);
      this.aplicarTema(this.ajustes.tema);
    } else {
      console.log('Tema por defecto cargado');
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string){
    const documento = document.getElementsByName('tema')[0];
    const url = `assets/css/colors/${tema}.css`;
    documento.setAttribute('href', url);
    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
