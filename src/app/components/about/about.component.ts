import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="py-24 bg-[#F9F4EF] relative overflow-hidden">
  <!-- Decoración de fondo -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-20 left-10 w-32 h-32 bg-[#D2A679] rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-[#A89F91] rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-[#5C4033] rounded-full blur-2xl"></div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <!-- Título principal -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-[#F5F0E1] text-[#4B2E20] rounded-full text-sm font-semibold mb-4">
        ☕ Conoce nuestra historia
      </span>
      <h2 class="text-4xl md:text-5xl font-bold text-[#2B1D16] mb-4">
        Pasión por el 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#4B2E20] to-[#D2A679]">
          Café Auténtico
        </span>
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-[#4B2E20] to-[#D2A679] mx-auto rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Contenido de texto -->
      <div class="space-y-8">
        <div class="bg-[#F5F0E1]/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#D2A679]/40">
          <h3 class="text-2xl font-bold text-[#2B1D16] mb-4 flex items-center">
            <span class="w-2 h-8 bg-gradient-to-b from-[#4B2E20] to-[#D2A679] rounded-full mr-4"></span>
            Nuestra Historia
          </h3>
          <p class="text-[#4B2E20] leading-relaxed text-lg">
            En <span class="font-semibold text-[#4B2E20]">Café Raíces</span>, nos apasiona conectar a los amantes del café con los mejores granos de Bolivia. 
            Trabajamos directamente con productores locales para asegurar la más alta calidad y sostenibilidad, 
            creando una experiencia única que honra nuestras tradiciones.
          </p>
        </div>

            <!-- Características mejoradas -->
            <div class="space-y-6">
              <!-- Calidad Premium -->
              <div class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D2A679] hover:border-[#E6B17C] transform hover:translate-y-[-4px]">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#4B2E20] to-[#D2A679] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-xl font-bold text-[#4B2E20] mb-2 group-hover:text-[#2B1D16] transition-colors">
                      Calidad Premium
                    </h4>
                    <p class="text-[#4B2E20] leading-relaxed">
                      Selección rigurosa de los mejores granos arábica, cultivados en las tierras altas de Bolivia 
                      con métodos tradicionales.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Tostado Artesanal -->
                <div class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#A89F91] hover:border-[#D2A679] transform hover:translate-y-[-4px]">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#5C4033] to-[#D2A679] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-6">
                      <h4 class="text-xl font-bold text-[#2B1D16] mb-2 group-hover:text-[#4B2E20] transition-colors">
                        Tostado Artesanal
                      </h4>
                      <p class="text-[#4B2E20] leading-relaxed">
                        Proceso cuidadoso y artesanal para resaltar los mejores sabores, 
                        respetando el tiempo y temperatura ideales.
                      </p>
                    </div>
                  </div>
                </div>

                  <div class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#7E8D58] hover:border-[#A89F91] transform hover:translate-y-[-4px]">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#3B5F41] to-[#D2A679] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-6">
                    <h4 class="text-xl font-bold text-[#3B5F41] mb-2 group-hover:text-[#2B1D16] transition-colors">
                      Compromiso Social
                    </h4>
                    <p class="text-[#4B2E20] leading-relaxed">
                      Apoyo directo a comunidades productoras con prácticas agrícolas responsables 
                      y comercio justo.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Sostenibilidad -->
            </div>
          </div>
          
<div class="relative">
  <!-- Contenedor principal de imagen -->
  <div class="relative group">
    <div class="absolute inset-0 bg-gradient-to-r from-[#D2A679] to-[#A89F91] rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
    <div class="relative bg-white p-4 rounded-2xl shadow-2xl">
      <img src="assets/blends-scaled.jpg" 
           alt="Nuestro Proceso de Café" 
           class="w-full h-80 object-cover rounded-xl shadow-lg">
      
      <!-- Overlay con información -->
      <div class="absolute inset-4 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div class="text-white p-6">
          <h5 class="text-xl font-bold mb-2">Proceso Artesanal</h5>
          <p class="text-sm opacity-90">Cada grano es cuidadosamente seleccionado</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Tarjetas de estadísticas flotantes -->
  <div class="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#4B2E20] to-[#D2A679] text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <div class="flex items-center space-x-3">
      <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
        <span class="text-2xl">📅</span>
      </div>
      <div>
        <p class="text-2xl font-bold">+10 Años</p>
        <p class="text-sm opacity-90">De experiencia</p>
      </div>
    </div>
  </div>

  <div class="absolute -top-8 -right-8 bg-gradient-to-br from-[#7E8D58] to-[#A89F91] text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <div class="flex items-center space-x-3">
      <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
        <span class="text-2xl">🌱</span>
      </div>
      <div>
        <p class="text-2xl font-bold">100%</p>
        <p class="text-sm opacity-90">Orgánico</p>
      </div>
    </div>
  </div>

  <div class="absolute top-1/2 -left-6 bg-gradient-to-br from-[#7D3A3A] to-[#A89F91] text-white p-4 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
    <div class="text-center">
      <p class="text-lg font-bold">20+</p>
      <p class="text-xs opacity-90">Productores</p>
    </div>
  </div>
</div>
        </div>

        <!-- Sección de valores adicional -->
<div class="mt-20 bg-gradient-to-r from-[#F5F0E1] to-[#EAE3D4] rounded-2xl p-8 border border-[#D2A679]">
  <div class="text-center mb-8">
    <h3 class="text-2xl font-bold text-[#2B1D16] mb-2">Nuestros Valores</h3>
    <p class="text-[#4B2E20]">Lo que nos define como empresa</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm">
      <div class="w-16 h-16 bg-[#D2A679] rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-2xl">🤝</span>
      </div>
      <h4 class="font-bold text-[#2B1D16] mb-2">Confianza</h4>
      <p class="text-sm text-[#4B2E20]">Relaciones duraderas con productores y clientes</p>
    </div>

    <div class="text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm">
      <div class="w-16 h-16 bg-[#7E8D58] rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-2xl">🌍</span>
      </div>
      <h4 class="font-bold text-[#2B1D16] mb-2">Sostenibilidad</h4>
      <p class="text-sm text-[#4B2E20]">Cuidado del medio ambiente y las comunidades</p>
    </div>

    <div class="text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm">
      <div class="w-16 h-16 bg-[#7D3A3A] rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-2xl">⭐</span>
      </div>
      <h4 class="font-bold text-[#2B1D16] mb-2">Excelencia</h4>
      <p class="text-sm text-[#4B2E20]">Búsqueda constante de la máxima calidad</p>
    </div>
  </div>
</div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}
