import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Parallax Effect -->
      <div class="absolute inset-0 z-0">
        <img 
          src="assets/sub-blog-tipos-de-cafe-en-grano.avif" 
          alt="Tipos de café en grano" 
          class="w-full h-full object-cover scale-110 transform transition-transform duration-1000 ease-out hero-parallax"
        />
        <!-- Multiple Overlay Gradients for Depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-cafe-brown/80 via-cafe-brown/60 to-cafe-green/70"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      <!-- Floating Coffee Beans Animation -->
      <div class="absolute inset-0 z-5 pointer-events-none">
        <div class="floating-bean absolute top-20 left-10 w-3 h-4 bg-cafe-orange rounded-full opacity-30 animate-float"></div>
        <div class="floating-bean absolute top-32 right-20 w-2 h-3 bg-cafe-beige rounded-full opacity-40 animate-float-delayed"></div>
        <div class="floating-bean absolute bottom-40 left-20 w-4 h-5 bg-cafe-cream rounded-full opacity-20 animate-float-slow"></div>
        <div class="floating-bean absolute bottom-60 right-10 w-3 h-4 bg-cafe-orange rounded-full opacity-30 animate-float-reverse"></div>
      </div>

      <!-- Main Content -->
      <div class="relative container mx-auto px-6 lg:px-8 h-full flex items-center z-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          <!-- Left Column - Text Content -->
          <div class="text-white space-y-8 hero-content">
            <!-- Badge -->
            <div class="inline-flex items-center space-x-2 bg-cafe-cream/20 backdrop-blur-sm border border-cafe-cream/30 rounded-full px-4 py-2 animate-slide-down">
              <div class="w-2 h-2 bg-cafe-orange rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-cafe-cream">100% Café Boliviano</span>
            </div>

            <!-- Main Heading with Gradient Text -->
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
              Descubre el 
              <span class="block bg-gradient-to-r from-cafe-orange via-cafe-beige to-cafe-cream bg-clip-text text-transparent animate-gradient-shift">
                Auténtico Sabor
              </span>
              del Café Boliviano
            </h1>

            <!-- Description -->
            <p class="text-xl lg:text-2xl text-cafe-cream/90 leading-relaxed max-w-2xl animate-slide-up-delayed">
              Café 100% arábica de las montañas de Yungas y Caranavi, tostado artesanalmente 
              para brindarte una experiencia única que conecta tradición y calidad en cada sorbo.
            </p>

            <!-- Feature Pills -->
            <div class="flex flex-wrap gap-3 animate-slide-up-delayed-2">
              <span class="inline-flex items-center px-4 py-2 bg-cafe-green/80 backdrop-blur-sm rounded-full text-sm font-medium">
                🌱 Sostenible
              </span>
              <span class="inline-flex items-center px-4 py-2 bg-cafe-orange/80 backdrop-blur-sm rounded-full text-sm font-medium">
                🔥 Tostado Artesanal
              </span>
              <span class="inline-flex items-center px-4 py-2 bg-cafe-brown/80 backdrop-blur-sm rounded-full text-sm font-medium">
                ⭐ Premium
              </span>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 animate-bounce-in">
              <button class="group relative overflow-hidden bg-cafe-orange hover:bg-cafe-orange/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span class="relative z-10">Ver Productos</span>
                <div class="absolute inset-0 bg-gradient-to-r from-cafe-orange to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button class="group relative overflow-hidden bg-transparent border-2 border-cafe-cream hover:border-cafe-orange text-cafe-cream hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                <span class="relative z-10">Conoce Nuestro Proceso</span>
                <div class="absolute inset-0 bg-cafe-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            <!-- Social Proof -->
            <div class="flex items-center space-x-6 text-cafe-cream/80 animate-fade-in-up">
              <div class="flex items-center space-x-2">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 bg-cafe-orange rounded-full border-2 border-white"></div>
                  <div class="w-8 h-8 bg-cafe-green rounded-full border-2 border-white"></div>
                  <div class="w-8 h-8 bg-cafe-brown rounded-full border-2 border-white"></div>
                </div>
                <span class="text-sm">+500 clientes satisfechos</span>
              </div>
              <div class="h-4 w-px bg-cafe-cream/40"></div>
              <div class="flex items-center space-x-1">
                <span class="text-cafe-orange">★★★★★</span>
                <span class="text-sm">4.9/5 valoración</span>
              </div>
            </div>
          </div>

          <!-- Right Column - Interactive Card -->
          <div class="hidden lg:block animate-slide-right">
            <div class="relative">
              <!-- Main Card -->
              <div class="bg-cafe-cream/10 backdrop-blur-lg border border-cafe-cream/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <!-- Coffee Cup Icon with Steam -->
                <div class="relative mb-6">
                  <div class="w-24 h-24 bg-gradient-to-br from-cafe-orange to-cafe-brown rounded-full mx-auto flex items-center justify-center text-4xl shadow-2xl">
                    ☕
                  </div>
                  <!-- Animated Steam -->
                  <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div class="w-1 h-8 bg-cafe-cream/60 rounded-full animate-steam"></div>
                    <div class="w-1 h-6 bg-cafe-cream/40 rounded-full animate-steam-delayed"></div>
                    <div class="w-1 h-4 bg-cafe-cream/30 rounded-full animate-steam-delayed-2"></div>
                  </div>
                </div>

                <!-- Card Content -->
                <div class="text-center text-white">
                  <h3 class="text-2xl font-bold font-display mb-3">Café Raíces Premium</h3>
                  <p class="text-cafe-cream/80 mb-4">Notas a chocolate, caramelo y frutos secos</p>
                  
                  <!-- Price -->
                  <div class="bg-cafe-orange/20 rounded-xl p-4 mb-6">
                    <div class="text-3xl font-bold text-cafe-orange">Bs. 40</div>
                    <div class="text-sm text-cafe-cream/70">250g - Grano entero</div>
                  </div>

                  <!-- Features -->
                  <div class="space-y-2 text-sm text-cafe-cream/80">
                    <div class="flex items-center justify-center space-x-2">
                      <span class="w-2 h-2 bg-cafe-green rounded-full"></span>
                      <span>Tostado medio-oscuro</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <span class="w-2 h-2 bg-cafe-green rounded-full"></span>
                      <span>Empaque con válvula desgasificadora</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-12 h-12 bg-cafe-orange/30 rounded-full animate-pulse"></div>
              <div class="absolute -bottom-4 -left-4 w-8 h-8 bg-cafe-green/40 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div class="flex flex-col items-center text-cafe-cream/70">
          <span class="text-sm mb-2">Descubre más</span>
          <div class="w-6 h-10 border-2 border-cafe-cream/50 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-cafe-cream/70 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Define custom Tailwind colors */
    :root {
      --cafe-brown: #5D4037;
      --cafe-green: #7D8C38;
      --cafe-beige: #D7CCC8;
      --cafe-orange: #D84315;
      --cafe-cream: #FFFBF5;
    }

    /* Custom animations */
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }

    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes steam {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
      50% { transform: translateY(-10px) scale(1.1); opacity: 0.3; }
    }

    @keyframes scroll-indicator {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(20px); opacity: 0; }
    }

    @keyframes slide-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slide-down {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slide-right {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes bounce-in {
      0% { opacity: 0; transform: scale(0.3); }
      50% { opacity: 1; transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { transform: scale(1); }
    }

    /* Apply animations */
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-delayed { animation: float 6s ease-in-out infinite 2s; }
    .animate-float-slow { animation: float 8s ease-in-out infinite; }
    .animate-float-reverse { animation: float 6s ease-in-out infinite reverse; }
    .animate-gradient-shift { 
      background-size: 200% 200%;
      animation: gradient-shift 3s ease infinite; 
    }
    .animate-steam { animation: steam 3s ease-in-out infinite; }
    .animate-steam-delayed { animation: steam 3s ease-in-out infinite 0.5s; }
    .animate-steam-delayed-2 { animation: steam 3s ease-in-out infinite 1s; }
    .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
    .animate-slide-up { animation: slide-up 0.8s ease-out; }
    .animate-slide-up-delayed { animation: slide-up 0.8s ease-out 0.2s both; }
    .animate-slide-up-delayed-2 { animation: slide-up 0.8s ease-out 0.4s both; }
    .animate-slide-down { animation: slide-down 0.6s ease-out; }
    .animate-slide-right { animation: slide-right 1s ease-out 0.3s both; }
    .animate-bounce-in { animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.6s both; }
    .animate-fade-in-up { animation: slide-up 1s ease-out 0.8s both; }

    /* Parallax effect */
    .hero-parallax {
      will-change: transform;
    }

    /* Custom Tailwind classes for brand colors */
    .bg-cafe-brown { background-color: var(--cafe-brown); }
    .bg-cafe-green { background-color: var(--cafe-green); }
    .bg-cafe-beige { background-color: var(--cafe-beige); }
    .bg-cafe-orange { background-color: var(--cafe-orange); }
    .bg-cafe-cream { background-color: var(--cafe-cream); }
    
    .text-cafe-brown { color: var(--cafe-brown); }
    .text-cafe-green { color: var(--cafe-green); }
    .text-cafe-beige { color: var(--cafe-beige); }
    .text-cafe-orange { color: var(--cafe-orange); }
    .text-cafe-cream { color: var(--cafe-cream); }
    
    .border-cafe-brown { border-color: var(--cafe-brown); }
    .border-cafe-green { border-color: var(--cafe-green); }
    .border-cafe-beige { border-color: var(--cafe-beige); }
    .border-cafe-orange { border-color: var(--cafe-orange); }
    .border-cafe-cream { border-color: var(--cafe-cream); }
  `]
})
export class HeroComponent {
  constructor() {
    // Add parallax effect on scroll
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleParallax);
    }
  }

  private handleParallax = () => {
    const scrolled = window.pageYOffset;
    const parallaxElement = document.querySelector('.hero-parallax') as HTMLElement;
    if (parallaxElement) {
      parallaxElement.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleParallax);
    }
  }
}