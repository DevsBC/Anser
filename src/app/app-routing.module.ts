import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CmsLayoutComponent } from './layouts/cms-layout/cms-layout.component';
import { RegisterPinComponent } from './components/register-pin/register-pin.component';
import { ConsultDig12Component } from './components/consult-dig12/consult-dig12.component';
import { ConsultDig14Component } from './components/consult-dig14/consult-dig14.component';

const routes: Routes = [
  {
    path: 'cms',
    component: CmsLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterPinComponent },
      { path: 'consult-12', component: ConsultDig12Component },
      { path: 'consult-14', component: ConsultDig14Component }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'cms/home' },
  { path: '', pathMatch: 'full', redirectTo: '/cms/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
