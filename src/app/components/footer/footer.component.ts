import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gradient-to-br from-[#4B2E20] via-[#5C4033] to-[#4B2E20] text-[#F5F0E1] relative overflow-hidden">
      <!-- Decoración de fondo -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-[#D2A679] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-40 h-40 bg-[#3B5F41] rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-[#E6B17C] rounded-full blur-2xl"></div>
      </div>

      <!-- Contenido principal -->
      <div class="container mx-auto px-6 py-16 relative z-10">
        <!-- Sección superior -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <!-- Logo y Descripción -->
          <div class="lg:col-span-2 space-y-6">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-[#D2A679] to-[#E6B17C] rounded-full flex items-center justify-center shadow-lg">
                <span class="text-2xl">☕</span>
              </div>
              <h3 class="text-3xl font-bold bg-gradient-to-r from-[#D2A679] to-[#E6B17C] bg-clip-text text-transparent">
                Café Raíces
              </h3>
            </div>
            
            <div class="bg-[#6B4E3D]/20 backdrop-blur-sm p-6 rounded-xl border border-[#6B4E3D]/30">
              <p class="text-[#F5F0E1]/90 leading-relaxed text-lg mb-4">
                Conectando a los amantes del café con los mejores granos de Bolivia. 
                <span class="text-[#D2A679] font-semibold">Calidad, tradición y sostenibilidad</span> en cada taza.
              </p>
              
              <!-- Newsletter -->
              <div class="mt-6">
                <h5 class="text-[#E6B17C] font-semibold mb-3">Suscríbete a nuestro newsletter</h5>
                <div class="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="tu email.com"
                    class="flex-1 px-4 py-3 bg-[#6B4E3D]/30 border border-[#6B4E3D] rounded-lg text-[#F5F0E1] placeholder-[#A89F91] focus:outline-none focus:border-[#D2A679] focus:ring-2 focus:ring-[#D2A679]/30 transition-all duration-300">
                  <button class="px-6 py-3 bg-gradient-to-r from-[#8B2E3C] to-[#8B2E3C] hover:from-[#8B2E3C]/80 hover:to-[#8B2E3C]/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>

            <!-- Redes sociales mejoradas -->
            <div class="flex space-x-4">
              <a href="#" class="group p-3 bg-[#6B4E3D]/40 hover:bg-[#D2A679] rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <svg class="w-6 h-6 text-[#F5F0E1] group-hover:text-[#4B2E20] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="group p-3 bg-[#6B4E3D]/40 hover:bg-[#D2A679] rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <svg class="w-6 h-6 text-[#F5F0E1] group-hover:text-[#4B2E20] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="group p-3 bg-[#6B4E3D]/40 hover:bg-[#D2A679] rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <svg class="w-6 h-6 text-[#F5F0E1] group-hover:text-[#4B2E20] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" class="group p-3 bg-[#6B4E3D]/40 hover:bg-[#3B5F41] rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <svg class="w-6 h-6 text-[#F5F0E1] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Enlaces Rápidos -->
          <div class="bg-[#6B4E3D]/20 backdrop-blur-sm p-6 rounded-xl border border-[#6B4E3D]/30">
            <h4 class="text-xl font-bold text-[#E6B17C] mb-6 flex items-center">
              <span class="w-2 h-6 bg-gradient-to-b from-[#D2A679] to-[#E6B17C] rounded-full mr-3"></span>
              Enlaces Rápidos
            </h4>
            <ul class="space-y-4">
              <li>
                <a routerLink="/" class="group flex items-center text-[#F5F0E1]/80 hover:text-[#E6B17C] transition-all duration-300">
                  <span class="w-1.5 h-1.5 bg-[#A89F91] rounded-full mr-3 group-hover:bg-[#E6B17C] transition-colors"></span>
                  🏠 Inicio
                </a>
              </li>
              <li>
                <a routerLink="/productos" class="group flex items-center text-[#F5F0E1]/80 hover:text-[#E6B17C] transition-all duration-300">
                  <span class="w-1.5 h-1.5 bg-[#A89F91] rounded-full mr-3 group-hover:bg-[#E6B17C] transition-colors"></span>
                  ☕ Productos
                </a>
              </li>
              <li>
                <a routerLink="/proceso" class="group flex items-center text-[#F5F0E1]/80 hover:text-[#E6B17C] transition-all duration-300">
                  <span class="w-1.5 h-1.5 bg-[#A89F91] rounded-full mr-3 group-hover:bg-[#E6B17C] transition-colors"></span>
                  ⚙️ Proceso
                </a>
              </li>
              <li>
                <a routerLink="/nosotros" class="group flex items-center text-[#F5F0E1]/80 hover:text-[#E6B17C] transition-all duration-300">
                  <span class="w-1.5 h-1.5 bg-[#A89F91] rounded-full mr-3 group-hover:bg-[#E6B17C] transition-colors"></span>
                  👥 Nosotros
                </a>
              </li>
            </ul>

            <!-- Certificaciones -->
            <div class="mt-8 pt-6 border-t border-[#6B4E3D]">
              <h5 class="text-[#E6B17C] font-semibold mb-3">Certificaciones</h5>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-[#3B5F41]/30 text-[#3B5F41] text-xs font-semibold rounded-full border border-[#3B5F41]/50">
                  🌱 Orgánico
                </span>
                <span class="px-3 py-1 bg-[#7E8D58]/30 text-[#7E8D58] text-xs font-semibold rounded-full border border-[#7E8D58]/50">
                  ⚖️ Comercio Justo
                </span>
                <span class="px-3 py-1 bg-[#D2A679]/20 text-[#D2A679] text-xs font-semibold rounded-full border border-[#D2A679]/50">
                  🏆 Premium
                </span>
              </div>
            </div>
          </div>

          <!-- Información de Contacto -->
          <div class="bg-[#6B4E3D]/20 backdrop-blur-sm p-6 rounded-xl border border-[#6B4E3D]/30">
            <h4 class="text-xl font-bold text-[#E6B17C] mb-6 flex items-center">
              <span class="w-2 h-6 bg-gradient-to-b from-[#D2A679] to-[#E6B17C] rounded-full mr-3"></span>
              Contacto
            </h4>
            
            <ul class="space-y-5">
              <li class="group">
                <div class="flex items-start p-3 rounded-lg hover:bg-[#6B4E3D]/30 transition-all duration-300">
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#8B2E3C] to-[#8B2E3C]/80 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[#E6B17C] font-semibold">Ubicación</p>
                    <p class="text-[#F5F0E1]/80 text-sm">La Paz, Bolivia</p>
                    <p class="text-[#A89F91] text-xs">Zona Sur, Calacoto</p>
                  </div>
                </div>
              </li>
              
              <li class="group">
                <div class="flex items-start p-3 rounded-lg hover:bg-[#6B4E3D]/30 transition-all duration-300">
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#3B5F41] to-[#3B5F41]/80 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[#E6B17C] font-semibold">Email</p>
                    <p class="text-[#F5F0E1]/80 text-sm">info caferaices.com</p>
                    <p class="text-[#A89F91] text-xs">Respuesta en 24h</p>
                  </div>
                </div>
              </li>
              
              <li class="group">
                <div class="flex items-start p-3 rounded-lg hover:bg-[#6B4E3D]/30 transition-all duration-300">
                  <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#D2A679] to-[#E6B17C] rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-[#4B2E20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[#E6B17C] font-semibold">Teléfono</p>
                    <p class="text-[#F5F0E1]/80 text-sm">+591 2 1234567</p>
                    <p class="text-[#A89F91] text-xs">Lun - Vie: 8:00 - 18:00</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sección de información adicional -->
        <div class="mt-16 pt-8 border-t border-[#6B4E3D]">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <!-- Horarios -->
            <div class="text-center p-6 bg-[#6B4E3D]/20 rounded-xl backdrop-blur-sm">
              <div class="w-12 h-12 bg-[#D2A679] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-[#4B2E20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h5 class="text-[#E6B17C] font-semibold mb-2">Horarios de Atención</h5>
              <p class="text-[#F5F0E1]/80 text-sm">Lunes a Viernes: 8:00 - 18:00</p>
              <p class="text-[#A89F91] text-xs">Sábados: 9:00 - 15:00</p>
            </div>

            <!-- Envíos -->
            <div class="text-center p-6 bg-[#6B4E3D]/20 rounded-xl backdrop-blur-sm">
              <div class="w-12 h-12 bg-[#3B5F41] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h5 class="text-[#E6B17C] font-semibold mb-2">Envíos Gratuitos</h5>
              <p class="text-[#F5F0E1]/80 text-sm">A partir de Bs. 200</p>
              <p class="text-[#A89F91] text-xs">Dentro de La Paz</p>
            </div>

            <!-- Garantía -->
            <div class="text-center p-6 bg-[#6B4E3D]/20 rounded-xl backdrop-blur-sm">
              <div class="w-12 h-12 bg-[#8B2E3C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h5 class="text-[#E6B17C] font-semibold mb-2">Garantía de Frescura</h5>
              <p class="text-[#F5F0E1]/80 text-sm">100% Satisfacción</p>
              <p class="text-[#A89F91] text-xs">O te devolvemos tu dinero</p>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-[#D2A679] mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-[#A89F91] text-center md:text-left">
              &copy; 2024 <span class="text-[#E6B17C] font-semibold">Café Raíces</span>. 
              Todos los derechos reservados.
            </p>
            <div class="flex space-x-6 text-sm">
              <a href="#" class="text-[#A89F91] hover:text-[#E6B17C] transition-colors">Política de Privacidad</a>
              <a href="#" class="text-[#A89F91] hover:text-[#E6B17C] transition-colors">Términos de Uso</a>
              <a href="#" class="text-[#A89F91] hover:text-[#E6B17C] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}
