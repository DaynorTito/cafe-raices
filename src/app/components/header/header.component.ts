import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<header class="bg-gradient-to-r from-[#4B2E20] via-[#5C4033] to-[#4B2E20] text-[#F5F0E1] shadow-2xl border-b-4 border-[#D2A679]">
  <nav class="container mx-auto px-6 py-5">
    <div class="flex items-center justify-between">
      <!-- Logo y nombre -->
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-[#F5F0E1] rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-[#4B2E20]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C5.58 2 2 5.58 2 10c0 2.85 1.51 5.35 3.78 6.75.39.24.86.25 1.26.02L10 15l2.96 1.77c.4.23.87.22 1.26-.02C16.49 15.35 18 12.85 18 10c0-4.42-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        </div>
        <a routerLink="/" class="text-3xl font-bold text-[#F5F0E1] hover:text-white transition-colors duration-300">
          ☕ Café Raíces
        </a>
      </div>
      
      <!-- Menú principal -->
      <div class="hidden lg:flex items-center space-x-8">
        <a routerLink="/" 
           class="relative px-4 py-2 text-[#F5F0E1] hover:text-white font-medium transition-all duration-300 group">
          Inicio
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D2A679] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a routerLink="/productos" 
           class="relative px-4 py-2 text-[#F5F0E1] hover:text-white font-medium transition-all duration-300 group">
          Productos
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D2A679] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a routerLink="/proceso" 
           class="relative px-4 py-2 text-[#F5F0E1] hover:text-white font-medium transition-all duration-300 group">
          Proceso
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D2A679] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a routerLink="/nosotros" 
           class="relative px-4 py-2 text-[#F5F0E1] hover:text-white font-medium transition-all duration-300 group">
          Nosotros
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D2A679] group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
      
      <!-- Botones de acción -->
      <div class="hidden md:flex items-center space-x-4">
        <a routerLink="/login" class="px-6 py-2.5 bg-transparent border-2 border-[#D2A679] text-[#F5F0E1] hover:bg-[#D2A679] hover:text-[#4B2E20] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Iniciar Sesión
        </a>
        <a routerLink="/registro" routerLink="/registro" class="px-6 py-2.5 bg-[#3B5F41] hover:bg-[#7E8D58] text-[#ffff] font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Registrarse
        </a>
      </div>
      
      <!-- Botón menú móvil -->
      <div class="lg:hidden">
        <button (click)="toggleMobileMenu()" 
                class="p-2 rounded-lg hover:bg-[#5C4033] transition-colors duration-300">
          <svg class="w-6 h-6 text-[#F5F0E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  [attr.d]="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'">
            </path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Menú móvil -->
    <div [class]="'lg:hidden transition-all duration-300 overflow-hidden ' + (mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0')">
      <div class="bg-[#5C4033] rounded-lg p-4 space-y-3 shadow-inner">
        <a routerLink="/" 
           (click)="closeMobileMenu()"
           class="block px-4 py-3 text-[#F5F0E1] hover:text-white hover:bg-[#4B2E20] rounded-lg transition-all duration-300">
          🏠 Inicio
        </a>
        <a routerLink="/productos" 
           (click)="closeMobileMenu()"
           class="block px-4 py-3 text-[#F5F0E1] hover:text-white hover:bg-[#4B2E20] rounded-lg transition-all duration-300">
          ☕ Productos
        </a>
        <a routerLink="/proceso" 
           (click)="closeMobileMenu()"
           class="block px-4 py-3 text-[#F5F0E1] hover:text-white hover:bg-[#4B2E20] rounded-lg transition-all duration-300">
          ⚙️ Proceso
        </a>
        <a routerLink="/nosotros" 
           (click)="closeMobileMenu()"
           class="block px-4 py-3 text-[#F5F0E1] hover:text-white hover:bg-[#4B2E20] rounded-lg transition-all duration-300">
          👥 Nosotros
        </a>
        <div class="border-t border-[#6B4E3D] pt-3 space-y-2">
          <button class="w-full px-4 py-2.5 bg-transparent border-2 border-[#D2A679] text-[#F5F0E1] hover:bg-[#D2A679] hover:text-[#4B2E20] font-semibold rounded-lg transition-all duration-300">
            Iniciar Sesión
          </button>
          <button class="w-full px-4 py-2.5 bg-[#D2A679] hover:bg-[#E6B17C] text-[#4B2E20] font-bold rounded-lg transition-all duration-300">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  </nav>
</header>

  `,
  styles: []
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
