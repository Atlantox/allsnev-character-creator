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
                    'Grito de guerra': 
                        `Efectúas un potente grito que afecta a los enemigos frente a ti. El siguiente ataque hacia los enemigos afectados se hacen con 
                        Ventaja. Un uso. Se recarga tras un descanso largo. Alcance: 8 metros.`,
                },
                treats:{
                    'Fuerza innata': 
                        `Bonificador de +1 en pruebas de fuerza.`,
                    'Resistencia al calor II': 
                        `Resiste el calor de nivel 2 sin ningún problema.`,
                    'Saber de rocas': 
                        `Bonificación de +1 en pruebas de sabiduría relacionadas con metalurgia y piedras.`,
                },
            },
          
            'Elfo blanco': {
                icon: 'ciclo.png',
                image: 'elfo_blanco.jpeg',
                abilities: {
                    'Transferir maná':
                        `Transfieres maná de una persona (donador) a otra (recipiente). El donador pierde 2 de maná y otorga 1 de maná al recipiente. 
                        Debes estar en contacto con ambas personas. Tú puedes ser tanto donador como recipiente. Genera cierto ardor a los involucrados.`,
                },
                treats:{
                    'Intelecto innato': 
                        `Bonificación de +1 en pruebas de inteligencia.`,
                    'Ojos hermosos':
                        `Al realizar una prueba de carisma, lanza una moneda, si ganas, obtienes una bonificación de +2.`,
                    'Saber de naturaleza':
                        `Bonificación de +1 en pruebas de sabiduría relacionadas con la magia y la naturaleza.` ,
                },
            },
           
            'Elfo negro': {
                icon: 'balance.png',
                image: 'elfo_negro.jpeg',
                abilities: {
                    'Lectura secreta': `Haces una prueba de percepción CD10 para descubrir un aspecto de la personalidad de una persona con 
                        Alcance hábil de 10 metros. Debes verle el rostro. 2 usos. Se recarga cada descanso corto.`,
                },
                treats:{
                    'Sentidos agudos': 
                        'Bonificación de +1 en pruebas de percepción.',
                    'Visión nocturna': 
                        'Puedes ver en la oscuridad normal hasta 50m y 10m en oscuridad total.',
                    'Comodidad nocturna': 
                        'Mientras haya oscuridad obtienes una bonificación de +1 en todas tus características.',
                },
            },
          
            'Demonio': {
                icon: 'cono.png',
                image: 'demonio.jpeg',
                abilities: {
                    'Seducir': 
                        `Haces una prueba de carisma CD11 para engatusar a una persona obligándola a que te responda con la verdad a la 
                        siguiente pregunta. 2 usos. Se recarga cada descanso corto.`,
                },
                treats:{
                    'Encanto natural':
                        `Bonificación de +1 en pruebas de carisma.` ,
                    'Resistencia a la ponzoña':
                        ` Ventaja en Pruebas de salvación (constitución) de Enfermedades, Hemorragia y Venenos.` ,
                    'Maestro del cardio':
                        `La capacidad pulmonar es el doble de lo usual. Eres más veloz.` ,
                },
            },
           
            'Porcino': {
                icon: 'butcher_knife.png',
                image: 'porcino.jpg',
                abilities: {
                    'Convertir grasa': 
                        `Conviertes tu grasa en poder muscular. Puedes convertir hasta 5 puntos de constitución en fuerza. Un uso. 
                        La bonificación se acaba al terminar un combate o al pasar 30 minutos. Se recarga con un descanso corto. 
                        La vida perdida por la conversión no se recupera.`,
                },
                treats:{
                    'Maestro chef':
                        `Los productos comestibles cocinados o preparados otorgan una bonificación de +1 en una característica aleatoría durante 2 horas al ser consumidas.` ,
                    'Resistencia al frío II':
                        `Resiste el frío de nivel 2 sin ningún problema.` ,
                    'Robustez':
                        `Su salud es igual a su constitución x 4. Eres más lento y saltas menos.` ,
                },
            },
            
            'Ratápido': {
                icon: 'flechas.png',
                image: 'ratapido.jpeg',
                abilities: {
                    'Marcar presa': 
                        `Marcas a un objetivo hasta el final del combate. El objetivo marcado tendrá a tu elección: 
                        Crítico aumentado en 1 en ataques hacia él o bonificación de +2 en pruebas de ataque hacia él. 
                        Un uso. Se recupera tras un descanso corto.`,
                },
                treats:{
                    'Trepador innato':
                        `Bonificación de +1 en las pruebas de destreza relacionadas con escalar y saltar.` ,
                    'Saltador innato':
                        `Tu capacidad de salto se dobla.` ,
                    'Atacante aéreo':
                        `Mientras estés al menos 2 metros por encima de tu objetivo, los ataques se hacen con Ventaja.` ,
                },
            },

            'Córvido': {
                icon: 'libro.png',
                image: 'corvido.jpeg',
                abilities: {
                    'Mimetizar técnica': 
                        `Prestas atención a un hechizo o habilidad, si estás en combate el turno se consume. 
                        Haces una prueba de sabiduría, la dificultad dependerá de la complejidad de la habilidad o hechizo a mimetizar. 
                        Podrás usar la habilidad mimetizada hasta 2 veces (una habilidad a la vez). Un uso. Se recarga tras un descanso largo.`,
                },
                treats:{
                    'Erudito':
                        `Bonificación de +1 en pruebas de sabiduría.` ,
                    'Mimetizar voz':
                        `Puede imitar voces y sonidos casi a la perfección.` ,
                    'Optimización nutricional':
                        `Puedes pasar el doble de tiempo de lo normal antes de sentir Hambruna.` ,
                },
            },
        }
    }

    getRaces(){
        return this.races;
    }
}

export default RaceService