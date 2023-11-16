class GodService{
    constructor(){
        this.gods = {
            'Mastus': {
                available: false,
                abilities: {
                    'Restaurar magia (Nv 1)':
                        `Restauras 1d6 de magia de un objetivo con Alcance hábil de 5 metros.
                        Bonus por clérigo: La recuperación de magia aumenta a 2d6 y el próximo hechizo del objetivo no gastará maná (solo hechizos con costo de maná fijo).`,
                    'Pizca del caos (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 5 metros para que ataque a un objetivo al azar dentro de su alcance en su siguiente ataque.
                        Bonus por clérigo: Lanza una moneda, si ganas, el objetivo se volverá Irracional por 1 minuto.`,
                    'Rayo del caos (Nv 1)':
                        `Disparas un rayo que hace 1d6 de daño sobrenatural a un objetivo con Alcance hábil de 10 metros.
                        Bonus por clérigo: Puedes hacer que el daño provocado restaure esa misma cantidad de maná o vida a ti o a un objetivo a 5 metros de ti.`,
                    'Mover cometa (Nv 2)':
                        `Obligas a un cometa que se dirija hacia un lugar con Alcance hábil de 10 metros. El meteorito al impactar inflige un 2d4 de daño contundente por fuego en un área circular de 2 metros de radio del lugar del impacto.
                        Bonus por clérigo: Puedes lanzar un cometa adicional.`,
                    'Esencia de caos (Nv 2)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros durante 2 minutos, siempre que el objetivo maldito lance un hechizo o milagro sufrirá aleatoriamente uno de los siguientes efectos. 30 segundos de Ceguera, un minuto de Parálisis parcial, 1d4 de daño físico, 1d4 de daño psíquico.
                        Bonus por clérigo: Añade los siguientes efectos aleatorios: devolución del daño o efectos negativos, el hechizo o milagro no sucede, el objetivo se vuelve Irracional por 2 minutos.`,
                    'Borrado de memoria (Nv 3)':
                        `Borras las memorias de los últimos 5 minutos de hasta 2 objetivos con Alcance hábil de 10 metros.
                        Bonus por clérigo: La cantidad de posibles de objetivos pasa a ser ilimitada.`,
                    'Desfile de los caidos (Nv 4)':
                        `Reanimas a todo cadáver dentro de un área de 5 metros a tu alrededor para que luchen por ti durante 3 minutos.
                        Bonus por clérigo: Aumenta la duración a 6 minutos. Aquellos que murieron allí y carecen de cuerpo físico aparecerán de forma etérea para luchar.`,
                    'Sembrar el caos (Nv 5)':
                        `Maldices a todas las criaturas a 20 metros o menos de ti durante 10 minutos, los objetivos malditos se vuelven Irracionales. Al lanzar el milagro puedes escoger volverte Irracional por ese mismo tiempo, si lo haces, todo tu daño infligido se doblará mientras permanezcas en ese estado.
                        Bonus por clérigo: Podrás escoger a 5 objetivos para protegerlos de la Irracionalidad. Los objetivos malditos se vuelven Irracionales permanentemente. Si decides volverte Irracional, el efecto sobre ti tendrá una duración de 10 minutos y tu daño infligido se triplicará.`,
                }
            },

            'Ignasis': {
                available: false,
                abilities: {
                    'Invocar ígneo pequeño (Nv 1)':
                        `Invocas a un Espíritu Ígneo Pequeños que perseguirá a un objetivo visible con Alcance hábil de 10 metros. Al impactar inflige 1d4 de daño por fuego y desaparece.
                        Bonus por clérigo: Puedes invocar 2 Espíritus Ígneos Pequeños adicionales.`,
                    'Seducción calorífica (Nv 1)':
                        `Secretamente calientas a un objetivo con Alcance hábil de 5 metros aumentando su libido durante 2 minutos. Las pruebas de carisma relacionadas con seducción hacia el objetivo se harán con Ventaja.
                        Bonus por clérigo: Podrás bendecir a otro objetivo, otorgándole bonificación de +1 en pruebas de carisma durante 10 minutos.`,
                    'Protección de Ignasis (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 5 minutos, el objetivo sufrirá la mitad inferior de daño por fuego, además ganará resistencia al los niveles 2 de calor y al frío.
                        Bonus por clérigo: Siempre que el objetivo sufra daño por fuego, lanza una moneda, si gana el daño recibido será anulado.`,
                    'Invocar ígneo malhumorado (Nv 2)':
                        `Invocas un Espíritu Ígneo Malhumorado que persigue lentamente a un objetivo a 10 metros de ti, al hacer contacto con el objetivo, el espíritu estalla en un rango de un metro infligiendo 2d4 de daño de fuego en el área.
                        Bonus por clérigo: Aumenta el radio de la explosión a 2 metros y el daño a 3d4.`,
                    'Envolver en llamas (Nv 2)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, el objetivo maldito se verá envuelto en llamas durante un minuto infligiéndole 1d6 de daño por fuego por turno.
                        Bonus por clérigo: La duración aumenta a 3 minutos y el daño 2d4 por turno.`,
                    'Invocar ígneo pegajoso (Nv 3)':
                        `Invocas un Espíritu Ígneo Pegajoso que se adhiere a una superficie a 10 metros o menos de ti por 5 minutos, inflige 1d4 de daño de fuego por contacto por turno.
                        Bonus por clérigo: Puedes invocar un Espíritus Ígneos Pegajosos adicional. La duración aumenta a 10 minutos.`,
                    'Fiesta de espíritus ígneos (Nv 4)':
                        `Invocas 3 Espíritus Ígneos Pequeños, 2 Espíritus Igneos Malhumorados y 2 Espíritus Ígneos Pegajosos.
                        Bonus por clérigo: Invocas un Espíritu Ígneo Fiestero el cual anima a los demás espíritus ígneos aumentando el daño que hacen en 2 y doblando el alcance de tus Espíritus Ígneos durante 10 minutos.`,
                    'Ira pasional de Ignasis (Nv 5)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros. La ira de Ignasis hacia Mastus invade al objetivo haciendo que él y su equipamiento ganen inmunidad al fuego al mismo tiempo que se envuelve en llamas infligiendo 1d10 de daño por fuego por contacto durante 10 minutos. Una vez, durante la duración del milagro podrá lanzar una explosión de fuego proveniente de él con 4 metros de radio infligiendo 2d10 de daño por fuego.
                        Bonus por clérigo: Una vez, podrá disparar un potente rayo por fuego de 2d20 de daño de fuego a un objetivo con Alcance hábil de 20 metros.`,
                }
            },
            
            'Xermis': {
                available: false,
                abilities: {
                    'El hambre es poder (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 10 metros durante 6 horas, si el objetivo presenta Hambruna, sus efectos negativos se remueven.
                        Bonus por clérigo: Mientras el objetivo tenga Hambruna, obtendrá una bonificación de +2 en fuerza y destreza.`,
                    'Descanso provisional (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros, simulas los efectos de un descanso corto en el objetivo para restaurar sus habilidades (No restaura puntos de milagro).
                        Bonus por clérigo: Curas al objetivo en 1d6 a vida o a la salud mental.`,
                    'Transferir nutrientes (Nv 1)':
                        `Transfieres hasta 6 Nutrientes de un objetivo emisor a otro receptor, ambos deben estar en un Alcance hábil de 5 metros, genera cierto ardor a los involucrados.
                        Bonus por clérigo: En vez de eso, puedes maldecir al objetivo emisor para arrebatarle todos sus nutrientes e infligirle 1d6 de daño.`,
                    'El cansancio no importa (Nv 2)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos se volverán inmunes a los efectos negativos por Cansancio por las próximas 6 horas.
                        Bonus por clérigo: Al lanzar el milagro, remueves los Contadores de cansancio de los objetivos y les añades 2 horas de sueño.`,
                    'Drenar resistencia (Nv 2)':
                        `Escoges a dos objetivos con Alcance hábil de 5 metros, transfieres hasta 3 puntos de constitución de un objetivo a otro durante 5 minutos. Si el objetivo emisor ve su constitución reducida a 0 o menos, cae inconsciente Luchando por su vida.
                        Bonus por clérigo: La constitución robada aumenta a 6 y puedes distribuirla a un objetivo adicional.`,
                    'Cansar criatura (Nv 3)':
                        `Secretamente maldices a un objetivo con Alcance hábil de 10 metros, le arrebatas todas sus horas de sueño y le añades 6 contadores de cansancio.
                        Bonus por clérigo: Puedes maldecir a objetivos indefinidos. Los objetivos sufren 1d8 de daño psíquico.`,
                    'Mandar a dormir (Nv 4)':
                        `Bendices hasta a 5 objetivos con Alcance hábil de 10 metros, luego de 30 segundos, los objetivos bendecidos caen en un profundo sueño de hasta 8 horas.
                        Bonus por clérigo: Si tu objetivo es uno solo, puedes hacer que caiga inconsciente Luchando por su vida.`,
                    'Agotamiento de Xermis (Nv 5)':
                        `Maldices a un grupo de objetivos con Alcance hábil de 20 metros, los objetivos malditos obtienen una desmejora en su constitución de -5 durante una 10 minutos. Los objetivos que presenten una constitución con 0 o menos caerán inconscientes Luchando por su vida.
                        Bonus por clérigo: La desmejora aumenta a -7 y las pruebas de todo tipo los objetivos malditos se hacen con Desventaja.`,
                }
            },

            'Cromastelia': {
                available: false,
                abilities: {
                    'Ralentización temporal (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, el objetivo ve reducida en 30% su velocidad de movimiento durante un minuto.
                        Bonus por clérigo: El objetivo va a requerir 2 turnos para llevar a cabo una sola acción.`,
                    'Reducir metabolismo (Nv 1)':
                        `Reduces el metabolismo de un ser vivo con Alcance hábil 5 metros haciendo que sus nutrientes otorguen una hora extra sin poder comer.
                        Bonus por clérigo: Si el objetivo ha comido o bebido las últimas 24 horas, rebobinas los Nutrientes para simular que el objetivo acaba de comer.`,
                    'Rebobinar objeto (Nv 1)':
                        `Rebobinas un objeto con Alcance hábil de 5 metros, el objeto se moverá por el espacio viajando atrás en el tiempo durante un minuto. Puedes cancelar el rebobinado en cualquier momento.
                        Bonus por clérigo: Al rebobinar el objeto, puedes hacer que sus demás piezas o fragmentos lo hagan también.`,
                    'Detransformar objeto (Nv 2)':
                        `Rebobinas un objeto con Alcance hábil de 10 metros para transformarlo a un estado pasado tan antiguo como desees.
                        Bonus por clérigo: Podrás controlar el objeto transformado telequinéticamente en un radio de 10 metros durante 5 minutos..`,
                    'Rebobinar criatura (Nv 2)':
                        `Haces que un objetivo vivo con Alcance hábil de 10 metros retroceda en el tiempo por hasta 15 segundos.
                        Bonus por clérigo: Puedes rebobinar partes específicas del cuerpo del objetivo en lugar de rebobinar su cuerpo completo.`,
                    'Conceder rebobinado (Nv 3)':
                        `Bendices un objeto y un objetivo con Alcance hábil de 5 metros, tanto tú como el objetivo podrán rebobinar el objeto en un intervalo máximo de 10 segundos. Siempre que el objeto sea rebobinado, el objeto ganará protección a ser rebobinado por esa cantidad de tiempo. El efecto dura 2 minutos.
                        Bonus por clérigo: Ademas de poder rebobinar el objeto, también podrán acelerarlo.`,
                    'Vacío temporal (Nv 4)':
                        `Te bendices a ti y hasta a 5 objetivos visibles con Alcance hábil de 10 metros, Astramasten entra en un vacío temporal que dura 30 segundos. El tiempo en Astramasten transcurrirá un 25% más despacio a exepción de ti y os objetivos benditos.
                        Bonus por clérigo: Al lanzar el milagro generas una burbuja de 20 metros de radio, los recuerdos de los no-objetivos dentro de la burbuja durante el milagro son borrados. Además podrás ver las futuras acciones de los no-objetivos dentro de la burbuja.`,
                    'Velocidad divina (Nv 5)':
                        `Bendices a un objetivo con Alcance hábil de  5 metros, el objetivo bendito obtiene una velocidad sobrenatural. Siempre que el objetivo realice una acción hará una prueba de constitución CD2, si la supera podrá realizar otra acción aumentando así la dificultad de la siguiente prueba en 1 y así sucesivamente hasta que falle, cuando eso suceda la bendición se termina. Si el objetivo llega a superar el CD8 cae inconsciente al terminar el milagro.
                        Bonus por clérigo: Las pruebas de constitución se hacen con Ventaja. El CD para caer inconsciente aumenta a 11.`,
                }
            },

            'Cortémulo': {
                available: true,
                abilities: {
                    'Sondear mente (Nv 1)':
                        `Ingresas en la mente de un ser con Alcance hábil de 10 metros en busca de un conocimiento en concreto.
                        Bonus por clérigo: Puedes infligir 1d6 de daño psíquico al objetivo.`,
                    'Enseñanza divina (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 10 minutos, el objetivo bendito recibe un aumento a su agilidad mental, lo que le proporciona una bonificación de +1 en pruebas de sabiduría e inteligencia.
                        Bonus por clérigo: Las pruebas de sabiduría e inteligencia se harán con Ventaja.`,
                    'Luz guía (Nv 1)':
                        `Invocas una luz que puedes mover a voluntad o fijarla en algún objeto o ser con Alcance hábil de 5 metros para que lo acompañe durante 15 minutos.
                        Bonus por clérigo: Haces estallar la luz para encandilar a quienes la vean. Los objetivos encantilados hacen una Prueba de salvación (constitución) CD15 para evitar perder su siguiente turno.`,
                    'Apuñalar mente (Nv 2)':
                        `Atacas la mente del objetivo con Alcance hábil de 10 metros causándole 1d6 + modificador de sabiduría de daño psíquico.
                        Bonus por clérigo: El daño base aumenta a 2d6.`,
                    'Escuchar pensamientos (Nv 2)':
                        `Secretamente bendices a de un objetivo con Alcance hábil de 5 metros durante 5 minutos, el objetivo gana la capacidad de leer mentes de cualquier criatura con Alcance hábil de 10 metros.
                        Bonus por clérigo: El usuario podrá manipular el rumbo de los pensamientos de los objetivos.`,
                    'Arrebato divino (Nv 3)':
                        `Maldices a un objetivo Alcance hábil de 10 metros durante 2 minutos olvidando un conocimiento a tu elección.
                        Bonus por clérigo: Puedes arrebatarle un conocimiento extra. Aumenta la duración a 5 minutos. Si le arrebatas un solo conocimiento puedes alargar la duración a 10 minutos.`,
                    'Corrección mental (Nv 4)':
                        `Manipula la mente del objetivo con Alcance hábil de 10 metros pudiendo inculcarle recuerdos falsos por los siguientes 20 minutos.
                        Bonus por clérigo: La duración del efecto pasa a tu libre elección, pudiendo ser permanente.`,
                    'Visión de Cortémulo (Nv 5)':
                        `Bendices a un grupo de objetivos a de 2 metros a la redonda de tí, los seres benditos obtienen un entendimiento sobrenatural de su entorno, ganando así la capacidad de ver a través de la materia física y comprender las características de cualquier cosa dentro de su rango de visión durante 5 minutos.
                        Bonus por clérigo: Se forma una burbuja invisible de 20 metros de radio a partir de tu ubicación, serás capaz de ver el futuro dentro de la burbuja.`,
                }
            },

            "Kor'Ronzo": {
                available: true,
                abilities: {
                    'Extraer arma (Nv 1)':
                        `Extraes un arma de la Armería de Kor'Ronzo a tu elección, el arma permanecerá físicamente por hasta 10 minutos, puede ser traspasada y usada por cualquier persona. Las armas a distancia rellenan su munición de la armería de Kor'Ronzo automáticamente.
                        Bonus por clérigo: Las armas te guían, por lo que tus tiradas de ataque con las armas de la Armería de Kor'Ronzo se harán con Ventaja.`,
                    "Afiladora de Kor'Ronzo (Nv 1)":
                        `Bendices hasta 4 armaduras, armas o herramientas de acero o metal con Alcance hábil de 5 metros, los objetos benditos se reparan.
                        Bonus por clérigo: Las armas, armaduras y municiones afectadas aumentan su armadura en 1 y daño en 2.`,
                    'Lluvia de cuchillas (Nv 1)':
                        `Invocas 8 cuchillas afiladas que puedes disparar causando 1d2 de daño perforante cada una con Alcance hábil de 5 metros. Las cuchillas al impactar desaparecen.
                        Bonus por clérigo: Aumenta el alcance a 10 metros y las cuchillas se ensanchan al clavarse en los enemigos causándoles Hemorragia de 1d2 por turno por cada cuchilla impactada.`,
                    'Extraer munición (Nv 2)':
                        `Extraes hasta 3 municiones de cualquier tipo de la Armería de Kor'Ronzo (ignéo, gélido, eléctrico, pesado o perforante) y las colocas en tus manos. La munición desaparece luego de impactar a un objetivo.
                        Bonus por clérigo: Puedes disparar las municiones con un Alcance hábil de 20 metros.`,
                    'Hambre de guerra (Nv 2)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros durante 12 horas, mientras los objetivos benditos estén en combate, los efectos negativos por Hambruna se eliminan.
                        Bonus por clérigo: Los objetivos obtienen una bonificación de +2 en pruebas de fuerza y destreza mientras tengan Hambruna.`,
                    'Deteriorar acero (Nv 3)':
                        `Deterioras una arma, armadura, munición u otro objeto metálico con Alcance hábil de 5 metros reduciendo su daño en 2 y armadura en 1.
                        Bonus por clérigo: El objeto deteriorado se desintegra totalmente.`,
                    'Extraer arma divina (Nv 4)':
                        `Extraes una de dos armas divinas de la Armería de Kor'Ronzo en tus manos. La silenciadora, un espada/espadón que evita el lanzamiento de hechizos y milagros por un minuto a todo aquel que corte. La reflectora, un escudo que refleja todos los hechizos y milagros que recibe. La invocación dura 10 minutos.
                        Bonus por clérigo: Puedes invocar ambas armas divinas y aumenta su duración a 20 minutos. Las armas te guían por lo que tus ataques con las armas de la Armería de Kor'Ronzo se harán con Ventaja.`,
                    "Abrir armería de Kor'Ronzo(Nv 5)":
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos benditos ganan la capacidad de poder materializar todo tipo de armas no-divinas provenientes de la Armería de Kor'Ronzo tanto como lo deseen por una 10 minutos. Además obtienen una bonificación de +3 en fuerza, destreza y constitución.
                        Bonus por clérigo: El mejor guerrero de la historia hace aparición de forma etérea para luchar por ti. Los objetivos pueden materializar copias de La silenciadora y La reflectora.`,
                }
            },

            'Mamma': {
                available: true,
                abilities: {
                    'Comprensión de lengua silvestre (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 3 metros, los objetivos benditos ganan la capacidad de hablar con los animales durante 10 minutos.
                        Bonus por clérigo: Además, ganan la habilidad de hablar con las plantas y la duración se extiende a una hora.`,
                    'Veneno de Mamma (Nv 1)':
                        `Envenenas a un objetivo con Alcance hábil de 10 metros que le inflige 1d5 de daño por turno.
                        Bonus por clérigo: El daño del veneno aumenta a 2d6.`,
                    'Amansar animal (Nv 1)':
                        `Bendices a un animal o bestia para obligarlo abandonar pensamientos violentos con Alcance hábil de 10 metros durante 10 minutos.
                        Bonus por clérigo: Si el animal es pequeño o mediano, haz una prueba de sabiduría de CD10, si ganas, el animal seguirá tus órdenes por una hora.`,
                    'Sentidos de la naturaleza (Nv 2)':
                        `Te enlazas con un animal o planta con Alcance hábil de 10 metros durante 10 minutos, mientras permanezcas enlazado, podrás ver, escuchar y sentir lo mismo que el objetivo.
                        Bonus por clérigo: Podrás controlar al objetivo siempre y cuando esté en un rango de 20 metros.`,
                    'Metamorfosis animal (Nv 2)':
                        `Puedes convertirte en un animal por hasta 2 horas ganando así todas sus habilidades, debes haber consumido alguna parte del animal en la última hora para poder transformarte en él. Si la transformación es más grande que tu, se adaptará a tu tamaño.
                        Bonus por clérigo: Si alguna de las características del animal superase una de las tuyas, tu característica se igualará durante la transformación. La restricción de tamaño ya no existe.`,
                    'Control natural (Nv 3)':
                        `Durante 5 minutos ganas el poder de dar órdenes a los elementos naturales como raíces, plantas, espinas, venenos y animales pequeños y medianos a 15 metros o menos de ti.
                        Bonus por clérigo: La duración aumenta a 20 minutos. Si tratas de controlar un animal grande haz una prueba de sabiduría CD10.`,
                    'Luchar por la vida (Nv 4)':
                        `Puedes lanzar este milagro solo si una criatura acaba de morir a 5 metros o menos de ti. Resucitas a la criatura haciendo que sus partes perdidas regresen a su cuerpo y dejándolo inconsciente.
                        Bonus por clérigo: El objetivo resucitado recupera la mitad de su salud y gastará su siguiente turno en prepararse para el combate.`,
                    'Invocar titanes extintos (Nv 5)':
                        `Invocas a un Mamut Anciano de 5 metros de altura, 30 de constitución y 30 de fuerza para que luche por ti durante 5 minutos.
                        Bonus por clérigo: Además, invocas una Anomalepididae de 10 metros de largo, 1 metro de altura, 20 de constitución, 20 de fuerza y Veneno de 1d12 por turno, y un Quebrantahuesos de 3 metros de altura, 25 de destreza y 15 de constitución.`,
                }
            },

            'Pármidas': {
                available: true,
                abilities: {
                    'Redención del débil (Nv 1)':
                        `Puedes lanzar este milagro sólo si el objetivo a 5 metros o menos de ti falló una prueba de cualquier tipo. El objetivo obtiene una intento extra. Sólo funciona en fallos de acciones justas y justificadas.
                        Bonus por clérigo: El intento extra siempre acertará.`,
                    'Grillete de los rebeldes (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, invocas un pesado y etéreo grillete sujeto al cuello del objetivo reduciendo su velocidad de movimiento, nado y alcance de salto a la mitad por un minuto.
                        Bonus por clérigo: El grillete se vuelve tan pesado que imposibilita que el objetivo camine, nade o salte.`,
                    'Protección contra críticos (Nv 1)':
                        `Bendices a los objetivos a 2 metros o menos de ti, el siguiente impacto crítico que sufran los objetivos se convertirán en ataques normales.
                        Bonus por clérigo: Los impactos críticos evitados pasan a ser fallos.`,
                    'Compartir condena (Nv 2)':
                        `Invocas una cadena etérea de 5 hasta metros que puede atar a dos seres u objetos durante 5 minutos con Alcance hábil de 5 metros.
                        Bonus por clérigo: El tamaño de la cadena y el Alcance hábil aumenta a 10 metros, además podrás alargar y contraer la cadena a placer luego de invocarla.`,
                    'Retribución de agujas (Nv 2)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, cada vez que el objetivo maldito realice una acción dañina o perjudicial para alguien, sufrirá un pinchazo adentro de él infligiendo 1d4 de daño.
                        Bonus por clérigo: El daño que infligen los objetivos malditos se le es devuelto.`,
                    'Invocar campana de la verdad (Nv 3)':
                        `Invocas una campana que flota y puedes mover a voluntad en un radio de 10 metros de ti durante 10 minutos. La campana resonará cada vez que alguien mienta dentro de 5 metros a la redonda de esta.
                        Bonus por clérigo: Aquellos que mientan frente la campana, verán su ubicación, intenciones y características revelados ante ti.`,
                    'Igualdad indiscriminada (Nv 4)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, unas cadenas etéreas brotan de él y se atan a todo ser que esté a 2 metros o menos del objetivo original encadenando hasta a 5 objetivos por 10 minutos. Los daños infligidos a cualquiera de los objetivos encadenados se dividen entre ellos como lo decida el agresor.
                        Bonus por clérigo: El daño que sufre cualquiera de los objetivos encadenados se comparte en su totalidad al resto de encadenados.`,
                    'Pena capital de Pármidas (Nv 5)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros por 4 minutos. Invocas una guillotina atérea anclada al punto más vital del objetivo, la maldición no puede ser rota. Acabada la cuenta atrás la guillotina se activa arrebatándole la vida al objetivo sin posibilidad a ser reanimado o resucitado. Puedes cancelar la cuenta atrás para prevenir la activación de la guillotina.
                        Bonus por clérigo: El tiempo de activación de la guillotina pasa a ser indefinido, puedes activarla en cualquier momento. Mientras el objetivo permanezca bajo la guillotina, responderá con la verdad a todas las preguntas.`,
                }
            },

            'Vermidón': {
                available: true,
                abilities: {
                    'Caminata de Vermidón (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos ganan Caminata acuática durante 5 minutos con posibilidad de anular la bendición en cualquier momento si así lo permites.
                        Bonus por clérigo: Los objetivos aumentarán su velocidad de movimiento un 30% al caminar sobre el agua.`,
                    'Bendición de Vermidón (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos ganan Respiración acuática por 5 minutos.
                        Bonus por clérigo: Otorgas a los objetivos +1 en todas sus características.`,
                    'Invocar conchas marinas (Nv 1)':
                        `Invocas 5 afiladas y resistentes conchas marinas de 5 centímetros de radio con Alcance hábil de 5 metros, puedes agruparlas y combinarlas como mejor prefieras.
                        Bonus por clérigo: La conchas marinas invocadas aumentan a 7. Al invocarlas puedes arrojarlas infligiendo 1d2 de daño cada una con un Alcance hábil de 10 metros.`,
                    'Invocar piraña de Vermidón (Nv 2)':
                        `Invocas una Piraña de Vermidón que flota en el aire con Alcance hábil de 5 metros y que seguirá tus órdenes por los siguientes 5 minutos antes de desaparecer. Las pirañas tienen 5 de constitución y al morder infligen 1d4 + 2 de daño. Al morir, las pirañas no desaparecen.
                        Bonus por clérigo: Puedes invocar 2 Pirañas de Vermidón adicionales.`,
                    'Escudo acuífero (Nv 2)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 3 minutos, los siguientes 2 ataques que sufra el objetivo serán totalmente absorbidos por el escudo acuífero.
                        Bonus por clérigo: En cualquier momento puedes remover el escudo y concentrarlo en un ataque de 1d6 de daño cortante o perforante en la dirección objetivo con un Acance hábil de 5 metros.`,
                    'Invocar tentáculo de medusa (Nv 3)':
                        `Un tentáculo de medusa de hasta 10 metros sale disparado en línea recta desde cualquier parte de tu cuerpo. El tentáculo envenena al primer objetivo que toque otorgándole Parálisis parcial durante 2 minutos.
                        Bonus por clérigo: Puedes disparar un tentáculo adicional o en su defecto, disparar uno solo que inflige Parálisis por la misma duración.`,
                    'Prisión de agua (Nv 4)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, envuelves al objetivo en una bola de agua de la que no podrá escapar durante 2 minutos.
                        Bonus por clérigo: Puedes reducir la capacidad pulmonar del objetivo a 0 segundos.`,
                    'Estancia de Vermidón (Nv 5)':
                        `Bendices todo el terreno a 20 metros a tu alrededor durante 10 minutos, toda la materia física se convierte en agua que conserva su figura original. Te bendices a tí y hasta a 5 objetivos para otorgarles Respiración acuática y Movimiento libre bajo el agua.
                        Bonus por clérigo: De ti brotan 4 tentáculos estirables de hasta 10 metros de largo que puedes controlar libremente, los tentáculos poseen ventosas afiladas que hacen 1 de daño por contacto.`,
                }
            },

            'Fustus': {
                available: true,
                abilities: {
                    'Ligereza gravitacional (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros. Durante 5 minutos, puedes modificar la gravedad del objetivo aumentándola o reduciéndola a la mitad, aumentando o disminuyendo así su capacidad de salto y velocidad de movimiento a la mitad.
                        Bonus por clérigo: Aumenta la duración a 10 minutos, puedes hacer que el objetivo propague la bendición al establecer contacto con cualquier cosa.`,
                    'Levitación de Fustus (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil 5 metros durante 5 minutos, el objetivo podrá levitar para mantenerse en el aire.
                        Bonus por clérigo: Adicionalmente puedes maldecir a un objetivo con Alcance hábil de 10 metros para impedir que se despegue del suelo por la misma duración.`,
                    'Vulnerar atmósfera (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros durante 5 minutos, siempre que el objetivo reciba daño elemental recibirá 1d4 de daño de adicional de ese elemento.
                        Bonus por clérigo: El daño infligido pasa a ser de 1d6 + modificador de sabiduría. Al maldecir al objetivo le infliges 1d6 de dañor por electricidad.`,
                    'Direccionar gravedad (Nv 2)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 5 minutos, puedes cambiar la dirección de la gravedad del cuerpo del objetivo durante la duración.
                        Bonus por clérigo: Puedes tener un objetivo adicional, puedes hacer que los objetivos controlen su propia dirección gravitatoria.`,
                    'Anclar objeto (Nv 2)':
                        `Maldices un objeto inanimado con Alcance hábil de 20 metros para anclarlo en el espacio por 3 minutos, el objeto será inamovible hasta que termine el milagro.
                        Bonus por clérigo: Puedes maldecir a 2 objetos adicionales y la duración aumenta a 10 minutos.`,
                    'Anclar criatura (Nv 3)':
                        `Maldices a un objetivo viviente con Alcance hábil de 10 metros para anclarlo en el espacio por un minuto, el objetivo no podrá moverse ni ser movido bajo ningún concepto, solo podrá respirar y ejercer sus 5 sentidos.
                        Bonus por clérigo: Podrás anclar totalmente al objetivo deteniéndo totalmente su cuerpo y organismo.`,
                    'Vacío espacial (Nv 4)':
                        `Creas un vacío absoluto diminuto con Alcance hábil de 10 metros, toda cosa material a 2 metros o menos del vacío absoluto es atraída rotundamente hacia el vacío, los objetos y seres quedan atrapados imposibilitando su movilización. Tú eres inmune al vacío absoluto.
                        Bonus por clérigo: Al momento de ser atraídos, los objetivos sufren una cantidad de daño igual a la mitad superior de su constitución + 3.`,
                    'Uno con la tormenta (Nv 5)':
                        `Te conviertes en una tormenta eléctrica y ganas la capacidad de flotar libremente durante 10 minutos, en ese tiempo tus acciones se reemplazan por las siguientes: Chispa de Fustus: inflige 2d10 de daño eléctrico a un objetivo y 1d4 de daño eléctrico a las criaturas mojadas a 3 metros o menos del objetivo original. Viento de Fustus: una fuertísima ráfaga de viento que hace 2d15 de daño contundente por viento a un enemigo. Granizo de Fustus: disparas una lluvia de granizo que inflige 1d6 de daño por hielo a todos los objetivos en una zona de 4 metros de radio. Todos con un Alcance hábil de 20 metros.
                        Bonus por clérigo: Una vez, podrás lanzar Grito de Fustus: un trueno colosal que inflige 4d12 de daño eléctrico a un objetivo. El alcance de todos los hechizos de Fustus se doblan.`,
                }
            },

            'Shika': {
                available: true,
                abilities: {
                    'Apaciguar mente (Nv 1)':
                        `Calmas la mente de un objetivo con Alcance hábil de 10 metros alejándolo de pensamientos violentos por 5 minutos y curándolo de Irracionalidad por ese tiempo.
                        Bonus por clérigo: Extiende la duración a 15 minutos y curas su salud mental al mínimo estable.`,
                    'Purificar cuerpo (Nv 1)':
                        `Rompes las maldiciones y bendiciones a tu elección de los objetivos dentro de un radio de 3 metros con Alcance hábil de 5 metros.
                        Bonus por clérigo: Los objetivos ganan protección contra todo tipo de maldiciones y contra las bendiciones removidas por las próximas 2 horas.`,
                    'Fuerza sagrada (Nv 1)':
                        `Liberas una fuerza sagrada que empuja a los objetivos ubicados frente a ti, el milagro tiene un alcance cónico máximo de 7 metros.
                        Bonus por clérigo: Una vez realizado el milagro puedes concentrarte para mantener la fuerza sagrada y repeler a los enemigos que se acerquen por hasta 5 minutos.`,
                    'Plegaria sanadora (Nv 2)':
                        `Escoges a un objetivo con Alcance hábil de 10 metros y le realizas una curación de 1d6 + modificador de sabiduría a la vida o a la salud mental.
                        Bonus por clérigo: El objetivo se vuelve inmune al siguiente daño físico o psíquico que reciba. La curación se aplica tanto para la vida como a la salud mental.`,
                    'Círculo sanador de Shika (Nv 2)':
                        `Convocas un círculo sanador de 2 metros de radio a tu alrededor que cura a los objetivos que eligas durante un minuto. Los objetivos se curan 2 de vida cada 15 segundos que pasen dentro del círculo (8 de vida por persona).
                        Bonus por clérigo: Puedes concentrarte para extender la duracion del círculo a 3 minutos (24 de vida por persona).`,
                    'Negar ataque (Nv 3)':
                        `Puedes lanzar este milagro cuando una criatura a 10 metros o menos de ti realice una tirada exitosa de ataque. Haz una prueba de sabiduría CD10, para detender en seco al objetivo antes de impactar el golpe, imposibilitando daño alguno.
                        Bonus por clérigo: El ataque siempre será prevenido.`,
                    'Armas abajo (Nv 4)':
                        `Maldices a un grupo de objetivos con Alcance hábil 10 metros, los objetivos malditos sueltan sus armas y se vuelven incapaces de empuñar cualquier tipo de arma por los próximos 2 minutos.
                        Bonus por clérigo: Si te mantienes concentrado, puedes alargar la duración a 5 minutos.`,
                    'Rechazar el dolor (Nv 5)':
                        `Secretamente bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos benditos se vuelven inmunes al daño de todo tipo mientras permanezcas concentrado por hasta 5 minutos. Al terminar el tiempo, puedes infligir todo el daño prevenido de esta manera a un objetivo con Alcance hábil de 20 metros a su vida o salud mental. Si uno de tus objetivos se aleja del alcance, pierde la bendición.
                        Bonus por clérigo: Se restaura la mitad de la salud y magia de los objetivos, aquellos moribundos o inconscientes fuera de combate se levantan listos para continuar su labor.`,
                }
            },

            'Zergamin': {
                available: true,
                abilities: {
                    'Agilidad de Zergamin (Nv 1)':
                        `Duplica la distancia de salto y velocidad de movimiento de los objetivos dentro de un radio de 2 metros de tí durante 2 minutos.
                        Bonus por clérigo: Los objetivos obtienen una bonificación de +2 en pruebas de destreza.`,
                    'Visión de Zergamin (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos benditos aumentan su visión en la oscuridad en 20 metros y su visión en oscuridad total en 3 metros.
                        Bonus por clérigo: El aumento de visión se dobla, además podrán ver objetivos invisibles.`,
                    'Rastrear origen (Nv 1)':
                        `Haces objetivo al fragmento o pieza de un objeto o ser que debes tocar, sus piezas o fragmentos faltantes se revelan ante ti durante 5 minutos siempre y cuando se encuentren a 50 metros o menos de tu ubicación.
                        Bonus por clérigo: El alcance de la revelación aumenta a 100 metros y la duración a 10 minutos.`,
                    'Sondear área (Nv 2)':
                        `Sondeas un área de 50 metros a la redonda de tí, percibes a los seres vivos dentro del área durante 5 minutos descubriendo el número de seres vivos y hacia donde se encuentran.
                        Bonus por clérigo: El área sondeada aumenta a 100 metros y la duración a 10 minutos. Las posiciones de los seres vivos descubiertos se te revelan.`,
                    'Trampolín de aire (Nv 2)':
                        `Invocas un trampolín de aire circular de un metro de radio dentro con Alcance hábil de 5 metros. Una vez invocado podrás movilizarlo una sola vez, el trampolín amortigua las caídas y permanece activo por 5 minutos.
                        Bonus por clérigo: Puedes invocar un trampolín adicional además de poder moverlos libremente durante su tiempo de vida.`,
                    'Metamorfosear estructura (Nv 3)':
                        `Alteras una pared, barricada o estructura deformándola con Alcance hábil de 10 metros para que sea escalable por 5 minutos.
                        Bonus por clérigo: Los objetivos a 2 metros o menos de tí obtienen una bonificación de +2 en pruebas relacionadas con escalar.`,
                    'Esconder presencia (Nv 4)':
                        `Bendices a los objetivos a 3 metros a la redonda de ti, los objetivos benditos obtienen un camuflaje que cambia de color según el entorno de cada objetivo haciéndolos invisibles.
                        Bonus por clérigo: Los objetivos ven sus ruidos totalmente silenciados, sus olores neutralizados y son protegidos por habilidades de detección.`,
                    'Visión terramórfica (Nv 5)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros durante 10 minutos, los objetivos obtienen la capacidad de poder verse a sí mismos llevando a cabo las tareas y movimientos exactos para lograr su cometido de manera impecable. Los ataques de los objetivos siempre acertarán.
                        Bonus por clérigo: Siempre que los objetivos ataquen, lanzan una moneda, si ganan, su ataque será crítico.`,
                }
            },
        };
    }

    getGods(){
        return this.gods;
    }
}

export default GodService;