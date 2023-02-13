import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  resultadoSelecionado: any;
  //concursoSelecionado: any;

  constructor(private router: Router, private buscaResultadoLotomania: ResultadosService, private getRoute: ActivatedRoute) { }

  ngOnInit() {
    const concursoSelecionado = this.getRoute.snapshot.queryParams['data'];
    this.buscaResultadoLotomania.buscaLotomania(concursoSelecionado).subscribe((result: any) => {
      this.resultadoSelecionado = result;
      console.log(this.resultadoSelecionado)
    })



  }




}
