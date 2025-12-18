const { useState, useEffect, useRef } = React;

const FunctionalTrainingLanding = () => {
    const [isBarVisible, setIsBarVisible] = useState(false);
    const [isBarTransparent, setIsBarTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100) {
                setIsBarVisible(true);
                setIsBarTransparent(false);
            } else {
                setIsBarVisible(false);
                setIsBarTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Initialize Swiper for Benefits
        if (window.innerWidth < 768) {
            new Swiper('.benefits-swiper', {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            // Initialize Swiper for Types
            new Swiper('.types-swiper', {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            // Initialize Swiper for Everyone
            new Swiper('.everyone-swiper', {
                slidesPerView: 1.5,
                spaceBetween: 15,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }, []);

    const scrollToBenefits = () => {
        document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTypes = () => {
        document.getElementById('types').scrollIntoView({ behavior: 'smooth' });
    };

    const findTrainingCenter = () => {
        window.open('https://www.google.com/maps/search/gimnasios+entrenamiento+funcional+cerca+de+mi', '_blank');
    };

    const openFundacionLaCumbre = () => {
        window.open('http://www.fundacionlacumbre.cl/', '_blank');
    };

    const openMindep = () => {
        window.open('http://www.mindep.cl/', '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Logo Bar */}
            <div className={`logo-bar fixed top-0 left-0 right-0 z-50 py-3 px-4 ${isBarTransparent ? 'transparent' : ''} ${!isBarVisible ? 'hidden-bar' : ''}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                        <img src="https://www.practicayoga.cl/logo-fundacion-la-cumbre.png" alt="Fundación La Cumbre" className="h-10 md:h-12" />
                    </a>
                    <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                        <img src="https://www.practicayoga.cl/logo-donaciones.jpg" alt="Mindep" className="h-10 md:h-12" />
                    </a>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center text-white">
                <div className="video-container absolute inset-0 z-0 hidden md:block">
                    <iframe 
                        src="https://youtu.be/4t-L0kDIuJc"
                        title="Entrenamiento Funcional Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                
                <div className="hero-overlay absolute inset-0 z-10 md:hidden"></div>
                
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto md:hidden">
                    <h1 className="font-dm text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Entrenamiento Funcional para una Vida Más Activa
                    </h1>
                    <p className="font-inter text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
                        Desarrolla un cuerpo más fuerte, estable y preparado para cada desafío
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                        <button 
                            onClick={scrollToBenefits}
                            className="btn-primary bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                        >
                            Descubre sus beneficios
                        </button>
                        <button 
                            onClick={findTrainingCenter}
                            className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all"
                        >
                            Encuentra un centro cercano
                        </button>
                    </div>
                </div>
            </section>

            {/* Mobile Video Section */}
            <section className="mobile-video-section py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-dm text-3xl font-bold text-center mb-6 text-gray-900">
                        Descubre el Entrenamiento Funcional
                    </h2>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
                            src="https://www.youtube.com/embed/ixkQaZXVQjs?controls=1&showinfo=0&rel=0&modestbranding=1"
                            title="Entrenamiento Funcional Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-12 px-4 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-gray-500 mb-8 font-inter">Con el apoyo de</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                            <img src="https://www.practicayoga.cl/logo-fundacion-la-cumbre.png" alt="Fundación La Cumbre" className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                            <img src="https://www.practicayoga.cl/logo-donaciones.jpg" alt="Mindep" className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Beneficios del Entrenamiento Funcional
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Transforma tu capacidad física y mejora tu calidad de vida
                        </p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="desktop-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Rendimiento Físico General",
                                description: "Mejora tu fuerza, resistencia, equilibrio y coordinación de manera integrada para un cuerpo más completo",
                                icon: "🏃‍♂️"
                            },
                            {
                                title: "Prevención de Lesiones",
                                description: "Fortalece músculos estabilizadores y mejora la movilidad y postura para un cuerpo más resistente",
                                icon: "🛡️"
                            },
                            {
                                title: "Vida Activa y Saludable",
                                description: "Adaptable a distintos niveles y fácil de integrar en tu rutina diaria sin importar tu experiencia",
                                icon: "💪"
                            },
                            {
                                title: "Mayor Autonomía",
                                description: "Facilita movimientos cotidianos como levantar objetos, subir escaleras o mantener el equilibrio",
                                icon: "🎯"
                            },
                            {
                                title: "Alta Motivación",
                                description: "Rutinas dinámicas y variadas que mantienen tu interés y compromiso con la actividad física",
                                icon: "🔥"
                            },
                            {
                                title: "Adaptabilidad Total",
                                description: "Tú eliges la intensidad, complejidad y carga según tus necesidades y objetivos personales",
                                icon: "⚡"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="card-hover bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                                <p className="font-inter text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper */}
                    <div className="mobile-swiper">
                        <div className="swiper benefits-swiper">
                            <div className="swiper-wrapper">
                                {[
                                    {
                                        title: "Rendimiento Físico General",
                                        description: "Mejora tu fuerza, resistencia, equilibrio y coordinación de manera integrada para un cuerpo más completo",
                                        icon: "🏃‍♂️"
                                    },
                                    {
                                        title: "Prevención de Lesiones",
                                        description: "Fortalece músculos estabilizadores y mejora la movilidad y postura para un cuerpo más resistente",
                                        icon: "🛡️"
                                    },
                                    {
                                        title: "Vida Activa y Saludable",
                                        description: "Adaptable a distintos niveles y fácil de integrar en tu rutina diaria sin importar tu experiencia",
                                        icon: "💪"
                                    },
                                    {
                                        title: "Mayor Autonomía",
                                        description: "Facilita movimientos cotidianos como levantar objetos, subir escaleras o mantener el equilibrio",
                                        icon: "🎯"
                                    },
                                    {
                                        title: "Alta Motivación",
                                        description: "Rutinas dinámicas y variadas que mantienen tu interés y compromiso con la actividad física",
                                        icon: "🔥"
                                    },
                                    {
                                        title: "Adaptabilidad Total",
                                        description: "Tú eliges la intensidad, complejidad y carga según tus necesidades y objetivos personales",
                                        icon: "⚡"
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="bg-gray-50 rounded-2xl p-8 text-center h-full">
                                            <div className="text-5xl mb-4">{benefit.icon}</div>
                                            <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                                            <p className="font-inter text-gray-600 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Functional Training Section */}
            <section id="what-is-functional" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-dm text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                ¿Qué es el Entrenamiento Funcional?
                            </h2>
                            <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
                                El entrenamiento funcional sirve para mejorar la capacidad del cuerpo de moverse de forma eficiente 
                                en las actividades de la vida diaria y en la práctica deportiva.
                            </p>
                            <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
                                A través de ejercicios que trabajan fuerza, resistencia, movilidad, equilibrio y coordinación de manera 
                                integrada, permite desarrollar un cuerpo más fuerte, estable y preparado para distintos tipos de esfuerzo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={scrollToTypes}
                                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
                                >
                                    Explora los tipos
                                </button>
                                <a 
                                    href="http://www.fundacionlacumbre.cl/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all text-center"
                                >
                                    Más info en Fundación La Cumbre
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&h=600&fit=crop&q=90" 
                                alt="Entrenamiento Funcional" 
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                                <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.practicayoga.cl/logo-donaciones.jpg" alt="Mindep" className="h-12" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Functional Training Section */}
            <section id="types" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Tipos de Entrenamiento Funcional
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Encuentra el tipo que más se adapta a tus necesidades
                        </p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="desktop-grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Con Peso",
                                description: "Enfocado en aprender y mejorar movimientos fundamentales como empujar, tirar, agacharse, rotar y estabilizar. Ideal para desarrollar una base de fuerza, movilidad y control corporal.",
                                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=90"
                            },
                            {
                                title: "Con Peso Corporal",
                                description: "Utiliza el propio peso del cuerpo para trabajar fuerza, equilibrio y coordinación. Es accesible y fácilmente adaptable a distintos niveles de condición física.",
                                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=90"
                            },
                            {
                                title: "Con Implementos",
                                description: "Incorpora elementos como bandas elásticas, balones o mancuernas, aumentando la variedad y el estímulo del entrenamiento para resultados más completos.",
                                image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=400&fit=crop&q=90"
                            },
                            {
                                title: "En Circuito",
                                description: "Organiza los ejercicios en estaciones, combinando trabajo cardiovascular y de fuerza. Favorece la resistencia y la dinámica grupal.",
                                image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&h=400&fit=crop&q=90"
                            },
                            {
                                title: "Movilidad y Estabilidad",
                                description: "Prioriza el control postural, la flexibilidad y la prevención de lesiones, siendo complementario a otras actividades físicas y deportivas.",
                                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=90"
                            }
                        ].map((type, index) => (
                            <div key={index} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                                <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{type.title}</h3>
                                    <p className="font-inter text-gray-600 leading-relaxed">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper */}
                    <div className="mobile-swiper">
                        <div className="swiper types-swiper">
                            <div className="swiper-wrapper">
                                {[
                                    {
                                        title: "Con Peso",
                                        description: "Enfocado en aprender y mejorar movimientos fundamentales como empujar, tirar, agacharse, rotar y estabilizar. Ideal para desarrollar una base de fuerza, movilidad y control corporal.",
                                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=90"
                                    },
                                    {
                                        title: "Con Peso Corporal",
                                        description: "Utiliza el propio peso del cuerpo para trabajar fuerza, equilibrio y coordinación. Es accesible y fácilmente adaptable a distintos niveles de condición física.",
                                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=90"
                                    },
                                    {
                                        title: "Con Implementos",
                                        description: "Incorpora elementos como bandas elásticas, balones o mancuernas, aumentando la variedad y el estímulo del entrenamiento para resultados más completos.",
                                        image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=400&fit=crop&q=90"
                                    },
                                    {
                                        title: "En Circuito",
                                        description: "Organiza los ejercicios en estaciones, combinando trabajo cardiovascular y de fuerza. Favorece la resistencia y la dinámica grupal.",
                                        image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&h=400&fit=crop&q=90"
                                    },
                                    {
                                        title: "Movilidad y Estabilidad",
                                        description: "Prioriza el control postural, la flexibilidad y la prevención de lesiones, siendo complementario a otras actividades físicas y deportivas.",
                                        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=90"
                                    }
                                ].map((type, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                                            <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                                            <div className="p-6">
                                                <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{type.title}</h3>
                                                <p className="font-inter text-gray-600 leading-relaxed">{type.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training for Everyone Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Entrenamiento para Todos
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Tú eliges la intensidad, complejidad y carga
                        </p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="desktop-grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Principiantes",
                                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=90"
                            },
                            {
                                title: "Deportistas",
                                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop&q=90"
                            },
                            {
                                title: "Adultos Mayores",
                                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop&q=90"
                            },
                            {
                                title: "Alta Intensidad",
                                image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=500&fit=crop&q=90"
                            }
                        ].map((category, index) => (
                            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <img 
                                    src={category.image} 
                                    alt={category.title} 
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="font-dm text-2xl font-bold text-white">{category.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper */}
                    <div className="mobile-swiper">
                        <div className="swiper everyone-swiper">
                            <div className="swiper-wrapper">
                                {[
                                    {
                                        title: "Principiantes",
                                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=90"
                                    },
                                    {
                                        title: "Deportistas",
                                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop&q=90"
                                    },
                                    {
                                        title: "Adultos Mayores",
                                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop&q=90"
                                    },
                                    {
                                        title: "Alta Intensidad",
                                        image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=500&fit=crop&q=90"
                                    }
                                ].map((category, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                            <img 
                                                src={category.image} 
                                                alt={category.title} 
                                                className="w-full h-64 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                                <h3 className="font-dm text-2xl font-bold text-white">{category.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Principios del Entrenamiento Funcional
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Los fundamentos que guían cada sesión
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                number: "01",
                                title: "Movimientos Naturales",
                                subtitle: "Base del entrenamiento",
                                description: "Empujar, tirar, agacharse, rotar y estabilizar - los patrones de movimiento que usas cada día"
                            },
                            {
                                number: "02",
                                title: "Progresión Gradual",
                                subtitle: "Adaptación continua",
                                description: "Aumenta la intensidad, complejidad y carga de forma progresiva según tu evolución"
                            },
                            {
                                number: "03",
                                title: "Integración Total",
                                subtitle: "Cuerpo completo",
                                description: "Trabaja múltiples grupos musculares y sistemas energéticos en cada sesión"
                            }
                        ].map((principle, index) => (
                            <div key={index} className="text-center">
                                <div className="text-6xl font-bold gradient-text mb-4">{principle.number}</div>
                                <h3 className="font-dm text-2xl font-bold mb-2 text-gray-900">{principle.title}</h3>
                                <p className="font-inter text-lg text-orange-600 mb-3">{principle.subtitle}</p>
                                <p className="font-inter text-gray-600 leading-relaxed">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Recursos y Apoyo
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Conoce las organizaciones que promueven el deporte y la vida activa en Chile
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <a 
                            href="http://www.fundacionlacumbre.cl/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="card-hover bg-white rounded-2xl p-8 text-center shadow-lg"
                        >
                            <img 
                                src="https://www.practicayoga.cl/logo-fundacion-la-cumbre.png" 
                                alt="Fundación La Cumbre" 
                                className="h-20 mx-auto mb-6"
                            />
                            <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">Fundación La Cumbre</h3>
                            <p className="font-inter text-gray-600 leading-relaxed mb-4">
                                Organización dedicada a promover el bienestar y la actividad física en Chile a través de programas accesibles para toda la comunidad.
                            </p>
                            <span className="text-orange-600 font-semibold">Visitar sitio →</span>
                        </a>

                        <a 
                            href="http://www.mindep.cl/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="card-hover bg-white rounded-2xl p-8 text-center shadow-lg"
                        >
                            <img 
                                src="https://www.practicayoga.cl/logo-donaciones.jpg" 
                                alt="Mindep" 
                                className="h-20 mx-auto mb-6"
                            />
                            <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">Ministerio del Deporte</h3>
                            <p className="font-inter text-gray-600 leading-relaxed mb-4">
                                El Ministerio del Deporte de Chile trabaja para fomentar la práctica deportiva y promover estilos de vida saludables en toda la población.
                            </p>
                            <span className="text-green-600 font-semibold">Visitar sitio →</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-green-500 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-dm text-4xl md:text-5xl font-bold mb-6">
                        ¿Qué Esperas? ¡Comienza Hoy!
                    </h2>
                    <p className="font-inter text-xl mb-8 opacity-90">
                        Motívate y comienza el entrenamiento de acuerdo con tus necesidades
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={findTrainingCenter}
                            className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                        >
                            Encuentra tu Centro de Entrenamiento
                        </button>
                        <a 
                            href="http://www.fundacionlacumbre.cl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 rounded-full text-lg font-semibold transition-all"
                        >
                            Conoce Fundación La Cumbre
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center md:text-left">
                            <h4 className="font-dm text-lg font-bold mb-4">Recursos</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                                        Fundación La Cumbre
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                                        Ministerio del Deporte
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h4 className="font-dm text-lg font-bold mb-4">Apoyado por</h4>
                            <div className="flex justify-center gap-6">
                                <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.practicayoga.cl/logo-fundacion-la-cumbre.png" alt="Fundación La Cumbre" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
                                </a>
                                <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.practicayoga.cl/logo-donaciones.jpg" alt="Mindep" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <h4 className="font-dm text-lg font-bold mb-4">Contacto</h4>
                            <p className="text-gray-400">
                                <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                                    www.fundacionlacumbre.cl
                                </a>
                            </p>
                            <p className="text-gray-400">
                                <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                                    www.mindep.cl
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p className="font-inter text-gray-400">
                            Hecho con 💪 para promover una vida más activa y saludable
                        </p>
                        <div className="mt-4 flex justify-center gap-4">
                            <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-orange-400 transition-colors">
                                Fundación La Cumbre
                            </a>
                            <span className="text-gray-600">|</span>
                            <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-green-400 transition-colors">
                                Mindep
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FunctionalTrainingLanding />);
