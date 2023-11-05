import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';



@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafeComponent implements OnInit {

  cafes:Array<Cafe>= [];

  totalesPorTipo: Cafe[]=[];
  contador: {[key: string]: number} = {};

  constructor(private cafeService:CafeService) {
   
   }
   //obtene el servicio del api
  getCafes():void{
    this.cafeService.getCafes().subscribe((cafe) =>{
      this.cafes = cafe;
      this.totalesPorTipo = cafe;
      this.contarTipos();
    })
  }

  //contador de tipos de café
  contarTipos() {  

    for (const totalTipos of this.totalesPorTipo) {
      if (this.contador[totalTipos.tipo]) {
        this.contador[totalTipos.tipo]++;
      } else {
        this.contador[totalTipos.tipo] = 1;
      }
    }

    console.log(this.contador); // Esto imprimirá el objeto con el conteo de tiposde cafe
  }
  

  ngOnInit() {
    this.getCafes();      
  }

  

}
