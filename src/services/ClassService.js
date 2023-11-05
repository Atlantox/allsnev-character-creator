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
                    'Dominio del guerrero': 'Dominio en tipo de armas cuerpo a cuerpo de fuerza y lanzamiento de objetos pesados.',
                    'Torpeza mágica': 'No pueden aprender ni lanzar hechizos o milagros.',
                    'Torpeza manual': ' Desventaja al usar armas o herramientas de destreza.'
                },
                subClasses: {
                    'Bárbaro': {
                        abilities: {
                            'Fuerza barbárica': 'armas de dos manos en cada mano'
                        },
                        treats: {
                            'Dominio bárbaro': 
                                `Al no llevar armadura equipada su armadura es igual a su modificador de constitución -1. 
                                Desventaja en pruebas de inteligencia. Desventaja en pruebas de ataque al llevar armadura puesta.`
                        },
                    },
                    'Mixto':{
                        abilities: {},
                        treats: {
                            'Hechicero principiante': 'Puedes aprender y usar los hechizos de nivel 1 de una escuela de magia',
                            'Habilidoso principiante': 'Puedes usar armas y herramientas de destreza con normalidad',
                        }
                    }
                },
            },

            'Cazador': {
                abilities: {
                    'Oportunidad riesgosa': 'Mayor crítico',
                    'Disparo lejano': 'Disparas más lejos'
                },
                treats:{
                    'Dominio del cazador': 'Dominio de las armas de y herramientas de destreza a distancia',
                    'Torpeza del cazador': 'Desventaja con armas y herramientas de fuerza'
                },
                subClasses: {
                    'Explorador': {
                        abilities: {},
                        treats: {
                            'Dominio de explorador': 'Exploras mejor'
                        },
                    },
                    'Tirador':{
                        abilities: {},
                        treats: {
                            'Dominio de tirador': 'Disparas con mayor precisión',
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
                    'Dominio de pícaro': 
                        `Domina todo tipo de armas cuerpo a cuerpo y herramientas de destreza.`,
                    'Torpeza del pícaro':
                        `Desventaja en pruebas de constitucion.`,
                },
                subClasses: {
                    'Ladrón': {
                        abilities: { },
                        treats: {
                            'Dominio del ladrón': 
                                `Ventaja en pruebas relacionadas con el hurto y escalar.`,
                        }
                    },
                    'Asesino':{
                        abilities: {
                            'Puñalada mortal (Asesino)':
                                `Realizas un Ataque furtivo cuerpo a cuerpo. El daño infligido se dobla. Si fallas, el enemigo realizará un ataque con Ventaja hacia ti. Requiere nivel 12.

                                Maestría: El daño aumenta a x 2.5.`,
                        },
                        treats: {
                            'Dominio del asesino':
                                `Ventaja al realizar ataques furtivos.`
                        },
                    }
                },
            },

            'Clérigo': {
                abilities: {
                    'Sintonizar con mi adorado': 'hablas con tu dios',
                    'Lanzar milagro': 'Lanzas un milagro'
                },
                treats:{
                    'Dominio del clérigo': 'Dominio en lanzar milagros',
                    'Torpeza del clérigo': 'Desventaja con armas que no sean bastón y cetro'
                },
                subClasses: {
                    'Paladín': {
                        abilities: {},
                        treats: {
                            'Dominio de paladín': 'pum te pego'
                        },
                    },
                    'Sacerdote':{
                        abilities: {},
                        treats: {
                            'Dominio de sacerdote': 'tienes el bonus sacerdotal',
                        }
                    }
                },
            },

            'Luchador': {
                abilities: {
                    'Sintonizaadw3dawr con mi adorado': 'hablas con tu dios',
                    'Lanzar mildawdaagro': 'Lanzas un milagro'
                },
                treats:{
                    'Dominio del casfq3glérigo': 'Dominio en lanzar milagros',
                    'Torpeza del claawga2wférigo': 'Desventaja con armas que no sean bastón y cetro'
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