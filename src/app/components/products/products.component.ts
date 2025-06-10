import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gradient-to-br from-[#4B2E20] to-[#5C4033] relative overflow-hidden">
      <!-- Elementos decorativos de fondo -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-[#D2A679] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-24 h-24 bg-[#3B5F41] rounded-full blur-2xl"></div>
        <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-[#E6B17C] rounded-full blur-xl"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span class="text-[#D2A679] text-sm font-medium tracking-wider uppercase border border-[#D2A679] px-4 py-2 rounded-full">
              Productos Premium
            </span>
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-[#F5F0E1] mb-6 leading-tight">
            Descubre Nuestros
            <span class="text-[#D2A679] block">Cafés de Origen</span>
          </h2>
          <p class="text-[#A89F91] text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Cada grano cuenta una historia única. Desde las montañas de Yungas hasta tu taza, 
            ofrecemos cafés tostados artesanalmente que despiertan todos tus sentidos.
          </p>
        </div>
        
        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          <!-- Café Premium -->
          <div class="group relative bg-gradient-to-b from-[#F9F4EF] to-[#F5F0E1] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-[#3B5F41] text-[#F5F0E1] text-xs font-semibold px-3 py-1 rounded-full">
                Bestseller
              </span>
            </div>
            <div class="relative overflow-hidden">
              <img src="/assets/cafe-molido1.jpg" alt="Café Premium" 
                   class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-[#4B2E20] mb-3 group-hover:text-[#3B5F41] transition-colors">
                Café Raíces Premium
              </h3>
              <p class="text-[#6B4E3D] mb-4 leading-relaxed">
                Café 100% arábica de las montañas de Yungas. Tostado medio-oscuro con notas intensas 
                a chocolate belga y caramelo artesanal que despiertan el alma.
              </p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <span class="text-[#A89F91] text-sm line-through">Bs. 50</span>
                  <span class="text-[#8B2E3C] font-bold text-xl">Bs. 40</span>
                </div>
                <div class="flex text-[#D2A679]">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <button class="w-full bg-gradient-to-r from-[#D2A679] to-[#E6B17C] hover:from-[#E6B17C] hover:to-[#D2A679] text-[#4B2E20] font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <!-- Café Origen Único -->
          <div class="group relative bg-gradient-to-b from-[#F9F4EF] to-[#F5F0E1] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-[#8B2E3C] text-[#F5F0E1] text-xs font-semibold px-3 py-1 rounded-full">
                Exclusivo
              </span>
            </div>
            <div class="relative overflow-hidden">
              <img src="/assets/cafe-molido2.jpg" alt="Café Origen Único" 
                   class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-[#4B2E20] mb-3 group-hover:text-[#3B5F41] transition-colors">
                Café Raíces Origen Único
              </h3>
              <p class="text-[#6B4E3D] mb-4 leading-relaxed">
                Lotes selectos de fincas familiares de Caranavi. Trazabilidad completa desde la 
                semilla hasta tu taza, garantizando pureza y calidad excepcional.
              </p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <span class="text-[#A89F91] text-sm line-through">Bs. 80</span>
                  <span class="text-[#8B2E3C] font-bold text-xl">Bs. 60</span>
                </div>
                <div class="flex text-[#D2A679]">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <button class="w-full bg-gradient-to-r from-[#3B5F41] to-[#7E8D58] hover:from-[#7E8D58] hover:to-[#3B5F41] text-[#F5F0E1] font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <!-- Café Espresso -->
          <div class="group relative bg-gradient-to-b from-[#F9F4EF] to-[#F5F0E1] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 xl:col-span-1">
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-[#D2A679] text-[#4B2E20] text-xs font-semibold px-3 py-1 rounded-full">
                Intenso
              </span>
            </div>
            <div class="relative overflow-hidden">
              <img src="/assets/cafe-molido3.avif" alt="Café Espresso" 
                   class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-[#4B2E20] mb-3 group-hover:text-[#3B5F41] transition-colors">
                Café Raíces Espresso
              </h3>
              <p class="text-[#6B4E3D] mb-4 leading-relaxed">
                Molienda perfecta para máquinas espresso. Tostado oscuro que libera un sabor 
                intenso y cremoso, ideal para despertar tu día con energía.
              </p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <span class="text-[#A89F91] text-sm line-through">Bs. 55</span>
                  <span class="text-[#8B2E3C] font-bold text-xl">Bs. 40</span>
                </div>
                <div class="flex text-[#D2A679]">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <button class="w-full bg-gradient-to-r from-[#8B2E3C] to-[#D2A679] hover:from-[#D2A679] hover:to-[#8B2E3C] text-[#F5F0E1] font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center p-6 bg-[#F9F4EF]/10 backdrop-blur-sm rounded-xl border border-[#D2A679]/20">
            <div class="w-16 h-16 bg-[#3B5F41] rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-[#F5F0E1] text-2xl">🌱</span>
            </div>
            <h4 class="text-[#F5F0E1] font-semibold text-lg mb-2">100% Orgánico</h4>
            <p class="text-[#A89F91] text-sm">Cultivado sin químicos, respetando la naturaleza</p>
          </div>
          <div class="text-center p-6 bg-[#F9F4EF]/10 backdrop-blur-sm rounded-xl border border-[#D2A679]/20">
            <div class="w-16 h-16 bg-[#D2A679] rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-[#4B2E20] text-2xl">🔥</span>
            </div>
            <h4 class="text-[#F5F0E1] font-semibold text-lg mb-2">Tostado Artesanal</h4>
            <p class="text-[#A89F91] text-sm">Proceso tradicional que resalta cada matiz</p>
          </div>
          <div class="text-center p-6 bg-[#F9F4EF]/10 backdrop-blur-sm rounded-xl border border-[#D2A679]/20">
            <div class="w-16 h-16 bg-[#8B2E3C] rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-[#F5F0E1] text-2xl">🚚</span>
            </div>
            <h4 class="text-[#F5F0E1] font-semibold text-lg mb-2">Envío Gratis</h4>
            <p class="text-[#A89F91] text-sm">A todo Bolivia en compras mayores a Bs. 100</p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center">
          <button class="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-[#4B2E20] bg-gradient-to-r from-[#D2A679] to-[#E6B17C] rounded-2xl hover:from-[#E6B17C] hover:to-[#D2A679] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <span class="mr-2">Ver Todos los Productos</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          <p class="text-[#A89F91] text-sm mt-4">
            Descubre más de 15 variedades de café boliviano
          </p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProductsComponent {}
