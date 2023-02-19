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
  numerosJogados: any = [];
  //concursoSelecionado: any;

  constructor(private router: Router, private buscaResultadoLotomania: ResultadosService, private getRoute: ActivatedRoute) { }

  ngOnInit() {
    /* var str = "texto de teste"
    var chars = [...str]
    console.log(chars)
 */
    const linha1: any = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10",];
    const linha2: any = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20",];
    const linha3: any = ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30",];
    const linha4: any = ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40",];
    const linha5: any = ["41", "42", "43", "44", "45", "46", "47", "48", "49", "50",];
    const linha6: any = ["51", "52", "53", "54", "55", "56", "57", "58", "59", "60",];
    const linha7: any = ["61", "62", "63", "64", "65", "66", "67", "68", "69", "70",];
    const linha8: any = ["71", "72", "73", "74", "75", "76", "77", "78", "79", "80",];
    const linha9: any = ["81", "82", "83", "84", "85", "86", "87", "88", "89", "90",];
    const linha10: any = ["91", "92", "93", "94", "95", "96", "97", "98", "99", "00"];

    const posicao1: any = ["03", "04", "05", "08", "09"];
    const posicao2: any = ["00", "01", "02", "06", "07"];
    const posicao3: any = ["01", "02", "03", "07", "08"];
    const posicao4: any = ["00", "03", "04", "06", "09"];
    const posicao5: any = ["00", "03", "05", "06", "08"];
    const posicao6: any = ["00", "01", "02", "06", "07"];
    const posicao7: any = ["03", "04", "05", "08", "09"];
    const posicao8: any = ["00", "04", "05", "06", "09"];
    const posicao9: any = ["01", "02", "05", "07", "08"];
    const posicao10: any = ["01", "02", "04", "07", "09"];


    for (var i = 0; i < 5; i++) {
      this.numerosJogados.push(linha1[parseInt(posicao1[i])]);
      this.numerosJogados.push(linha2[parseInt(posicao2[i])]);
      this.numerosJogados.push(linha3[parseInt(posicao3[i])]);
      this.numerosJogados.push(linha4[parseInt(posicao4[i])]);
      this.numerosJogados.push(linha5[parseInt(posicao5[i])]);
      this.numerosJogados.push(linha6[parseInt(posicao6[i])]);
      this.numerosJogados.push(linha7[parseInt(posicao7[i])]);
      this.numerosJogados.push(linha8[parseInt(posicao8[i])]);
      this.numerosJogados.push(linha9[parseInt(posicao9[i])]);
      this.numerosJogados.push(linha10[parseInt(posicao10[i])]);
    }
    console.log(this.numerosJogados);


    const concursoSelecionado = this.getRoute.snapshot.queryParams['data'];
    this.buscaResultadoLotomania.buscaLotomania(concursoSelecionado).subscribe((result: any) => {
      this.resultadoSelecionado = result;
      console.log(this.resultadoSelecionado)
    })
  }

}
