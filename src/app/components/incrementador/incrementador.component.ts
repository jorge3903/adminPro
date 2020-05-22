import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();
 
  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarVal( newValue: number){

    // let elemHtml: any = document.getElementsByName('progreso')[0];
    // console.log(elemHtml.value);

    // console.log(this.txtProgress);
    if ( newValue >= 100){
      this.progreso = 100;
    }else if( newValue <=  0 ){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }
    // elemHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor( valor: number ){
    if(this.progreso + valor >= 100){
      this.progreso = 100;
      return ;
    }
    if(this.progreso + valor <= 0){
      this.progreso = 0;
      return ;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
