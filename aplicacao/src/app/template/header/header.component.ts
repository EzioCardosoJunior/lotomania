import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public numeroConcuro!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.numeroConcuro = new FormGroup({
      concursoSelecionado: new FormControl(null),
     
    })
  }

  /* buscaDadosPaciente() {
    this.router.navigate(['/app-tela-consulta'], { queryParams: {data: this.dadosPaciente.value.CpfCns, tipo: this.dadosPaciente.value.TipoLista} });
    alert(this.dadosPaciente.value.TipoLista)
  }
 */

  

}
