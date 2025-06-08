import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/homepage/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProcesoComponent } from './components/proceso/proceso.component';

export const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'nosotros',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'proceso',
    component: ProcesoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
