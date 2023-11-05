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

  constructor(private cafeService:CafeService) { }

  getCafes():void{
    this.cafeService.getCafes().subscribe((cafe) =>{
      this.cafes = cafe;
    })
  }

  ngOnInit() {
    this.getCafes();
  }

}
