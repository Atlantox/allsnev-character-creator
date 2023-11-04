class ClassService{
    constructor(){
        this.classes = {
            'Guerrero': {
                abilities: {
                    'Golpe fuerte': 'pegas fuerte',
                    'Golpe temerario': 'desgasta el arma'
                },
                treats:{
                    'Dominio del guerrero': 'Dominio de todas las armas de fuerza',
                    'Torpeza de destreza': 'Desventaja con armas y herramientas de destreza'
                },
                subClasses: {
                    'Bárbaro': {
                        abilities: {
                            'Fuerza barbárica': 'armas de dos manos en cada mano'
                        },
                        treats: {
                            'Dominio bárbaro': 'Pegas más desnudo'
                        },
                    },
                    'Mixto':{
                        abilities: {},
                        treats: {
                            'Hechicero principiante': 'Puedes aprender y usar los hechizos de nivel 1 de una escuela de magia',
                            'Habilidoso principiante': 'Puedes usar armas de destreza con facilidad',
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
                subClasses: { },
            },
        };
    }

    getClasses(){
        return this.classes;
    }
}

export default ClassService