import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo='Aplicación de calculadora';
  operandoA!: number;
  operandoB!: number;
  resultadoM!: number;
  resultadoPor!:number;
  resultadoBImp!: number;
  resultadoT!: number;
  resultadoFE!: number;
  resultadoIR!: number;

  onSumar():void{
    this.resultadoM = this.operandoA * 12;
    this.resultadoPor = this.resultadoM * 0.0945;
    //this.resultadoBImp = this.resultadoPor - this.resultadoM;
    this.resultadoBImp = this.resultadoM - this.resultadoPor;
    if(this.resultadoBImp > 0 && this.resultadoBImp <=11310.00 ){

    }else if(this.resultadoBImp > 11310.00 &&this.resultadoBImp <= 14410.00){
      this.resultadoT = this.resultadoBImp - 11310;
      this.resultadoFE = this.resultadoT * 0.05;
      this.resultadoIR = this.resultadoFE + 0;

      
    }else if(this.resultadoBImp > 14410.00 && this.resultadoBImp <= 18010.01){
      this.resultadoT = this.resultadoBImp - 14410;
      this.resultadoFE = this.resultadoT * 0.10;
      this.resultadoIR = this.resultadoFE + 155.00;

    }else if(this.resultadoBImp > 18010.01 && this.resultadoBImp <= 21630.00 ){
      this.resultadoT = this.resultadoBImp - 18010;
      this.resultadoFE = this.resultadoT * 0.12;
      this.resultadoIR = this.resultadoFE + 515.00;

    }else if(this.resultadoBImp > 21630.00 && this.resultadoBImp <= 31630.00 ){
      this.resultadoT = this.resultadoBImp - 21630;
      this.resultadoFE = this.resultadoT * 0.15;
      this.resultadoIR = this.resultadoFE + 949.40;

    }else if(this.resultadoBImp > 31630.00 && this.resultadoBImp <= 41630.00 ){
      this.resultadoT = this.resultadoBImp - 31630;
      this.resultadoFE = this.resultadoT * 0.20;
      this.resultadoIR = this.resultadoFE + 2449.40;

    }else if(this.resultadoBImp > 41630.00 && this.resultadoBImp <= 51630.00 ){
      this.resultadoT = this.resultadoBImp - 41630;
      this.resultadoFE = this.resultadoT * 0.25;
      this.resultadoIR = this.resultadoFE + 4449.40;

    }else if(this.resultadoBImp > 51630.00 && this.resultadoBImp <= 61630.00 ){
      this.resultadoT = this.resultadoBImp - 51630;
      this.resultadoFE = this.resultadoT * 0.30;
      this.resultadoIR = this.resultadoFE + 6949.40;

    }else if(this.resultadoBImp > 61630.00 && this.resultadoBImp <= 100000.00){
      this.resultadoT = this.resultadoBImp - 61630;
      this.resultadoFE = this.resultadoT * 0.35;
      this.resultadoIR = this.resultadoFE + 6949.40;

    }else if(this.resultadoBImp > 100000.00){
      this.resultadoT = this.resultadoBImp - 100000;
      this.resultadoFE = this.resultadoT * 0.37;
      this.resultadoIR = this.resultadoFE + 23378.90;

    }
  }
}
