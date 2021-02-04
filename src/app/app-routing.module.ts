import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CmsLayoutComponent } from './layouts/cms-layout/cms-layout.component';
import { RegisterPinComponent } from './components/register-pin/register-pin.component';

const routes: Routes = [
  {
    path: 'cms',
    component: CmsLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterPinComponent }
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
