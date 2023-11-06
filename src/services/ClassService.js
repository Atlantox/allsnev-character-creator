class ClassService{
    constructor(){
        this.classes = {
            'Guerrero': {
                abilities: {
                    'Golpe fuerte': 
                        `Tu siguiente golpe hará 1d4 de daño extra al impactar pero tendrá una desmejora de -2 a la precisión.
                        Maestría: El daño aumenta a 1d6.`,
                    'Sobreesfuerzo físico': 
                        `Si estás fuera de combate y acabas de perder una prueba de fuerza, tendrás un intento extra. Al terminar, 
                        las extremidades que hayas utilizado para la acción, quedarán inhabilitadas por 5 minutos por sobreesfuerzo.
                        Maestría: La inhabilitación solo se dará si fallas la prueba.`,
                    'Sed de violencia': 
                        `Enloqueces por los siguientes 3 turnos, atacando a objetivos al azar e infligiendo 1d4 de daño adicional. Requiere nivel 8.
                        Maestría: Si atacas a un aliado, lo atacarás con Desventaja.`,
                    'Golpe temerario': 
                        `Realizas un poderoso y temerario ataque que reduce la durabilidad del arma usada para infligir un dado extra 
                        del daño del arma. Si el ataque falla quedas expuesto, haciendo que el siguiente ataque hacia ti sea con Ventaja. Requiere nivel 12.
                        Maestría: Si fallas, lanza una moneda, si ganas, evitarás quedarte expuesto.`,
                },
                treats:{
                    'Dominio del guerrero': 'Dominio en tipo de armas cuerpo a cuerpo y herramientas de fuerza y lanzamiento de objetos pesados.',
                    'Torpeza mágica': 'No pueden aprender ni lanzar hechizos.',
                    'Torpeza divina': 'No pueden aprender ni lanzar milagros.',
                    'Torpeza manual': ' Desventaja al usar armas o herramientas de destreza.'
                },
                subClasses: {
                    'Bárbaro': {
                        abilities: {
                            'Fuerza barbárica': 
                                `Durante 10 minutos o hasta el final del combate ganas la capacidad de empuñar armas de dos manos en 
                                cada mano con una desmejora de -2 a la precisión. Requiere nivel 16.
                                Maestría: La desmejora pasa a ser de -1.`,
                        },
                        treats: {
                            'Dominio bárbaro': 
                                `Al no llevar armadura equipada su armadura es igual a su modificador de constitución -1. 
                                Desventaja en pruebas de inteligencia. Desventaja en pruebas de ataque al llevar armadura puesta.`
                        },
                    },
                    'Mixto':{
                        abilities: false,
                        treats: {
                            'Hechicero principiante': 'Puedes aprender y usar los hechizos de nivel 1 de una escuela de magia',
                            'Habilidoso principiante': 'Puedes usar armas y herramientas de destreza con normalidad',
                        }
                    }
                },
            },

            'Hechicero': {
                abilities: {
                    'Proyectil mágico (3)':
                        `Disparas un proyectil de magia pura que inflige 1d4 de daño mágico con un Alcance hábil de 10 metros.
                        Maestría: El daño aumenta a 1d6`,
                },
                treats:{
                    'Dominio del hechicero': `Domina la magia y uso de báculos.`,
                    'Torpeza divina': 'No pueden aprender ni lanzar milagros.',
                    'Torpeza musculosa': 'Desventaja en pruebas de fuerza.',
                    'Dependencia a los báculos': `Desventaja en lanzar hechizos sin un báculo.`,
                },
                subClasses: { 
                    'Elementalista': {
                        abilities: {
                            'Chispa (1)':
                                `Generas una pequeña chispa eléctrica con Alcance hábil de 3 metros. La chispa es tan débil que no ocasiona daño.`,
                            'Ascua (1)':
                                `Generas una débil ascua con Alcance hábil de 3 metros lo suficientemente potente como para encender maleza seca.`,
                            'Gota de agua (1)':
                                `Generas una pequeña gota de agua potable de unos 10g con Alcance hábil de 3 metros.`,
                            'Guijarro (1)':
                                `Generas una pequeña piedra de unos 20g con Alcance hábil de 3 metros.`,
                            'Ventilar (1)':
                                `Generas una débil corriente de viento capaz de esparcir polvo y levantar hojas con Alcance hábil de 3 metros.`,
                            'Descarga eléctrica (1)':
                                `Creas una descarga eléctrica con Alcance hábil de 5 metros que inflige 1d6 de daño por electricidad.`,
                            'Arrojar fuego (3)':
                                `Lanzas un fogonazo de fuego con Alcance hábil de 5 metros infligiendo 1d6 de daño por fuego.`,
                            'Carámbano (3)':
                                `Generas un carámbano de hielo de 10cm que puedes lanzar para infligir 1d6 de daño por hielo con Alcance hábil de 5 metros.`,
                            'Chorro de agua (3)':
                                `Generas un chorro de agua potable que sale de tu báculo y puedes mantener por hasta un minuto con un Alcance hábil de un metro.`,
                            'Pedrada (3)':
                                `Creas una piedra de 100g que puedes lanzar para infligir 1d6 de daño contundente por roca con Alcance hábil de 5 metros.`,
                            'Ráfaga de viento (3)':
                                `Generas una ráfaga de viento para empujar a un objetivo con Alcance hábil de 5 metros.`,
                            'Polvareda de arena (3)':
                                `Creas una nube de arena para rociar a un objetivo y darle Desventaja en su siguiente ataque con Alcance hábil de 5 metros.`,
                            'Rayo encadenado (5)':
                                `Lanzas un rayo a un objetivo con Alcance hábil de 8 metros, el objetivo sufre 1d8 de daño por electricidad mientras, los objetivos a 2 metros 
                                del objetivo principal sufren 1d4 de daño del mismo tipo.`,
                            'Bola de fuego (5)':
                                `Arrojas una bola de fuego con un Alcance hábil de 8 metros, la bola de fuego explota al impactar infligiendo 1d6 de daño por fuego a los objetivos a 3 metros del impacto.`,
                            'Congelar (5)':
                                `Te centras en un objetivo para intentar congelarlo y hacer que pierda su siguiente turno, Alcance hábil de 8 metros.`,
                            'Masa acuática (5)':
                                `Creas una esfera de agua potable de medio metro de radio con Alcance hábil de 8 metros que puedes controlar a libertad.`,
                            'Lluvia de rocas (5)':
                                `Invocas una serie de piedras que puedes disparar a objetivos con Alcance hábil de 8 metros infligiendo 1d12 de daño contundente por roca repartido como desees.`,
                            'Viento cortante (5)':
                                `Generas una rápida y fina corriente de aire que inflige 1d8 de daño cortante por viento con Alcance hábil de 8 metros.`,
                            'Bofetada de viento (5)':
                                `Generas una corriente de aire repentina cerca de un objetivo con Alcance hábil de 8 metros infligiendo 1d8 de daño contundente por viento.`,
                            'Relámpago (8)':
                                `Creas un relámpago que inflige 1d20 de daño por electricidad con Alcance hábil de 15 metros.`,
                            'Explosión ígnea (8)':
                                `Generas una explosión de fuego con Alcance hábil de 15 metros que inflige 1d10 de daño por fuego en un radio de 3 metros.`,
                            'Metralla de agua (8)':
                                `Expulsas una serie de pequeños proyectiles de agua frente a ti infligiendo 1d10 de daño perforante por agua con Alcance hábil de 15 metros`,
                            'Congelar superficie (8)':
                                `Congelas una superficie de 4 metros de radio con Alcance hábil de 8 metros, el área se convierte en una zona resbaladiza que hace que las pruebas de ataque y movimiento se 
                                hagan con Desventaja durante 5 minutos.`,
                            'Terremoto (8)':
                                `Haces temblar el suelo con Alcance hábil de 15 metros, los objetivos a 4 metros del epicentro harán Pruebas de salvación (constitución) CD10 para no perder su siguiente turno.`,
                            'Estructura de viento (8)':
                                `Creas una pared, escalera, esfera u otra estructura de viento que puedes movilizar y cambiar su tamaño a placer con un Alcance hábil de 15 metros.`,
                            'Rayo de magia pura (12)':
                                `Lanzas un potente rayo hacia un objetivo que inflige 2d20 de daño sobrenatural con un Alcance hábil de 10 metros.`,
                        },
                        treats: false,
                    },
                    'Conjurador': {
                        abilities: {
                            'Conjurar figura (2)':
                                `Conjuras un cubo, esfera u otra figura pequeña que puedes movilizar. Referencia: un cubo de 10cm`,
                            'Conjurar herramienta (3)':
                                `Conjuras una herramienta de una sola pieza como una cuchara, vaso, cuchillo o  ganzúa. Referencia: cuchillo de 15cm`,
                            'Conjurar arma (4)':
                                `Conjuras una arma de cualquier tipo. Referencia: espada de 60cm`,
                            'Conjurar armadura (4)':
                                `Conjuras una pieza de armadura para que una persona pueda usarla. Referencia: Pechera de 50cm.`,
                            'Conjurar estructura (8)':
                                `Conjuras una pared, suelo, escalera u otra estructura. Referencia: barricada de 2x2 metros.`,
                            'Conjurar doble (10)':
                                `Conjuras una figura humanoide que puedes controlar como una conjuración cualquiera. el doble podrá realizar tareas físicas como proteger o golpear.`,
                        },
                        treats: false,
                    },
                    'Ilusionista': {
                        abilities: {
                            'Transmitir falso sentido (2)':
                                `Transmites un falso sentido al objetivo como un ruido, ilusión, toqueteo, sabor u olor dependiendo de tu Nivel de magia.`,
                            'Compartir sentido (2)':
                                `Compartes tus sentidos con los de otro objetivo durante 5 minutos. La dirección de los sentidos es bidireccional. Podrás conversar telepàticamente con el objetivo.`,
                            'Infundir emoción (4)':
                                `Inculcas una emoción o sentimiento a un objetivo como miedo, tranquilidad o furia durante 10 minutos.`,
                            'Invisibilidad (7)':
                                `Engañas a uno o más objetivos para que sean incapaces de verte y oírte.`,
                            'Suplantar identidad (7)':
                                `Engañas a uno o más objetivos para que te perciban visualmente de la manera en que prefieras.`,
                            'Arrebatar sentido (10)':
                                `Privas a uno o más objetivos de uno de sus sentidos durante 5 minutos.`,
                        },
                        treats: false,
                    },
                    'Alterador': {
                        abilities: {
                            'Alterar peso (2)':
                                `Modificas el peso de un objeto para hacerlo más pesado o ligero`,
                            'Alterar dureza (3)':
                                `Modificas la rigidez de un objeto para hacerlo más suave, elástico o duro.`,
                            'Alterar temperatura (4)':
                                `Modificas la temperatura de un objeto para enfriarlo o calentarlo.`,
                            'Alteración permanente (Maná máximo)':
                                `La siguiente alteración será permanente con las siguientes restricciones: La alteración durará 2 horas en lanzarse, consumirá todo el maná e impedirá al regeneración de este por las próximas 24 horas.`,
                        },
                        treats: false,
                    },
                    'Nigromante': {
                        abilities: {
                            'Reanimar cadáver (4)':
                                `Reanimas a un cadáver que aún conserve su capacidad motora para que siga tus órdenes. Su costo depende del ser reanimado. Referencia: un gato.`,
                            'Conversar con cadáver (3)':
                                `Te enlazas con un cadáver para hablar con él, el cadáver responderá a 4 preguntas que le hagas según su criterio (puede mentir). Alcance hábil de 5 metros.`,
                            'Reanimación en masa (12)':
                                `Reanimas a todos los cadáveres que estén dentro de tu Nivel de magia y que se encuentren en un área de 5 metros a la redonda. Alcance hábil de 5 metros.`,
                            'Resucitar cadáver (15)':
                                `Resucitas a un cadáver, el cadáver conservará sus recuerdos y personalidad, además estará bajo tu control hasta que decidas terminar la resurrección. Alcance hábil de 5 metros.`,
                        },
                        treats: false,
                    },
                    'Dominador': {
                        abilities: {
                            'Telequinesis I (2)':
                                `Dominas un objeto con un peso máximo de 500g con un Alcance hábil de 2 metros a una velocidad de 2m/s.`,
                            'Telequinesis II (4)':
                                `Dominas un objeto con un peso máximo de 5kg con un Alcance hábil de 5 metros a una velocidad de 5m/s.`,
                            'Telequinesis III (6)':
                                `Dominas un objeto con un peso máximo de 20kg con un Alcance hábil de 10 metros a una velocidad de 10m/s.`,
                            'Telequinesis IV (12)':
                                `Dominas un objeto con un peso máximo de 80kg con un Alcance hábil de 20 metros a una velocidad de 20m/s.`,
                            'Dominar ser vivo (15)':
                                `Dominas el cerebro de un ser pensante para controlarlo con un Alcance hábil de 10 metros.`,
                        },
                        treats: false,
                    },
                    'Protector': {
                        abilities: {
                            'Cicatrizar (3)':
                                `Cicatrizas una herida ligera y restauras 1d4 de salud al objetivo con Alcance hábil de 3 metros.`,
                            'Curar dolencia (4)':
                                `Curas un Veneno o Hemorragia a un objetivo con Alcance hábil de 3 metros.`,
                            'Romper maldición (4)':
                                `Rompes la maldición de un objetivo con Alcance hábil de 5 metros. Si la maldición te iguala o supera, se hará con Desventaja.`,
                            'Cerrar heridas (5)':
                                `Curas la perforación de un órgano, un hueso roto o herida grave y restauras 2d6 de salud a un objetivo con Alcance hábil de 5 metros.`,
                            'Curar enfermedad (5)':
                                `Curas la enfermedad física de un objetivo con Alcance hábil de 5 metros.`,
                            'Escudo negador (5)':
                                `Invocas un pequeño escudo de un metro de radio con Alance hábil de 5 metros que bloqueará hechizos y milagros de nivel 2 o inferior durante 2 minutos.`,
                            'Regenerar miembro perdido (10)':
                                `Regeneras lentamente el miembro perdido de un ser durante 5 minutos. Referencia: Un brazo se recupera por completo tras una hora de regeneración.`,
                            'Escudo reflectante (10)':
                                `Invocas un escudo de hasta 2 metros de radio con Alcance hábil de 5 metros que reflejará todos los hechizos y milagros de nivel 3 o menos durante 3 minutos.`,
                            'Armadura reflectante (10)':
                                `Imbuyes a una armadura de tu magia reflectante con Alcance hábil de un metro, los hechizos y milagros de nivel 3 o menos que reciba la armadura serán reflejados.`,
                        },
                        treats: false,
                    },
                 },
            },

            'Cazador': {
                abilities: {
                    'Oportunidad riesgosa': 
                        `Tu siguiente ataque se hará con Crítico aumentado en 1. Si falla, el siguiente ataque del objetivo también tendrá Crítico aumentado en 1.
                        Maestría: Obtienes una bonificacion de +1 en precisión.`,
                    'Retroceso apresurado': 
                        `Atacas a un objetivo dentro de tu alcance cuerpo a cuerpo y te alejas de él durante 3 segundos según tu velocidad de carrera evitando así Ataques de oportunidad. Si fallas, 
                        el siguiente ataque hacia ti será con Ventaja. Requiere nivel 4.
                        Maestría: Tu ataque tendrá posibilidad de infligir Aturdimiento.`,
                    'Disparo lejano': 
                        `Aumentas el Alcance hábil de tu siguiente disparo en 50%. Si fallas, el Alcance hábil de tu siguiente disparo disminuye en 50%. Requiere nivel 8.
                        Maestría: La disminución del Alcance hábil por fallo pasa a ser del 20%.`,
                    'Planificar disparo': 
                        `Tu siguiente disparo acertará. Perderás tu siguiente turno. Requiere nivel 12.
                        Maestría: Haz una prueba de destreza CD15 si ganas, evitarás perder tu siguiente turno.`,
                    'Disparo certero': 
                        `Tu siguiente disparo será crítico, aunque el acierto no está garantizado. El siguiente ataque que recibas se hará con Ventaja. Requiere nivel 16.
                        Maestría: Obtienes una bonificación de +1 a la precisión.`,
                },
                treats:{
                    'Dominio del cazador': 'Dominio de las armas de a distancia y herramientas de destreza',
                    'Torpeza del cazador': 'Desventaja con armas y herramientas de fuerza'
                },
                subClasses: {
                    'Explorador': {
                        abilities: false,
                        treats: {
                            'Rastreador innato' : 'Ventaja en pruebas relacionadas con seguir rastros y escalar.',
                        },
                    },
                    'Tirador':{
                        abilities: false,
                        treats: {
                            'Dominio de tirador': 'Bonificación de +1 en pruebas de ataques a distancia. ',
                        }
                    }
                },
            },

            'Pícaro': {
                abilities: {
                    'Oportunidad riesgosa': 
                        `Tu siguiente ataque se hará con Crítico aumentado en 1. Si falla, el siguiente ataque del objetivo también tendrá Crítico aumentado en 1.
                        Maestría: Obtienes una bonificacion de +1 en precisión.`,
                    'Esperar oportunidad': 
                        `Pierdes tu turno. Hasta tu siguiente turno cada vez que recibas un ataque haz una prueba de destreza CD12, si ganas esquivarás el ataque. Requiere nivel 4.
                        Maestría: Si esquivas un ataque de esta manera, haz una prueba de destreza CD10, si ganas realizarás un contraataque.`,
                    'Encontrar debilidad': 
                        `Tu siguiente ataque se hará con Crítico aumentado en 2 y se hará con Desventaja. Requiere nivel 8.
                        Maestría: El Crítico aumentado será de 3.`,
                    'Maestro de los críticos': 
                        `Hasta el final del combate, todas tus tiradas de ataque tendrán Crítico aumentado en 1. Un uso. Se recarga tras un descanso largo. Requiere nivel 16.
                        Maestría: Los usos aumentan a 2.`,
                },
                treats:{
                    'Dominio de pícaro': `Domina todo tipo de armas cuerpo a cuerpo y herramientas de destreza.`,
                    'Torpeza del pícaro': `Desventaja en pruebas de constitución.`,
                },
                subClasses: {
                    'Ladrón': {
                        abilities: false,
                        treats: {
                            'Dominio del ladrón': `Ventaja en pruebas relacionadas con el hurto y escalar.`,
                        }
                    },
                    'Asesino':{
                        abilities: {
                            'Puñalada mortal':
                                `Realizas un Ataque furtivo cuerpo a cuerpo. El daño infligido se dobla. Si fallas, el enemigo realizará un ataque con Ventaja hacia ti. Requiere nivel 12.
                                Maestría: El daño aumenta a x 2.5.`,
                        },
                        treats: {
                            'Dominio del asesino': `Ventaja al realizar ataques furtivos.`
                        },
                    }
                },
            },

            'Monje': {
                abilities: {
                    'Golpe directo': 
                        `Atacas a un objetivo con un poderoso puñetazo infligiendo 1d4 + modificador de fuerza de daño contundente.
                        Maestría: El daño aumenta a 1d6.`,
                    'Patada inversa': 
                        `Realizas un ataque con el talón usando una patada giratoria inversa pudiendo impactar a más de un objetivo e infligiendo 1d4 + modificador de destreza de daño contundente.
                        Maestría: Los objetivos que sufran el daño máximo harán una prueba de constitución CD10, si pierden, sufrirán Aturdimiento.`,
                    'Meditación': 
                        `Piertes tu turno. Tu siguiente ataque hará 1d4 de daño adicional y una bonificación de +1 a la precisión.
                        Maestría: El daño adicional aumenta a 1d6.`,
                    'A bocajarro': 
                        `Esta habilidad requiere ser enseñada. Realizas un combo de 4 golpes con tus puños a un solo objetivo infligiendo 1d3 de daño contundente por cada golpe.
                        Maestría: El número de golpes aumenta a 6.`,
                    'Golpe cortante': 
                        `Esta habilidad requiere ser enseñada. Efectúas un difícil ataque contra un objetivo, rozándolo velozmente con una extremidad infligiendo 1d4 + modificador de destreza de daño cortante y aplicando Hemorragia. El ataque se hace con Desventaja.
                        Maestría: El daño aumenta a 1d6 y ya no se hace con Desventaja.`,
                    'Rápquit': 
                        `Esta habilidad requiere ser enseñada. Hasta tu siguiente turno esquivarás todos los ataques. Requiere nivel 16
                        Maestría: Al esquivar un ataque, haz una prueba de destreza o percepción CD10, si ganas, realizarás un contraataque.`,
                },
                treats:{
                    'Dominio del monje': 'Domina el combate desarmado. Ventaja en pruebas relacionadas con reflejos, contraataque y sumisión.',
                    'Torpeza del monje': 'Desventaja en ataques con armas de todo tipo.',
                    'Torpeza mágica': 'No pueden aprender ni lanzar hechizos.',
                    'Torpeza divina': 'No pueden aprender ni lanzar milagros.',
                },
                subClasses: false,
            },

            'Clérigo': {
                abilities: {
                    'Sintonizar con mi adorado': 
                        `Haz una prueba de sabiduría CD18, si ganas podrás comunicarte con tu adorado, que te responderá a una pregunta hablando directamente en tu mente. 24 horas de recarga.
                        Maestría: La prueba de sabiduría se hará con Ventaja.`,
                    'Lanzar milagro': 
                        `"Lanzas un milagro según tu nivel de clérigo.
                        Maestría: La maestría de esta habilidad es requerida para lanzar milagros de nivel 5."`,
                },
                treats:{
                    'Dominio divino': 'Dominio en lanzar milagros',
                    'Dominio del clérigo': 'Domina el uso de Armas benditas.',
                    'Torpeza mágica': 'No pueden aprender ni lanzar hechizos.',
                    'Dependencia a las armas divinas': 'Desventaja al lanzar milagros sin Armas benditas.'
                },
                subClasses: {
                    'Paladín': {
                        abilities: false,
                        treats: {
                            'Dominio de paladín': 
                                `Al estar conjuntado con armadura pesada obtienes bonificación de +1 en defensa. Desventaja 
                                en pruebas de ataque que no involucren un Arma bendita cuerpo a cuerpo.`,
                        },
                    },
                    'Sacerdote':{
                        abilities: false,
                        treats: {
                            'Dominio de sacerdote': 
                                `Acceso al Bonus sacerdotal de los milagros. Desventaja en pruebas de ataque que no involucren un 
                                bastón Bendito.`,
                        }
                    }
                },
            },


            'Bardo': {
                abilities: {
                    'Sonata relajante':
                        `Tocas una relajante melodía que calma la mente de tus objetivos curando 1d6 de salud mental.`,
                    'Sonata tensa':
                        `Tocas una melodía tensa que alerta a tus objetivos otorgándoles una bonificación de +1 en pruebas de percepción mientras mantengas la melodía.`,
                    'Sonata de guerra':
                        `Tocas una inspiradora melodía a tus objetivos que les otorga un +1 en tiradas de ataque. de todo tipo mientras mantengas la melodía.`,
                    'Sonata ofensiva':
                        `Tocas una melodía errática combinada con cánticos de insultos para infligir 1d4 de daño psíquico a los objetivos.`,
                    'Sonata agobiante':
                        `Tocas una melodía enfocada a un objetivo para que sus tiradas de ataque se hagan con Desventaja mientras mantengas la melodía.`,
                    'Sonata frenética':
                        `Tocas una melodía de ritmo veloz que aumenta la velocidad de movimiento de los objetivos en 20% mientras mantengas la melodía.`,
                    'Sonata plácida':
                        `Tocas una melodía reconfortante para los objetivos, si los objetivos se duermen escuchando la melodía curarán a tu elección 1 de vida o salud mental extra por hora.`,
                    'Sonata concentrada':
                        `Tocas una melodía enfocada a un objetivo para otorgarle una bonificación de +1 en su siguiente prueba fuera de combate.`,
                },
                treats:{
                    'Dominio del bardo':
                        `Domina los intrumentos musicales y la labia.`,
                    'Torpeza del bardo':
                        `Desventaja en pruebas de ataques de todo tipo`,
                },
                subClasses: false,
            },
        };
    }

    getClasses(){
        return this.classes;
    }
}

export default ClassService