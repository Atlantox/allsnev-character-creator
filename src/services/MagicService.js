class MagicService{
    constructor(){
        this.branches = {
            'Elementalista': {
                abilities: {
                    'Potenciar elemento':
                        `Tu siguiente hechizo consumirá 2 más de maná para infligir 1d4 de daño adicional. Puede usarse múltiples veces.`,
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
                    'Concentración total':
                        `Consume 2 de maná cada turno incluyendo el actual, el conjurador doblará su Alcance hábil y la velocidad de sus conjuraciones mientras se mantenga concentrado.`,
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
                    'Segnda oportnidad':
                        `Si un hechizo de ilusión falla, el jugador puede consumir 3  de maná para realizar otro intento (una vez por acción).`,
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
                    'Imbuir área':
                        `El siguiente hechizo de imbuición consume 4 de maná extra a cambio de imbuir los elementos seleccionados en un área de 2 metros a la redonda del hechizo.`,
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
                    'Explotar reanimación':
                        `El nigromante hace estallar a un reanimado propio, causando daño según su vida restante, el alcance depende del tamaño del reanimado, los afectados sufren Veneno de 1d4 por turno. Consumo de maná: 0 + 5 por cada 10 de vida que tenga le reanimado. (Min: 5)`,
                    'Reanimar cadáver (4)':
                        `Reanimas a un cadáver que aún conserve su capacidad motora para que siga tus órdenes. Su costo depende del ser reanimado. Referencia: un gato.`,
                    'Conversar con cadáver (3)':
                    `Te enlazas con un cadáver para hablar con él, el cadáver responderá a 4 preguntas que le hagas según su criterio (puede mentir). Alcance hábil de 5 metros.`,
                    'Envenenar (2)':
                        `Creas un Veneno de 1d5 de daño por turno y lo metes en el cuerpo de un objetivo con Alcance hábil de 10 metros.`,
                    'Crear abominación (12)':
                        `Haces objetivo a un cadáver y cualquier cantidad de otros cadáveres a 2 metros o menos de este, combinas a los cadáveres para formar una masa de carne reanimada que luchará por ti. La abimnación tendrá una fuerza y constitución dependiendo de la morfología de su cuerpo.`,
                    'Reanimación en masa (12)':
                        `Reanimas a todos los cadáveres que estén dentro de tu Nivel de magia y que se encuentren en un área de 5 metros a la redonda. Alcance hábil de 5 metros.`,
                    'Veneno debilitante (6)':
                        `Creas un veneno debilitante que reduce en 3 la característica a tu elección de un objetivo con Alcance hábil de 10 metros.`,
                    'Veneno semiparalizante (7)':
                        `Le infliges Parálisis parcial a un objetivo con Alcance hábil de 10 metros durante 2 minutos.`,
                    'Veneno paralizante (12)':
                        `Le infliges Parálisis a un objetivo con Alcance hábil de 10 metros durante 2 minutos.`,
                    'Gas tóxico (15)':
                        `Cubres un área de 2 metros de radio con gas tóxico infligiendo Veneno de 1d8 de daño por turno a todo aquel que lo respire. Alcance hábil de 5 metros.`,
                    'Resucitar cadáver (15)':
                        `Resucitas a un cadáver, el cadáver conservará sus recuerdos y personalidad, además estará bajo tu control hasta que decidas terminar la resurrección. Alcance hábil de 5 metros.`,
                },
                treats: false,
            },

            'Dominador': {
                abilities: {
                    'Plosión':
                        `El dominador puede hacer que uno de sus objetivos manipulados haga implosión o explosión. La explosión hace daño a los al rededores dependiendo de la dureza y tamaño del objeto. La implosión comprime el objeto lo más posible, la dificultad depende de la dureza y tamaño del objeto. Coste estándar de maná: 3.`,
                    'Telequinesis I (2)':
                        `Dominas un objeto con un peso máximo de 500g con un Alcance hábil de 2 metros a una velocidad de 2m/s.`,
                    'Telequinesis II (4)':
                        `Dominas un objeto con un peso máximo de 5kg con un Alcance hábil de 5 metros a una velocidad de 5m/s.`,
                    'Detectar objetivos (2)':
                        `Emites un pulso invisible de 5 metros de radio desde tu posición. Los objetivos que puedas manipular con tu nivel de telequinesis se te serán revelados.`,
                    'Telequinesis III (6)':
                        `Dominas un objeto con un peso máximo de 20kg con un Alcance hábil de 10 metros a una velocidad de 10m/s.`,
                    'Teletransportar objetivo (8)':
                        `Teletransportas un objetivo que puedas levantar a otra ubicación dentro de tu Alcance hábil.`,
                    'Telequinesis IV (12)':
                        `Dominas un objeto con un peso máximo de 80kg con un Alcance hábil de 20 metros a una velocidad de 20m/s.`,
                    'Dominar ser vivo (15)':
                        `Dominas el cerebro de un ser pensante para controlarlo con un Alcance hábil de 10 metros.`,
                },
                treats: false,
            },

            'Protector': {
                abilities: {
                    'Área protectora':
                        `Crea un área protectora de 2 metros de radio de ti, los objetivos que escojas dentro del área sanan sus heridas y los protege de hechizos mágicos según el nivel de magia del protector. Coste de maná: 5`,
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
        }
    }

    getBranches(){
        return this.branches;
    }
}

export default MagicService