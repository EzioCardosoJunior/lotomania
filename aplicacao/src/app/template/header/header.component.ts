import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public numeroConcuro!: FormGroup;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.numeroConcuro = new FormGroup({
      concursoSelecionado: new FormControl(null),

    })
  }

  confereConcurso() {
    this.router.navigate(['/app-content'], { queryParams: { data: this.numeroConcuro.value.concursoSelecionado } });
    console.log(this.numeroConcuro.value.concursoSelecionado)
  }




}
