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
        };
    }

    getClasses(){
        return this.classes;
    }
}

export default ClassService