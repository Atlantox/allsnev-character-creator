class RaceService{
    constructor(){
        this.races = {
            'Humano':{
                icon: 'trebol.png',
                image: 'humano.jpeg',
                abilities: {
                    'Inquebrantable': 
                        `Si entras en Luchando por tu vida. Haz una Prueba de salvación (constitución) CD7 si fallas caes inconsciente sin riesgo de morir, 
                        en el caso contrario reestablece tu salud a 1, aumenta en 2 todas tus características hasta el final del combate y obtienes un 
                        turno inmediatamente después. Un uso. Se recarga tras haberte recuperado por completo y haber hecho un descanso largo.`,
                },
                treats:{
                    'Preparación adaptable': 
                        `Obtiene una bonificación de +1 la característica a elección del jugador hasta el siguiente descanso largo. Al terminar un descanso 
                        largo puede cambiar esa bonificación a una característica distinta.`,
                    'Adaptabilidad térmica': 
                        `Al pasar 48 horas en climas fríos o calientes obtienes Resistencia al calor II o Resistencia al 
                        frío II dependiendo del clima. Se pierde al pasar 48 horas fuera del clima.`,
                    'Conocedor de lugares':
                        `Bonificación de +1 en pruebas de sabiduría relacionadas con lectura de mapas y descifrar origen de objetos o personas.`
                },
            },

            'Orco': {
                icon: 'hammer.png',
                image: 'orco.jpeg',
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