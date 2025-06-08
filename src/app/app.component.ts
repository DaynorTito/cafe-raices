import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    AboutComponent,
    FooterComponent
  ],
  template: `
  <app-header></app-header>
  <main class="min-h-screen">
    <router-outlet></router-outlet>
  </main>
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Café Raíces';
}
