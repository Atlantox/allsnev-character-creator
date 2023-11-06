class GodService{
    constructor(){
        this.gods = {
            'Mastus': {
                available: false,
                abilities: {
                    'Intercambiar característica (Nv 1)': 
                        `Intercambias los valores de 2 características de un objetivo con Alcance hábil de 5 metros durante 10 minutos.
                        Bonus sacerdotal: El Alcance hábil aumenta a 10 metros, la duración a 30 minutos y las características intercambiables a 3.`,
                    'Pizca del caos (Nv 1)': 
                        `Maldices a un objetivo con Alcance hábil de 5 metros para que ataque a un objetivo al azar dentro de su alcance en su siguiente ataque.
                        Bonus sacerdotal: Lanza una moneda, si ganas, el objetivo se volverá Irracional por 1 minuto.`,
                    'Rayo succionador (Nv 1)': 
                        `Disparas un rayo que hace 1d6 de daño sobrenatural a un objetivo con Alcance hábil de 10 metros. Puedes hacer que el daño provocado por 
                        el milagro se te proporcione como salud o magia.
                        Bonus sacerdotal: Puedes hacer que el daño provocado te restaure esa cantidad tanto de vida y como de magia, además puedes transferir 
                        esa recuperación a un objetivo a 5 metros o menos de ti.`,
                    'Restaurar magia (Nv 2)': 
                        `Restauras 1d6 de magia de un objetivo con Alcance hábil de 5 metros.
                        Bonus sacerdotal: La recuperación de magia aumenta a 2d6 y el próximo hechizo del objetivo no gastará maná (solo hechizos con costo de maná fijo).`,
                    'Esencia de caos (Nv 2)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros durante 5 minutos, siempre que el objetivo maldito lance un hechizo o milagro sufrirá 
                        aleatoriamente uno de los siguientes efectos. 30 segundos de Ceguera, 30 segundos de Parálisis, 1d4 de daño físico, 1d4 de daño psíquico.
                        Bonus sacerdotal: Añade los siguientes efectos aleatorios: devolución del daño o efectos negativos, el hechizo o milagro no sucede, el objetivo se 
                        vuelve Irracional por 2 minutos.`,
                    'Borrado de memoria (Nv 3)': 
                        `Borras las memorias de los últimos 5 minutos de hasta 2 objetivos con Alcance hábil de 10 metros.
                        Bonus sacerdotal: La cantidad de posibles de objetivos pasa a ser ilimitada.`,
                    'Mover meteorito (Nv 3)': 
                        `Obligas a un meteorito que se dirija hacia un lugar con Alcance hábil de 30 metros. El meteorito al impactar inflige un 2d15 de daño contundente 
                        por fuego en un área circular de 2 metros de radio del lugar del impacto.
                        Bonus sacerdotal: Puedes lanzar un meteorito adicional.`,
                    'Desfile de los caidos (Nv 4)': 
                        `Reanimas a toda criatura dentro de un área de 10 metros a tu alrededor para que luchen por ti durante 5 minutos. Aquellas almas que murieron 
                        allí pero carecen de cuerpo físico, serán invocados como espíritus etéreos.
                        Bonus sacerdotal: Aumenta la duración a 10 minutos y los ataques de los reanimados se harán con Ventaja.`,
                    'Sembrar el caos (Nv 5)': 
                        `Maldices a todas las criaturas a 20 metros o menos de ti durante 10 minutos, los objetivos malditos se vuelven Irracionales. Al lanzar el milagro 
                        puedes escoger volverte Irracional por ese mismo tiempo, si lo haces, todo tu daño infligido se doblará mientras permanezcas en ese estado.
                        Bonus sacerdotal: Podrás escoger a 5 objetivos para protegerlos de la Irracionalidad. Los objetivos malditos se vuelven Irracionales permanentemente. 
                        Si decides volverte Irracional, el efecto sobre ti tendrá una duración de 10 minutos y tu daño infligido se triplicará.`,
                }
            },
            
            'Ignasis': {
                available: false,
                abilities: {
                    'Invocar ígneos pequeños (Nv 1)': 
                        `Invocas a 2 Espíritus Ígneos Pequeños que perseguirán a un objetivo visible con Alcance hábil de 10 metros. Cada uno al impactar hace 
                        1d4 de daño por fuego y desaparece.
                        Bonus sacerdotal: Puedes invocar 2 Espíritus Ígneos Pequeños adicionales.`,
                    'Seducción calorífica (Nv 1)': 
                        `Calientas a un objetivo con Alcance hábil de 5 metros aumentando su libido, las pruebas de carisma relacionadas con seducción 
                        hacia el objetivo se harán con Ventaja.
                        Bonus sacerdotal: Podrás bendecir a otro objetivo, otorgándole bonificación de +1 en pruebas de carisma durante 10 minutos.`,
                    'Protección de Ignasis (Nv 1)': 
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 15 minutos, el objetivo sufrirá la mitad inferior de daño por fuego, 
                        además ganará resistencia al los niveles 2 de calor y al frío.
                        Bonus sacerdotal: Siempre que el objetivo sufra daño por fuego, lanza una moneda, si gana el daño recibido será anulado.`,
                    'Invocar ígneo malhumorado (Nv 2)': 
                        `Invocas un Espíritu Ígneo Malhumorado que persigue lentamente a un objetivo con Alcance hábil de 20 metros, al hacer contacto 
                        con el objetivo, el espíritu estalla en un rango de un metro infligiendo 2d4 de daño de fuego.
                        Bonus sacerdotal: Aumenta el Alcance hábil a 30 metros y el daño a 3d4.`,
                    'Manos ardientes (Nv 2)': 
                        `Bendices a un objetivo con Alcance hábil de 5 metros, las palmas de las manos del objetivo se vuelven inmunes al fuego y se 
                        encienden en llamas durante 5 minutos infligiendo 1d4 de daño de fuego por contacto.
                        Bonus sacerdotal: Puedes escoger un objetivo adicional. Los objetivos pueden activar y desactivar las llamas a placer.`,
                    'Invocar ígneo pegajoso (Nv 3)': 
                        `Invocas un Espíritu Ígneo Pegajoso que se adhiere a una superficie con Alcance hábil de 10 metros por 5 minutos, 
                        inflige 1d4 de daño de fuego por contacto por turno.
                        Bonus sacerdotal: Puedes invocar a 2 Espíritus Ígneos Pegajosos adicionales.`,
                    'Envolver en llamas (Nv 3)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros, el objetivo maldito se verá envuelto en llamas durante un minuto infligiéndole 
                        1d8 de daño por fuego por turno.
                        Bonus sacerdotal: Puedes concentrarte para mantener el objetivo envuelto en una bola de fuego aumentando el daño a 1d12 por turno.`,
                    'Fiesta de espíritus ígneos (Nv 4)': 
                        `Invocas 4 Espíritus Ígneos Pequeños, 2 Espíritus Igneos Malhumorados y 3 Espíritus Ígneos Pegajosos.
                        Bonus sacerdotal: Invocas un Espíritu Ígneo Fiestero el cual anima a los demás espíritus ígneos aumentando el daño que hacen en 2 
                        y doblando el alcance de tus Espíritus Ígneos durante 10 minutos.`,
                    'Ira pasional de Ignasis (Nv 5)': 
                        `Te invade la ira de Ignasis hacia Mastus, tú y tu equipamiento ganan inmunidad al fuego al mismo tiempo que te envuelves en 
                        llamas infligiendo 1d10 de daño por fuego por contacto durante 10 minutos. Una vez, durante la duración del milagro podrás lanzar 
                        una explosión de fuego proveniente de ti de 4 metros de radio infligiendo 2d10 de daño por fuego.
                        Bonus sacerdotal: Una vez, podrás disparar un potente rayo por fuego de 2d20 de daño de fuego a un objetivo con Alcance hábil de 20 metros.`,
                }
            },

            'Xermis': {
                available: false,
                abilities: {
                    'El hambre es poder (Nv 1)': 
                        `Bendices a un objetivo con Alcance hábil de 10 metros durante una hora, si el objetivo presenta Hambruna, sus efectos negativos 
                        se remueven y obtiene una bonificación de +1 en todas las características.
                        Bonus sacerdotal: La bonificación aumenta a +3.`,
                    'Descanso provisional (Nv 1)': 
                        `Bendices a un objetivo con Alcance hábil de 5 metros, simulas los efectos de un descanso corto en el objetivo (No restaura puntos de milagro). 
                        El objetivo recupera 1d4 de vida o magia.
                        Bonus sacerdotal: Puedes tener un objetivo extra. También puedes escoger recuperar salud mental.`,
                    'Transferir nutrientes (Nv 1)': 
                        `Transfieres los Nutrientes de un objetivo emisor a otro receptor, ambos deben estar en un Alcance hábil de 5 metros, genera cierto 
                        ardor a los involucrados.
                        Bonus sacerdotal: Puedes bendecir al objetivo emisor para protegerlo de los efectos negativos por Hambruna por las próximas 24 horas.`,
                    'El cansancio no importa (Nv 2)': 
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos se volverán inmunes a los efectos negativos por 
                        Cansancio por las próximas 6 horas.
                        Bonus sacerdotal: Al lanzar el milagro, remueves los Contadores de cansancio de los objetivos y les añades 2 horas de sueño.`,
                    'Drenar resistencia (Nv 2)': 
                        `Escoges a dos objetivos con Alcance hábil de 5 metros, transfieres hasta 3 puntos de constitución de un objetivo a otro durante 5 minutos. 
                        Si el objetivo emisor ve su constitución reducida a 0 o menos, cae inconsciente Luchando por su vida.
                        Bonus sacerdotal: La constitución robada aumenta a 5 y puedes distribuirla a un objetivo adicional.`,
                    'Dulce sueño (Nv 3)': 
                        `Bendices a un objetivo dormido con Alcance hábil de 5 metros haciendo que tenga sueños gratificantes, por cada hora que duerma luego del 
                        lanzamiento del milagro restaurará 1 de salud mental.
                        Bonus sacerdotal: La curación mental aumenta a 2 por hora y lo vuelve inmune al siguiente ataque psíquico.`,
                    'Cansar criatura (Nv 3)': 
                        `Secretamente maldices a un objetivo con Alcance hábil de 10 metros, le arrebatas todas sus horas de sueño y le 
                        añades 6 contadores de cansancio.
                        Bonus sacerdotal: Puedes maldecir a objetivos indefinidos.`,
                    'Mandar a dormir (Nv 4)': 
                        `Bendices hasta a 5 objetivos con Alcance hábil de 10 metros, luego de 30 segundos, los objetivos bendecidos caen en un profundo 
                        sueño de hasta 8 horas, el objetivo recupera 2 de vida adicionales por cada hora que duerma.
                        Bonus sacerdotal: Puedes aumentar la curación por hora a 3. Si tu objetivo es uno solo, puedes hacerlo dormir por 48 horas.`,
                    'Agotamiento de Xermis (Nv 5)': 
                        `Maldices a un grupo de objetivos con Alcance hábil de 20 metros, los objetivos malditos obtienen una desmejora en su 
                        constitución de -5 durante una 10 minutos. Los objetivos que presenten una constitución con 0 o menos caerán inconscientes Luchando por su vida.
                        Bonus sacerdotal: La desmejora aumenta a -7 y las pruebas de todo tipo los objetivos malditos se hacen con Desventaja.`,
                }
            },

            'Cromastelia': {
                available: false,
                abilities: {
                    'Ralentización temporal (Nv 1)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros, el objetivo ve reducida en 30% su velocidad de movimiento durante 2 minutos.
                        Bonus sacerdotal: El objetivo va a requerir 2 turnos para llevar a cabo una sola acción.`,
                    'Reducir metabolismo (Nv 1)': 
                        `Reduces el metabolismo de un ser vivo con Alcance hábil 5 metros haciendo que sus nutrientes otorguen una hora extra sin poder comer.
                        Bonus sacerdotal: Si el objetivo ha comido o bebido las últimas 24 horas, rebobinas los Nutrientes para simular que el objetivo acaba de comer.`,
                    'Rebobinar objeto (Nv 1)': 
                        `Rebobinas un objeto con Alcance hábil de 5 metros, el objeto se moverá por el espacio viajando atrás en el tiempo 
                        durante un minuto. Puedes cancelar el rebobinado en cualquier momento.
                        Bonus sacerdotal: Al rebobinar el objeto, puedes hacer que sus demás piezas o fragmentos lo hagan también.`,
                    'Detransformar objeto (Nv 2)': 
                        `Rebobinas un objeto con Alcance hábil de 10 metros para transformarlo a un estado pasado tan antiguo como desees.
                        Bonus sacerdotal: Podrás controlar el objeto transformado telequinéticamente en un radio de 10 metros durante 5 minutos..`,
                    'Aceleración corporal (Nv 2)': 
                        `Aceleras a un ser vivo con Alcance hábil de 5 metros haciendo que restaure 1 de vida cada 15 segundos durante 3 minutos. (Curación total de 12)
                        Bonus sacerdotal: Si el objetivo posee enfermedades, sus células se aceleran hasta morir, curándolo.`,
                    'Rebobinar criatura (Nv 3)': 
                        `Haces que un objetivo vivo con Alcance hábil de 10 metros retroceda en el tiempo por hasta 15 segundos.
                        Bonus sacerdotal: Puedes rebobinar partes específicas del cuerpo del objetivo en lugar de rebobinar su cuerpo completo.`,
                    'Conceder rebobinado (Nv 3)': 
                        `Bendices un objeto y un objetivo que estén con Alcance hábil de 5 metros, tanto tú como el objetivo podrán rebobinar el objeto en un 
                        intervalo máximo de 10 segundos. Siempre que el objeto sea rebobinado, el objeto ganará protección a ser rebobinado por esa cantidad de 
                        tiempo. El efecto dura 2 minutos.
                        Bonus sacerdotal: Ademas de poder rebobinar el objeto, también podrán acelerarlo.`,
                    'Vacío temporal (Nv 4)': 
                        `Te bendices a ti y hasta a 5 objetivos visibles con Alcance hábil de 10 metros, Astramasten entra en un vacío temporal que dura 30 segundos.
                         El tiempo en Astramasten transcurrirá un 25% más despacio a exepción de ti y os objetivos benditos.
                        Bonus sacerdotal: Al lanzar el milagro generas una burbuja de 20 metros de radio, los recuerdos de los no-objetivos dentro de la burbuja durante 
                        el milagro son borrados. Además podrás ver las futuras acciones de los no-objetivos dentro de la burbuja.`,
                    'Velocidad divina (Nv 5)': 
                        `Bendices a un objetivo con Alcance hábil de  5 metros, el objetivo bendito obtiene una increíble velocidad sin precedentes. 
                        Siempre que el objetivo realice una acción hará una prueba de constitución CD2, si la supera podrá realizar otra acción aumentando 
                        así la dificultad de la siguiente prueba en 1 y así sucesivamente hasta que falle, cuando eso suceda la bendición se termina. 
                        Si el objetivo llega a superar el CD11 cae inconsciente al terminar el milagro.
                        Bonus sacerdotal: Las pruebas de constitución se hacen con Ventaja.`,
                }
            },

            'Cortémulo': {
                available: true,
                abilities: {
                    'Sondear mente (Nv 1)': 
                        `Ingresas en la mente de un ser con Alcance hábil de 10 metros en busca de un conocimiento en concreto infligiéndole 1d4 de daño psíquico. 
                        Sufres una cantidad de daño psíquico dependiendo de la complejidad de la mente del objetivo. 
                        Si el objetivo es un dios, el daño recibido es mortal.
                        Bonus sacerdotal: El daño infligido aumenta a 2d4. Haz una Prueba de salvación (sabiduría) CD10 para evitar el daño psíquico recibido.`,
                    'Enseñanza divina (Nv 1)': 
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 10 minutos, el objetivo bendito recibe un aumento a su agilidad mental, 
                        lo que le proporciona una bonificación de +1 en pruebas de sabiduría e inteligencia.
                        Bonus sacerdotal: Las pruebas de sabiduría e inteligencia se harán con Ventaja.`,
                    'Luz guía (Nv 1)': 
                        `Invocas una luz que puedes mover a voluntad o fijarla en algún objeto o ser con Alcance hábil de 5 metros para que lo acompañe durante 15 minutos.
                        Bonus sacerdotal: Puedes aumentar la potencia de la luz para encandilar a quienes la vean. Los objetivos encantilados hacen una 
                        Prueba de salvación (constitución) CD15 para evitar perder su siguiente turno.`,
                    'Apuñalar mente (Nv 2)': 
                        `Atacas la mente del objetivo con Alcance hábil de 10 metros causándole 1d6 + modificador de sabiduría de daño psíquico.
                        Bonus sacerdotal: El daño base aumenta a 2d6.`,
                    'Escuchar pensamientos (Nv 2)': 
                        `Secretamente bendices a de un objetivo con Alcance hábil de 5 metros durante 5 minutos, el objetivo gana la capacidad de leer mentes 
                        de cualquier criatura con Alcance hábil de 10 metros.
                        Bonus sacerdotal: El objetivo podrá manipular el rumbo de los pensamientos de los objetivos dentro del mismo rango.`,
                    'Desempolvar traumas (Nv 3)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros, el objetivo se ve obligado a pensar en traumas del pasado recibiendo 
                        2 de daño psíquico por turno (se acumula).
                        Bonus sacerdotal: Los traumas son transmitidos a ti, lo que te permite usarlos como mejor te plazca.`,
                    'Arrebato divino (Nv 3)': 
                        `Maldices a un objetivo Alcance hábil de 10 metros, el objetivo olvida un conocimiento a tu eleccion durante 2 minutos.
                        Bonus sacerdotal: Haz una prueba de sabiduría CD10, si ganas, puedes arrebatarle un conocimiento extra. Aumenta la duración a 5 minutos.`,
                    'Corrección mental (Nv 4)': 
                        `Manipula la mente del objetivo con Alcance hábil de 10 metros pudiendo inculcarle recuerdos falsos por los siguientes 20 minutos.
                        Bonus sacerdotal: La duración del efecto pasa a tu libre elección, pudiendo ser permanente y el milagro obtiene un tiempo de recarga de una semana.`,
                    'Visión de Cortémulo (Nv 5)': 
                        `Bendices a un grupo de objetivos a de 2 metros a la redonda de tí, los seres benditos obtienen un entendimiento sobrenatural de su entorno, 
                        ganando así la capacidad de ver a través de la materia física y comprender las características de cualquier cosa dentro de su rango de visión 
                        durante 5 minutos.
                        Bonus sacerdotal: Se forma una burbuja invisible de 20 metros de radio a partir de tu ubicación, serás capaz de ver el futuro dentro de la burbuja.`,
                }
            },
            'Mamma': {
                available: true,
                abilities: {
                    'Comprensión de lengua silvestre (Nv 1)': 
                        `Bendices a un grupo de objetivos con Alcance hábil de 3 metros, los objetivos bendecidos ganan la capacidad de hablar con los animales durante 10 minutos.
                        Bonus sacerdotal: Además, ganan la habilidad de hablar con las plantas y la duración se extiende a 30 minutos.`,
                    'Cura de Mamma (Nv 1)': 
                        `Restauras 1d6 de vida a una criatura con Alcance hábil de 5 metros.
                        Bonus sacerdotal: Haz una prueba de sabiduría CD15 si ganas, curarás todas las enfermedades de la criatura.`,
                    'Amansar animal (Nv 1)': 
                        `Bendices a un animal o bestia para obligarlo abandonar pensamientos violentos con Alcance hábil de 10 metros durante 10 minutos.
                        Bonus sacerdotal: Si el animal es pequeño o mediano, haz una prueba de sabiduría de CD15, si ganas, el animal seguirá tus órdenes por una hora.`,
                    'Sentidos de la naturaleza (Nv 2)': 
                        `Te enlazas con un animal o planta con Alcance hábil de 10 metros durante 10 minutos, mientras permanezcas enlazado, podrás ver, escuchar 
                        y sentir lo mismo que el objetivo.
                        Bonus sacerdotal: El alcance aumenta a 30 metros, la duración a 30 minutos y los objetivos posibles a 3.`,
                    'Metamorfosis animal (Nv 2)': 
                        `Puedes convertirte en un animal por hasta 2 horas ganando así todas sus habilidades, debes haber consumido alguna parte del animal en la última 
                        hora para poder transformarte en él. Si la transformación es más grande que tu, se adaptará a tu tamaño.
                        Bonus sacerdotal: Si alguna de las características del animal superase una de las tuyas, tu característica se igualará durante la transformación. 
                        La restricción de tamaño ya no existe.`,
                    'Control natural (Nv 3)': 
                        `Durante 5 minutos ganas el poder de mandar órdenes a los elementos naturales como raíces, plantas, espinas, venenos y animales 
                        pequeños y medianos con Alcance hábil de 15 metros.
                        Bonus sacerdotal: La duración aumenta a 20 minutos. Si tratas de controlar un animal grande haz una prueba de sabiduría CD15.`,
                    'Persecución de la naturaleza (Nv 3)': 
                        `Maldices a un objetivo con Alcance hábil 10 metros durante 5 minutos, el objetivo maldito será perseguido y atacado por todo ser vivo a 
                        50 metros o menos de él.
                        Bonus sacerdotal: Durante el milagro, podrás enlazarte con cualquier ser vivo a 50 metros o menos del objetivo.`,
                    'Luchar por la vida (Nv 4)': 
                        `Puedes lanzar este hechizo solo si una criatura acaba de morir a 5 metros o menos de ti. Resucitas a la criatura haciendo que sus partes 
                        perdidas regresen a su cuerpo y restaurando un tercio superior de su vida.
                        Bonus sacerdotal: El objetivo resucitado recupera toda su salud y obtiene un turno extra inmediatamente después de usar el milagro.`,
                    'Invocar titanes extintos (Nv 5)': 
                        `Invocas a un Mamut Anciano de 5 metros de altura, 40 de constitución y 30 de fuerza para que luche por ti durante 15 minutos.
                        Bonus sacerdotal: Además, invocas una Anomalepididae de 10 metros de largo, 1 metro de altura, 20 de constitución, 15 de fuerza y Veneno de 
                        1d6 por turno, y un Quebrantahuesos de 3 metros de altura, 25 de destreza y 15 de constitución.`,
                }
            },

            "Kor'Ronzo": {
                available: false,
                abilities: {
                    'Extraer arma (Nv 1)': 
                        `Extraes un arma de la armería de Kor'Ronzo a tu elección, el arma permanecerá físicamente por hasta 10 minutos, puede ser traspasada 
                        y usada por cualquier persona. Las armas a distancia rellenan su munición de la armería de Kor'Ronzo automáticamente.
                        Bonus sacerdotal: El arma invocada obtiene una bonificación de +3 al daño.`,
                    "Afiladora de Kor'Ronzo (Nv 1)": 
                        `Bendices hasta 4 objetivos con Alcance hábil de 5 metros, los objetivos benditos ven sus armas, armaduras y municiones reparadas.
                        Bonus sacerdotal: Las armas, armaduras y municiones afectadas aumentan su armadura en 1 y daño en 2.`,
                    'Extraer munición (Nv 1)': 
                        `Extraes hasta 3 municiones de cualquier tipo de la armería de Kor'Ronzo (ignéo, gélido, eléctrico, pesado o perforante) y las colocas en tus manos. 
                        La munición desaparece luego de impactar a un objetivo.
                        Bonus sacerdotal: Los ataques que usen las municiones invocadas se hacen con Ventaja.`,
                    'Lluvia de cuchillas (Nv 2)': 
                        `Invocas una lluvia de cuchillas afiladas que causan hasta 1d8 de daño repartido como desees entre cualquier cantidad de objetivos 
                        con Alcance hábil de 5 metros.
                        Bonus sacerdotal: Aumenta el alcance a 10 metros y las cuchillas se ensanchan al clavarse en los enemigos causándoles Hemorragia por 
                        cada cuchilla impactada.`,
                    'Hambre de guerra (Nv 2)': 
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros durante 12 horas, mientras los objetivos benditos estén en combate, 
                        los efectos negativos por Hambruna se eliminan.
                        Bonus sacerdotal: Los objetivos obtienen una bonificación de +1 en pruebas de fuerza y destreza mientras tengan Hambruna.`,
                    'Cárcel de acero (Nv 3)': 
                        `Maldices a un objetivo con Alcance hábil de 5 metros, invocas una jaula hecha enteramente de barrotes de acero para encerrar 
                        al objetivo durante 5 minutos.
                        Bonus sacerdotal: Puedes manipular el tamaño de la jaula tanto como desees.`,
                    'Deteriorar acero (Nv 3)': 
                        `Deterioras una arma, armadura, munición u otro objeto metálico con Alcance hábil de 5 metros reduciendo su daño en 2 y armadura en 1.
                        Bonus sacerdotal: El objeto deteriorado se desintegra totalmente.`,
                    'Extraer arma divina (Nv 4)': 
                        `Extraes una de dos armas divinas de la armería de Kor'Ronzo en tus manos. La silenciadora, un espada/espadón que evita el lanzamiento de 
                        hechizos y milagros por un minuto a todo aquel que corte. La reflectora, un escudo que refleja todos los hechizos que recibe. La invocación dura 10 minutos.
                        Bonus sacerdotal: Puedes invocar ambas armas divinas y aumenta su duración a 20 minutos.`,
                    "Abrir armería de Kor'Ronzo (Nv 5)": 
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos benditos ganan la capacidad de poder materializar todo tipo 
                        de armas provenientes de la armería de Kor'Ronzo tanto como lo deseen por una hora. Además obtienen una bonificación de +3 en fuerza, 
                        destreza y constitución.
                        Bonus sacerdotal: Los dos mejores guerreros de la historia son invocados de forma etérea para que luchen por ti. Los objetivos pueden 
                        materializar copias de La silenciadora y La reflectora.`,
                }
            },

            'Pármidas': {
                available: true,
                abilities: {
                    'Redención del débil (Nv 1)': 
                        `Puedes lanzar este milagro sólo si el objetivo a 5 metros o menos de ti falló una prueba de cualquier tipo. El objetivo obtiene 
                        una intento extra. Sólo funciona en fallos de acciones justas y justificadas.
                        Bonus sacerdotal: El intento extra siempre acertará.`,
                    'Grillete de los rebeldes (Nv 1)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros, invocas un pesado y etéreo grillete sujeto al cuello del objetivo 
                        reduciendo su velocidad de movimiento, nado y alcance de salto a la mitad por un minuto.
                        Bonus sacerdotal: El grillete se vuelve tan pesado que imposibilita que el objetivo camine, nade o salte.`,
                    'Protección contra críticos (Nv 1)': 
                        `Bendices a los objetivos a 2 metros o menos de ti, el siguiente impacto crítico que sufran los objetivos se convertirá en ataques normales.
                        Bonus sacerdotal: Los impactos críticos evitados pasan a ser fallos.`,
                    'Compartir condena (Nv 2)': 
                        `Invocas una cadena etérea de 5 hasta metros que puede atar a dos seres u objetos durante 5 minutos con Alcance hábil de 5 metros.
                        Bonus sacerdotal: El tamaño de la cadena y el Alcance hábil aumenta a 10 metros, además podrás alargar y contraer la cadena a placer luego de invocarla.`,
                    'Retribución de agujas (Nv 2)': 
                        `Maldices a los objetivos dentro de un área de 2 metros de radio con Alcance hábil de 10 metros, cada vez que los objetivos malditos 
                        realicen una acción dañina o perjudicial para alguien, unas agujas brotan de él hacia adentro infligiendo 1d4 de daño.
                        Bonus sacerdotal: El daño que infligen los objetivos malditos se le es devuelto.`,
                    'Invocar campana de la verdad (Nv 3)': 
                        `Invocas una campana que flota y puedes mover a voluntad en un radio de 10 metros de ti durante 10 minutos. La campana resonará 
                        cada vez que alguien mienta dentro de 5 metros a la redonda de esta.
                        Bonus sacerdotal: Aquellos que mientan frente la campana, verán su ubicación, intenciones y características revelados ante ti.`,
                    'Invocar campana de las trampas (Nv 3)': 
                        `Invocas una campana que flota y puedes mover a voluntad en un radio de 10 metros de ti durante 10 minutos. La campana resonará 
                        cada vez que detecte una trampa dentro de su rango de 5 metros a la redonda de esta. También funciona con las trampas cometidas en juegos.
                        Bonus sacerdotal: La trampa será revelada ante todo aquel dentro del rango de la campana.`,
                    'Igualdad indiscriminada (Nv 4)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros, unas cadenas etéreas brotan de él y se atan a todo ser que esté a 3 metros o 
                        menos del objetivo original y así sucesivamente hasta encadenar a 5 objetivos por 10 minutos. Los daños infligidos a cualquiera de los 
                        objetivos encadenados se dividen entre ellos como lo decida el agresor.
                        Bonus sacerdotal: El daño que sufre cualquiera de los objetivos encadenados se comparte en su totalidad al resto de encadenados.`,
                    'Pena capital de Pármidas (Nv 5)': 
                        `Maldices a un objetivo con Alcance hábil de 15 metros por 4 minutos. Invocas una guillotina atérea anclada al punto más vital del 
                        objetivo, la maldición no puede ser rota, acabada la cuenta atrás la guillotina se activa arrebatándole la vida al objetivo sin 
                        posibilidad a ser reanimado o resucitado. Puedes cancelar la cuenta atrás para prevenir la activación de la guillotina.
                        Bonus sacerdotal: El tiempo de activación de la guillotina pasa a ser indefinido, puedes activarla en cualquier momento. Mientras 
                        el objetivo permanezca bajo la guillotina, responderá con la verdad a todas las preguntas.`,
                }
            },

            'Fustus': {
                available: false,
                abilities: {
                    'Ligereza gravitacional (Nv 1)': 
                        `Bendices a un objetivo con Alcance hábil de 5 metros. Durante 5 minutos, puedes modificar la gravedad del objetivo aumentándola o 
                        reduciéndola a la mitad, aumentando o disminuyendo así su capacidad de salto y velocidad de movimiento a la mitad.
                        Bonus sacerdotal: Aumenta la duración a 10 minutos, puedes hacer que el objetivo propague la bendición al establecer contacto con cualquier cosa.`,
                    'Escudo atmosférico (Nv 1)': 
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 10 minutos, creas una atmósfera en forma de escudo que protege al 
                        objetivo anulando el siguiente daño elemental recibido y rompiendo el escudo.
                        Bonus sacerdotal: Cada vez que el escudo anule daño elemental, haz una prueba de salvación (sabiduría) CD10 para evitar que el escudo se rompa.`,
                    'Vulnerar atmósfera (Nv 1)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros durante 5 minutos, siempre que el objetivo reciba daño elemental recibirá 1d4 
                        de daño de adicional de ese elemento.
                        Bonus sacerdotal: El daño infligido pasa a ser de 1d6 + modificador de sabiduría.`,
                    'Levitación de Fustus (Nv 2)': 
                        `Bendices a un objetivo con Alcance hábil 5 metros durante 5 minutos, el objetivo podrá levitar y moverse libremente 
                        por el espacio sin ninguna limitación.
                        Bonus sacerdotal: Adicionalmente puedes maldecir a un objetivo con Alcance hábil de 10 metros para impedir que se despegue 
                        del suelo por la misma duración.`,
                    'Anclar objeto (Nv 2)': 
                        `Maldices un objeto inanimado con Alcance hábil de 20 metros para anclarlo en el espacio por 3 minutos, el objeto será 
                        inamovible hasta que termine el milagro.
                        Bonus sacerdotal: Puedes maldecir a 2 objetos adicionales y la duración aumenta a 10 minutos.`,
                    'Direccionar gravedad (Nv 3)': 
                        `Bendices a un objetivo con Alcance hábil de 10 metros durante 5 minutos, puedes cambiar la dirección de la gravedad del cuerpo del objetivo.
                        Bonus sacerdotal: Puedes tener un objetivo adicional, puedes hacer que los objetivos controlen su propia dirección gravitatoria.`,
                    'Anclar criatura (Nv 3)': 
                        `Maldices a un objetivo viviente con Alcance hábil de 10 metros para anclarlo en el espacio por 2 minutos, el objetivo no podrá 
                        moverse ni ser movido bajo ningún concepto, solo podrá respirar y ejercer sus 5 sentidos.
                        Bonus sacerdotal: Aumenta la duración a 5 minutos, podrás anclar totalmente al objetivo deteniéndo totalmente su cuerpo y organismo.`,
                    'Vacío espacial (Nv 4)': 
                        `Creas un vacío absoluto diminuto con Alcance hábil de 10 metros, toda cosa material a 2 metros o menos del vacío absoluto es atraída 
                        rotundamente hacia el vacío, los objetos y seres quedan atrapados imposibilitando su movilización. Tú no serás afectado por el vacío absoluto.
                        Bonus sacerdotal: El alcance del hechizo aumenta a 20 metros y el alcance del vacío absoluto a 5 metros.`,
                    'Uno con la tormenta (Nv 5)': 
                        `Te conviertes en una tormenta eléctrica y ganas la capacidad de levitar durante 10 minutos mojando a los objetivos que desees, en ese tiempo 
                        tus acciones se reemplazan por las siguientes: Chispa de Fustus: inflige 2d10 de daño eléctrico a un objetivo y 1d4 de daño eléctrico a las 
                        criaturas mojadas a 3 metros o menos del objetivo original. Viento de Fustus: una fuertísima ráfaga de viento que hace 2d15 de daño contundente 
                        por viento a un enemigo. Granizo de Fustus: disparas una lluvia de granizo que inflige 1d6 de daño por hielo a todos los objetivos en una zona 
                        de 4 metros de radio. Todos con un Alcance hábil de 20 metros.
                        Bonus sacerdotal: Una vez, podrás lanzar Grito de Fustus: un trueno colosal que inflige 4d10 de daño eléctrico a un objetivo. El alcance de todos 
                        los hechizos de Fustus se doblan.`,
                }
            },

            'Vermidón': {
                available: false,
                abilities: {
                    'Caminata de Vermidón (Nv 1)': 
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos ganan Caminata acuática durante 20 minutos 
                        con posibilidad de anular la bendición en cualquier momento si así lo permites.
                        Bonus sacerdotal: Los objetivos aumentarán su velocidad de movimiento un 30% al caminar sobre el agua.`,
                    'Bendición de Vermidón (Nv 1)': 
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos ganan Respiración acuática por 5 minutos.
                        Bonus sacerdotal: Otorgas a los objetivos +1 en todas sus características.`,
                    'Invocar conchas marinas (Nv 1)': 
                        `Invocas 7 afiladas y resistentes conchas marinas de 5 centímetros de radio con Alcance hábil de 5 metros, puedes 
                        agruparlas y combinarlas como mejor prefieras.
                        Bonus sacerdotal: Al invocarlas puedes arrojarlas infligiendo 1d2 de daño cada una con un Alcance hábil de 10 metros.`,
                    'Invocar piraña de Vermidón (Nv 2)': 
                        `Invocas una Piraña de Vermidón que flota en el aire con Alcance hábil de 5 metros y que seguirá tus órdenes por los siguientes 
                        10 minutos antes de desaparecer. Las pirañas tienen 5 de cosntitución y al morder infligen 1d4 de daño. Al morir, las pirañas no desaparecen.
                        Bonus sacerdotal: Puedes invocar 2 Pirañas de Vermidón extras.`,
                    'Sonar de Vermidón (Nv 2)': 
                        `Liberas unas ondas de sonido imperceptibles que te permitirán percibir en su totalidad el entorno circundante a 30 metros de ti durante 1 minuto.
                        Bonus sacerdotal: Puedes hacer que el ruido resuene en las mentes de los objetivos que escogas, infligiendo 2 de daño psíquico cada turno.`,
                    'Invocar tentáculo de medusa (Nv 3)': 
                        `Un tentáculo de medusa de hasta 10 metros sale disparado en línea recta desde cualquier parte de tu cuerpo. El tentáculo envenena 
                        al primer objetivo que toque otorgándole Parálisis parcial durante 2 minutos.
                        Bonus sacerdotal: Puedes disparar un tentáculo adicional o en su defecto, disparar uno solo que inflige Parálisis por la misma duración.`,
                    'Escudo acuífero (Nv 3)': 
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 3 minutos, los siguientes 2 ataques que sufra el objetivo serán totalmente 
                        absorbidos por el escudo acuífero.
                        Bonus sacerdotal: En cualquier momento puedes remover el escudo y concentrarlo en un ataque de 1d6 de daño cortante o perforante en la 
                        dirección objetivo con un Acance hábil de 5 metros.`,
                    'Prisión de agua (Nv 4)': 
                        `Maldices a un objetivo con Alcance hábil de 10 metros, envuelves al objetivo en una bola de agua de la que no podrá escapar durante 2 minutos.
                        Bonus sacerdotal: Puedes reducir la capacidad pulmonar del objetivo a 0 segundos.`,
                    'Instancia de Vermidón (Nv 5)': 
                        `Bendices todo el terreno a 20 metros a tu alrededor durante 10 minutos, toda la materia física se convierte en agua que conserva su 
                        figura original. Te bendices a tí y hasta a 5 objetivos para otorgarles Respiración acuática y Movimiento libre bajo el agua.
                        Bonus sacerdotal: De ti brotan 4 tentáculos estirables de hasta 10 metros de largo que puedes controlar libremente, los tentáculos 
                        poseen ventosas afiladas que hacen 1 de daño por contacto.`,
                }
            },

            'Shika': {
                available: true,
                abilities: {
                    'Apaciguar mente (Nv 1)': 
                        `Calmas la mente de un objetivo con Alcance hábil de 10 metros alejándolo de pensamientos violentos por 5 minutos y curándolo 
                        de Irracionalidad. Cura su salud mental al mínimo estable.
                        Bonus sacerdotal: Extiende la duración a 15 minutos y adicionalmente le vuelve inmune a ataques psíquicos por ese mismo tiempo.`,
                    'Limpiar maldición (Nv 1)': 
                        `Rompes las maldiciones y bendiciones a tu elección de los objetivos dentro de un radio de 3 metros con Alcance hábil de 5 metros.
                        Bonus sacerdotal: Los objetivos ganan protección contra todo tipo de maldiciones y contra las bendiciones removidas por las próximas 2 horas.`,
                    'Fuerza sagrada (Nv 1)': 
                        `Liberas una fuerza sagrada que empuja a los objetivos ubicados frente a ti, el milagro tiene un alcance cónico máximo de 7 metros.
                        Bonus sacerdotal: Una vez realizado el milagro puedes concentrarte para mantener la fuerza sagrada y repeler a los enemigos que 
                        se acerquen por hasta 5 minutos.`,
                    'Plegaria sanadora (Nv 2)': 
                        `Escoges a un objetivo con Alcance hábil de 10 metros y le realizas una curación de 1d6 + modificador de sabiduría a la vida o a la salud mental.
                        Bonus sacerdotal: El objetivo se vuelve inmune al siguiente daño físico o psíquico que reciba. La curación se aplica tanto para la 
                        vida como a la salud mental.`,
                    'Círculo sanador (Nv 2)': 
                        `Convocas un círculo sanador de 2 metros de radio a tu alrededor que cura a los objetivos que eligas durante un minuto. 
                        Los objetivos se curan 2 de vida cada 15 segundos que pasen dentro del círculo (8 de vida por persona).
                        Bonus sacerdotal: Puedes concentrarte para extender la duracion del círculo a 3 minutos (24 de vida por persona).`,
                    '(Nv 3)': 
                        ``,
                    '(Nv 3)': 
                        ``,
                    '(Nv 4)': 
                        ``,
                    '(Nv 5)': 
                        ``,
                }
            },

            'Zergamin': {
                available: true,
                abilities: {
                    'Agilidad de Zergamin (Nv 1)': 
                        `Duplica la distancia de salto y velocidad de movimiento de los objetivos dentro de un radio de 2 metros de tí.
                        Poder sacerdotal: Los objetivos obtienen una bonificación de +1 en pruebas de destreza.`,
                    'Visión de Zergamin (Nv 1)': 
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos benditos aumentan su visión en la oscuridad 
                        en 20 metros y su visión en oscuridad total en 3 metros.
                        Bonus sacerdotal: El aumento de visión se dobla, además podrás ver objetivos invisibles.`,
                    'Rastrear origen (Nv 1)': 
                        `Haces objetivo al fragmento o pieza de un objeto o ser que debes tocar, sus piezas o fragmentos faltantes se revelan ante ti durante 
                        5 minutos siempre y cuando se encuentren a 100 metros o menos de tu ubicación.
                        Bonus sacerdotal: El alcance de la revelación aumenta a 300 metros y la duración a 10 minutos.`,
                    'Seguir rastro (Nv 2)': 
                        `Observas una huella o rastro de algo o alguien, haz una prueba de sabiduría CD10, si ganas se te revelará la dirección a la que 
                        fue el objetivo en referencia al rastro.
                        Bonus sacerdotal: Si pierdes la prueba de sabiduría, obtienes otra oportunidad (una vez).`,
                    'Trampolín de aire (Nv 2)': 
                        `Invocas un trampolín de aire circular de un metro de radio dentro con Alcance hábil de 5 metros. Una vez invocado podrás 
                        movilizarlo una sola vez, el trampolín amortigua las caídas y permanece activo por 5 minutos.
                        Bonus sacerdotal: Puedes invocar un trampolín adicional además de poder moverlos libremente durante su tiempo de vida.`,
                    'Metamorfosear estructura (Nv 3)': 
                        `Alteras una pared, barricada o estructura deformándola con Alcance hábil de 10 metros para que sea escalable por 5 minutos.
                        Bonus sacerdotal: Los objetivos a 2 metros o menos de tí obtienen una bonificación de +1 en pruebas relacionadas con escalar.`,
                    'Esconder presencia (Nv 3)': 
                        `Bendices a los objetivos a 3 metros a la redonda de ti, los objetivos bendecidos ven su olor ocultado, sus ruidos mitigados 
                        a la mitad e invisibilidad ante criaturas a más de 10 metros de distancia.
                        Bonus sacerdotal: Los objetivos ven sus ruidos totalmente silenciados, se vuelven totalmente invisibles y son protegidos por 
                        habilidades de detección.`,
                    'Sondear área (Nv 4)': 
                        `Sondeas un área de 200 metros a la redonda de tí, percibes a todos los seres vivos dentro del área y se te es revelada su ubicación por 5 minutos.
                        Bonus sacerdotal: El área sondeada aumenta a 500 metros y el tiempo de revelación aumenta a 10 minutos.`,
                    'Visión terramórfica (Nv 5)': 
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros durante 10 minutos, los objetivos obtienen la capacidad de poder verse a sí 
                        mismos llevando a cabo las tareas y movimientos exactos para lograr su cometido de manera impecable. Los ataques de los objetivos siempre 
                        acertarán a aquellos objetivos visibles, además tendrán el derecho de realizar tiradas de ataque para comprobar impactos críticos.
                        Bonus sacerdotal: Los ataques dirigidos a los objetivos benditos se hacen con Desventaja y por cada ataque fallido hacia ellos harán una prueba 
                        de destreza CD15, para realizar un contraataque.`,
                }
            },
        };
    }

    getGods(){
        return this.gods;
    }
}

export default GodService