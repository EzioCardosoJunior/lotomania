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
    const teste = this.numeroConcuro.value.concursoSelecionado
    /* this.router.navigate(['/app-content'], { queryParams: { data: teste } });
    console.log(this.numeroConcuro.value.concursoSelecionado)
 */
    this.router.navigateByUrl('/app-home', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/app-content'], { queryParams: { data: teste } });
  }); 
    
  }




}
