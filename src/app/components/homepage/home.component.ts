import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ProductsComponent } from '../products/products.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProductsComponent, AboutComponent],
  template: `
    <app-hero></app-hero>
    <app-products></app-products>
    <app-about></app-about>
  `
})
export class HomeComponent {}
