import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './template/content/content.component';

const routes: Routes = [
  {
    path:"app-content",
    component: ContentComponent
  },
  
  {
    path: '', 
    redirectTo: 'app-content', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
