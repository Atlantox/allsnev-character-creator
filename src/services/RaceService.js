class RaceService{
    constructor(){
        this.races = {
            'Humano':{
                icon: 'trebol.png',
                image: 'humano.jpeg',
                abilities: {
                    'Inquebrantable': 'Cuando te vais a morir no te morís',
                },
                treats:{
                    'Adaptabilidad': 'Te adaptás',
                },
            },

            'Orco': {
                icon: 'hammer.png',
                image: 'Orc.webp',
                abilities: {
                    'Grito de guerra': 'Gritas fuerte',
                },
                treats:{
                    'Fuerza innata': 'Sos más fuerte',
                },
            },
          
            'Elfo blanco': {
                icon: 'ciclo.png',
                image: 'elfo_blanco.jpeg',
                abilities: {
                    'Transferir mágia': 'Transfieres magia',
                },
                treats:{
                    'Belleza': 'Sos bello',
                },
            },
           
            'Elfo negro': {
                icon: 'balance.png',
                image: 'elfo_negro.jpeg',
                abilities: {
                    'Lectura secreta': 'Haces una prueba de percepción CD11 para descubrir un aspecto de la personalidad de una persona con Alcance hábil de 10 metros. Debes verle el rostro. 2 usos. Se recarga cada descanso corto.',
                },
                treats:{
                    'Sentidos agudos': 'Bonificación de +1 en pruebas de percepción.',
                    'Visión nocturna': 'Puedes ver en la oscuridad normal hasta 50m y 10m en oscuridad total.',
                    'Sentidos nocturnos': 'Mientras haya oscuridad obtienes una bonificación de +2 en percepción.'
                },
            },
          
            'Demonio': {
                icon: 'cono.png',
                image: 'demonio.jpeg',
                abilities: {
                    'Seducción': 'Seducís a alguien',
                },
                treats:{
                    'Encanto natural': 'Sos encantador naturalmente',
                },
            },
           
            'Porcino': {
                icon: 'butcher_knife.png',
                image: 'porcino.jpg',
                abilities: {
                    'Transformar grasa': 'Transformás grasa',
                },
                treats:{
                    'Maestro chef': 'Cocinás mejor',
                },
            },
            
            'Ratápido': {
                icon: 'flechas.png',
                image: 'ratapido.jpeg',
                abilities: {
                    'Ojo de ladrón': 'Mirás como ladrón',
                },
                treats:{
                    'Saltaro innato': 'Saltás más',
                },
            },

            'Córvido': {
                icon: 'libro.png',
                image: 'corvido.jpeg',
                abilities: {
                    'Mimetizar técnica': 'Mimetizas una técnica',
                },
                treats:{
                    'Erudito': 'Sabés más',
                },
            },
        }
    }

    getRaces(){
        return this.races;
    }
}

export default RaceService