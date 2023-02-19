import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcertosComponent } from './template/content/acertos/acertos.component';
import { ContentComponent } from './template/content/content.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {
    path:"app-content",
    component: ContentComponent
  },
  {
    path:"app-acertos",
    component: AcertosComponent
  },
  {
    path:"app-home",
    component: HomeComponent
  },
  
  {
    path: '', 
    redirectTo: 'app-home', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
