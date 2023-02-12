import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  resultadoSelecionado: any;

  constructor(private router: Router, private buscaResultadoLotomania: ResultadosService){}

  ngOnInit() {

    this.buscaResultadoLotomania.buscaLotomania(10).subscribe((result: any) =>{
      this.resultadoSelecionado = result;
      console.log(this.resultadoSelecionado)
    })



  }


 

}
