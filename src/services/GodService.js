class GodService{
    constructor(){
        this.gods = {
            'Mastus': {
                available: false,
                abilities: {
                    'Restaurar magia (Nv 1)':
                        `Restauras 1d8 de magia de un objetivo con Alcance hábil de 5 metros.
                        <br><strong>Bonus por clérigo:</strong> La recuperación de magia aumenta a 2d5 y el próximo hechizo del objetivo no gastará maná (solo hechizos con costo de maná fijo).`,
                    'Pizca del caos (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 5 metros para que ataque a un objetivo al azar dentro de su alcance en su siguiente ataque.
                        <br><strong>Bonus por clérigo:</strong> Lanza una moneda, si ganas, el objetivo se volverá Irracional por 1 minuto.`,
                    'Rayo del caos (Nv 1)':
                        `Disparas un rayo que hace 1d8 de daño sobrenatural a un objetivo con Alcance hábil de 10 metros.
                        <br><strong>Bonus por clérigo:</strong> El daño aumenta a 1d10. Puedes hacer que el daño provocado restaure esa misma cantidad de maná o vida a ti o a un objetivo a 5 metros de ti.`,
                    'Mover cometa (Nv 2)':
                        `Obligas a un cometa que se dirija hacia un lugar con Alcance hábil de 10 metros. El meteorito al impactar inflige un 3d4 de daño contundente por fuego en un área circular de 2 metros de radio del lugar del impacto.
                        <br><strong>Bonus por clérigo:</strong> Puedes lanzar un cometa adicional. Los objetivos que reciban ambos impactos sufrirán Quemadura de 1d6 por turno`,
                    'Esencia de caos (Nv 2)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros durante 2 minutos, siempre que el objetivo maldito vaya a lanzar un hechizo o milagro, antes de ello, sufrirá aleatoriamente uno de los siguientes efectos. 30 segundos de Ceguera, un minuto de Parálisis parcial, 1d6 de daño físico, 1d6 de daño psíquico.
                        <br><strong>Bonus por clérigo:</strong> Añade los siguientes efectos aleatorios: devolución del daño o efectos negativos, el hechizo o milagro no sucede, el objetivo se vuelve Irracional por 2 minutos.`,
                    'Borrado de memoria (Nv 3)':
                        `Borras las memorias de los últimos 5 minutos de hasta 2 objetivos con Alcance hábil de 10 metros.
                        <br><strong>Bonus por clérigo:</strong> La cantidad de posibles de objetivos pasa a ser ilimitada. Si lo deseas, puedes infligir 2d5 de daño psíquico a los afectados.`,
                    'Desfile de los caidos (Nv 4)':
                        `Reanimas a todo cadáver dentro de un área de 5 metros a tu alrededor para que luchen por ti durante 3 minutos.
                        <br><strong>Bonus por clérigo:</strong> Aumenta la duración a 6 minutos. Aquellos que murieron allí y carecen de cuerpo físico aparecerán de forma etérea para luchar.`,
                    'Sembrar el caos (Nv 5)':
                        `Maldices a todas las criaturas a 20 metros o menos de ti durante 10 minutos, los objetivos malditos se vuelven Irracionales. Al lanzar el milagro puedes escoger volverte Irracional por ese mismo tiempo, si lo haces, todo tu daño infligido se doblará mientras permanezcas en ese estado.
                        <br><strong>Bonus por clérigo:</strong> Podrás escoger a 5 objetivos para protegerlos de la Irracionalidad. Los objetivos malditos se vuelven Irracionales permanentemente. Si decides volverte Irracional, el efecto sobre ti tendrá una duración de 10 minutos y tu daño infligido se triplicará.`,
                },
                treats:{
                    'Mandamientos': 
                        `Pondrás a prueba la resistencia de los sistemas ante el caos.<br>
                        No tendrás miedo a volverte Irracional.<br>
                        Tu compulsividad te llevará a hacer cosas sin sentido aparente.<br>`
                }
            },

            'Ignasis': {
                available: false,
                abilities: {
                    'Invocar ígneo pequeño (Nv 1)':
                        `Invocas a un Espíritu Ígneo Pequeños que perseguirá a un objetivo visible con Alcance hábil de 10 metros. Al impactar inflige 1d4 de daño por fuego y desaparece.
                        <br><strong>Bonus por clérigo:</strong> Puedes invocar 2 Espíritus Ígneos Pequeños adicionales.`,
                    'Seducción calorífica (Nv 1)':
                        `Secretamente calientas a un objetivo con Alcance hábil de 5 metros aumentando su libido durante 2 minutos. Las pruebas de carisma relacionadas con seducción hacia el objetivo se harán con Ventaja.
                        <br><strong>Bonus por clérigo:</strong> Podrás bendecir a otro objetivo, otorgándole bonificación de +2 en pruebas de carisma durante 10 minutos.`,
                    'Protección de Ignasis (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 5 minutos, el objetivo sufrirá la mitad inferior de daño por fuego, además ganará resistencia al los niveles 2 de calor y al frío.
                        <br><strong>Bonus por clérigo:</strong> Siempre que el objetivo sufra daño por fuego, lanza una moneda, si gana el daño recibido se recibirá como curación a la salud.`,
                    'Invocar ígneo malhumorado (Nv 2)':
                        `Invocas un Espíritu Ígneo Malhumorado que persigue lentamente a un objetivo a 10 metros de ti, al hacer contacto con el objetivo, el espíritu estalla en un rango de un metro infligiendo 2d4 de daño de fuego en el área.
                        <br><strong>Bonus por clérigo:</strong> Aumenta el radio de la explosión a 2 metros y el daño a 3d4.`,
                    'Envolver en llamas (Nv 2)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, el objetivo maldito se verá envuelto en llamas durante un minuto infligiéndole 1d8 de daño por fuego por turno.
                        <br><strong>Bonus por clérigo:</strong> La duración aumenta a 3 minutos y el daño 2d8 por turno.`,
                    'Invocar ígneo pegajoso (Nv 3)':
                        `Invocas un Espíritu Ígneo Pegajoso que se adhiere a una superficie a 10 metros o menos de ti por 5 minutos, inflige 1d6 de daño de fuego por contacto por turno.
                        <br><strong>Bonus por clérigo:</strong> Puedes invocar a 2 Espíritus Ígneos Pegajosos adicionales. La duración aumenta a 10 minutos.`,
                    'Fiesta de espíritus ígneos (Nv 4)':
                        `Invocas 3 Espíritus Ígneos Pequeños, 2 Espíritus Igneos Malhumorados y 2 Espíritus Ígneos Pegajosos.
                        <br><strong>Bonus por clérigo:</strong> Invocas un Espíritu Ígneo Fiestero el cual anima a los demás espíritus ígneos aumentando el daño que hacen en 2 y doblando el alcance de tus Espíritus Ígneos durante 10 minutos. Al morir estalla en 2d8 de daño en un área de un metro.`,
                    'Ira pasional de Ignasis (Nv 5)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros. La ira de Ignasis hacia Mastus invade al objetivo haciendo que él y su equipamiento ganen inmunidad al fuego al mismo tiempo que se envuelve en llamas infligiendo 1d10 de daño por fuego por contacto durante 10 minutos. Una vez, durante la duración del milagro podrá lanzar una explosión de fuego proveniente de él con 4 metros de radio infligiendo 2d10 de daño por fuego.
                        <br><strong>Bonus por clérigo:</strong> Una vez, podrá disparar un potente rayo de fuego de 2d20 de daño de fuego a un objetivo con Alcance hábil de 20 metros.`,
                },
                treats:{
                    'Mandamientos':
                        `Nunca lastimarás a tus cercanos.<br>
                        Defenderás y consolarás a tus cercanos.<br>
                        El corazón irá primero que la mente.<br>`
                }
            },
            
            'Xermis': {
                available: false,
                abilities: {
                    'El hambre es poder (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 10 metros durante 6 horas, si el objetivo presenta Hambruna, sus efectos negativos se remueven.
                        <br><strong>Bonus por clérigo:</strong> Mientras el objetivo tenga Hambruna, obtendrá una bonificación de +2 en fuerza y destreza.`,
                    'Descanso provisional (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros, simulas los efectos de un descanso corto en el objetivo para restaurar sus habilidades (No restaura puntos de milagro).
                        <br><strong>Bonus por clérigo:</strong> Curas al objetivo en 1d8 a vida o a la salud mental.`,
                    'Transferir nutrientes (Nv 1)':
                        `Transfieres la mitad de los Nutrientes de un objetivo emisor a otro receptor, ambos deben estar en un Alcance hábil de 5 metros. Genera cierto ardor a los involucrados.
                        <br><strong>Bonus por clérigo:</strong> En vez de eso, puedes arrebatarle todos los nutrientes al emisor junto a sus efectos positivos por alimentos e infligirle 1d6 de daño. El objetivo queda Hambriento.`,
                    'El cansancio no importa (Nv 2)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos se volverán inmunes a los efectos negativos por Cansancio por las próximas 12 horas.
                        <br><strong>Bonus por clérigo:</strong> Al lanzar el milagro, descansas a los objetivos y les añades 8 horas de sueño.`,
                    'Drenar resistencia (Nv 2)':
                        `Escoges a dos objetivos con Alcance hábil de 5 metros, transfieres hasta 5 puntos de constitución de un objetivo a otro durante 5 minutos. Si el objetivo emisor ve su constitución reducida a 0 o menos, cae inconsciente Luchando por su vida.
                        <br><strong>Bonus por clérigo:</strong> La constitución robada aumenta a 8 y puedes distribuirla a un objetivo adicional.`,
                    'Cansar criatura (Nv 3)':
                        `Secretamente maldices a un objetivo con Alcance hábil de 10 metros, cansándolo de golpe e infligiéndole Cansancio.
                        <br><strong>Bonus por clérigo:</strong> Puedes maldecir a objetivos indefinidos. Los objetivos sufren 1d8 de daño psíquico.`,
                    'Mandar a dormir (Nv 4)':
                        `Bendices hasta a 5 objetivos con Alcance hábil de 10 metros, luego de 30 segundos, los objetivos bendecidos caen en un profundo sueño de hasta 8 horas.
                        <br><strong>Bonus por clérigo:</strong> Si tu objetivo es uno solo, puedes hacer que caiga inconsciente Luchando por su vida.`,
                    'Agotamiento de Xermis (Nv 5)':
                        `Maldices a un grupo de objetivos con Alcance hábil de 20 metros, los objetivos malditos obtienen una desmejora en su constitución de -5 durante 10 minutos. Los objetivos que presenten una constitución con 0 o menos caerán inconscientes Luchando por su vida.
                        <br><strong>Bonus por clérigo:</strong> La desmejora aumenta a -7 y las pruebas de todo tipo los objetivos malditos se hacen con Desventaja.`,
                },
                treats:{
                    'Mandamientos':
                        `Pondrás el deber por encima del querer.<br>
                        Cero procrastinación.<br>
                        Si nadie puede hacer algo, entonces tu lo harás.<br>`
                }
            },

            'Cromastelia': {
                available: false,
                abilities: {
                    'Ralentización temporal (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, el objetivo realizará ataques mas lentos, ganando así Desventaja.
                        <br><strong>Bonus por clérigo:</strong> El objetivo va a requerir 2 turnos para llevar a cabo una sola acción.`,
                    'Reducir metabolismo (Nv 1)':
                        `Reduces el metabolismo de un ser vivo con Alcance hábil 5 metros doblando el tiempo que puede pasar antes de entrar en Hambruna.
                        <br><strong>Bonus por clérigo:</strong> Si el objetivo ha comido o bebido las últimas 24 horas, antes de que suceda el milagro, rebobinas los Nutrientes para simular que el objetivo acaba de comer.`,
                    'Rebobinar objeto (Nv 1)':
                        `Rebobinas un objeto con Alcance hábil de 5 metros, el objeto se moverá por el espacio viajando atrás en el tiempo durante un minuto. Puedes cancelar el rebobinado en cualquier momento.
                        <br><strong>Bonus por clérigo:</strong> Al rebobinar el objeto, puedes hacer que sus demás piezas o fragmentos lo hagan también.`,
                    'Detransformar objeto (Nv 2)':
                        `Rebobinas un objeto con Alcance hábil de 10 metros para transformarlo a un estado pasado tan antiguo como desees.
                        <br><strong>Bonus por clérigo:</strong> Podrás controlar el objeto transformado telequinéticamente en un radio de 10 metros durante 5 minutos.`,
                    'Rebobinar criatura (Nv 2)':
                        `Haces que un objetivo vivo con Alcance hábil de 10 metros retroceda en el tiempo por hasta 15 segundos.
                        <br><strong>Bonus por clérigo:</strong> Puedes rebobinar partes específicas del cuerpo del objetivo en lugar de rebobinar su cuerpo completo.`,
                    'Conceder rebobinado (Nv 3)':
                        `Bendices un objeto y un objetivo con Alcance hábil de 5 metros, tanto tú como el objetivo podrán rebobinar el objeto en un intervalo máximo de 10 segundos. Siempre que el objeto sea rebobinado, el objeto ganará protección a ser rebobinado por esa cantidad de tiempo. El efecto dura 2 minutos.
                        <br><strong>Bonus por clérigo:</strong> Ademas de poder rebobinar el objeto, también podrán acelerarlo.`,
                    'Vacío temporal (Nv 4)':
                        `Te bendices a ti y hasta a 5 objetivos visibles con Alcance hábil de 10 metros, Astramasten entra en un vacío temporal que dura 30 segundos haciendo que el tiempo transcurra 25% más despacio a exepción de ti y los objetivos benditos.
                        <br><strong>Bonus por clérigo:</strong> Al lanzar el milagro generas una burbuja de 20 metros de radio, los recuerdos de los no-objetivos dentro de la burbuja durante el milagro son borrados. Además podrás ver las futuras acciones dentro de la burbuja.`,
                    'Velocidad divina (Nv 5)':
                        `Bendices a un objetivo con Alcance hábil de  5 metros, el objetivo bendito obtiene una velocidad sobrenatural. Siempre que el objetivo realice una acción hará una prueba de constitución CD2, si la supera podrá realizar otra acción aumentando así la dificultad de la siguiente prueba en 1 y así sucesivamente hasta que falle, cuando eso suceda la bendición se termina. Si el objetivo llega a superar el CD10 cae inconsciente al terminar el milagro.
                        <br><strong>Bonus por clérigo:</strong> Las pruebas de constitución se hacen con Ventaja. El CD para caer inconsciente aumenta a 15.`,
                },
                treats:{
                    'Mandamientos':
                        `Estarás sereno ante la adversidad.<br>
                        Por pesada que sea tu carga, nunca te quejarás ni presumirás.<br>
                        Tomarás las decisiones más lógicas.<br>`
                }
            },

            'Cortémulo': {
                available: true,
                abilities: {
                    'Sondear mente (Nv 1)':
                        `Ingresas en la mente de un ser con Alcance hábil de 10 metros en busca de un conocimiento en concreto.
                        <br><strong>Bonus por clérigo:</strong> Puedes infligir 1d8 de daño psíquico al objetivo.`,
                    'Enseñanza divina (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 10 minutos, el objetivo bendito recibe un aumento a su agilidad mental, lo que le proporciona una bonificación de +2 en pruebas de sabiduría e inteligencia.
                        <br><strong>Bonus por clérigo:</strong> Las pruebas de sabiduría e inteligencia se harán con Ventaja.`,
                    'Luz guía (Nv 1)':
                        `Invocas una luz que puedes mover a voluntad o fijarla en algún objeto o ser con Alcance hábil de 5 metros durante 15 minutos.
                        <br><strong>Bonus por clérigo:</strong> Puedes estallar la luz para encandilar a quienes la vean. Los objetivos afectados hacen una Prueba de salvación (constitución) CD15 para evitar perder su siguiente turno.`,
                    'Apuñalar mente (Nv 2)':
                        `Atacas la mente del objetivo con Alcance hábil de 10 metros causándole 1d8 + modificador de sabiduría de daño psíquico.
                        <br><strong>Bonus por clérigo:</strong> El daño base aumenta a 2d6.`,
                    'Escuchar pensamientos (Nv 2)':
                        `Secretamente bendices a de un objetivo con Alcance hábil de 5 metros durante 5 minutos, el objetivo gana la capacidad de leer mentes de cualquier criatura con Alcance hábil de 10 metros.
                        <br><strong>Bonus por clérigo:</strong> El usuario podrá manipular el rumbo de los pensamientos de los objetivos.`,
                    'Arrebato divino (Nv 3)':
                        `Maldices a un objetivo Alcance hábil de 10 metros durante 2 minutos olvidando un conocimiento o recuerdo a tu elección.
                        <br><strong>Bonus por clérigo:</strong> Puedes arrebatarle un conocimiento extra. Aumenta la duración a 5 minutos. Si le arrebatas un solo conocimiento, alarga la duración a 10 minutos. Puedes infligirle 1d6 de daño psíquico.`,
                    'Corrección mental (Nv 4)':
                        `Manipula la mente del objetivo con Alcance hábil de 10 metros pudiendo inculcarle recuerdos falsos por los siguientes 20 minutos.
                        <br><strong>Bonus por clérigo:</strong> La duración del efecto pasa a tu libre elección, pudiendo ser permanente.`,
                    'Visión de Cortémulo (Nv 5)':
                        `Bendices a un grupo de objetivos a de 2 metros a la redonda de tí, los seres benditos obtienen un entendimiento sobrenatural de su entorno, ganando así la capacidad de ver a través de la materia física y comprender las características de cualquier cosa dentro de su rango de visión durante 5 minutos.
                        <br><strong>Bonus por clérigo:</strong> Se forma una burbuja invisible de 20 metros de radio a partir de tu ubicación, serás capaz de ver el futuro dentro de la burbuja.`,
                },
                treats:{
                    'Mandamientos':
                        `Rechazarás la ignorancia.<br>
                        Si desconoces algo, lo investigarás.<br>
                        Compartirás tus conocimientos.<br>`
                }
            },

            'Mamma': {
                available: true,
                abilities: {
                    'Comprensión de lengua silvestre (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 3 metros, los objetivos benditos ganan la capacidad de hablar con los animales durante 10 minutos.
                        <br><strong>Bonus por clérigo:</strong> Además, ganan la habilidad de hablar con las plantas y la duración se extiende a una hora.`,
                    'Veneno de Mamma (Nv 1)':
                        `Envenenas a un objetivo con Alcance hábil de 10 metros que le inflige 1d5 de daño por turno.
                        <br><strong>Bonus por clérigo:</strong> El daño del veneno aumenta a 2d6.`,
                    'Amansar animal (Nv 1)':
                        `Bendices a un animal o bestia para obligarlo abandonar pensamientos violentos con Alcance hábil de 10 metros durante 10 minutos.
                        <br><strong>Bonus por clérigo:</strong> Si el animal es pequeño o mediano, haz una prueba de sabiduría de CD10, si ganas, el animal seguirá tus órdenes por una hora.`,
                    'Sentidos de la naturaleza (Nv 2)':
                        `Te enlazas con un animal o planta con Alcance hábil de 10 metros durante 10 minutos, mientras permanezcas enlazado, podrás ver, escuchar y sentir lo mismo que el objetivo.
                        <br><strong>Bonus por clérigo:</strong> Podrás controlar al objetivo siempre y cuando sea pequeño o mediano y esté en un rango de 20 metros.`,
                    'Metamorfosis animal (Nv 2)':
                        `Puedes convertirte en un animal por hasta 2 horas ganando así todas sus habilidades, debes haber consumido alguna parte del animal en la última hora para poder transformarte en él. Si la transformación es más grande que tu, se adaptará a tu tamaño.
                        <br><strong>Bonus por clérigo:</strong> Si alguna de las características del animal superase una de las tuyas, tu característica se igualará durante la transformación. La restricción de tamaño ya no existe.`,
                    'Control natural (Nv 3)':
                        `Durante 5 minutos ganas el poder de dar órdenes a los elementos naturales como raíces, plantas, espinas, venenos y animales pequeños y medianos a 15 metros o menos de ti.
                        <br><strong>Bonus por clérigo:</strong> La duración aumenta a 20 minutos. Si tratas de controlar un animal grande haz una prueba de sabiduría CD10.`,
                    'Luchar por la vida (Nv 4)':
                        `Puedes lanzar este milagro solo si una criatura acaba de morir a 5 metros o menos de ti. Resucitas a la criatura haciendo que sus partes perdidas regresen a su cuerpo y dejándolo inconsciente.
                        <br><strong>Bonus por clérigo:</strong> El objetivo resucitado recupera la mitad de su salud y gastará su siguiente turno en prepararse para el combate.`,
                    'Invocar titanes extintos (Nv 5)':
                        `Invocas a un Mamut Anciano de 5 metros de altura, 30 de constitución y 30 de fuerza para que luche por ti durante 5 minutos.
                        <br><strong>Bonus por clérigo:</strong> Además, invocas una Anomalepididae de 10 metros de largo, 1 metro de altura, 20 de constitución, 20 de fuerza y Veneno de 1d12 por turno, y un Quebrantahuesos de 3 metros de altura, 25 de destreza y 15 de constitución.`,
                },
                treats:{
                    'Mandamientos':
                        `No lastimarás ni matarás animales salvo que presenten una amenaza.<br>
                        Al matar animales o plantas, deberás agradecerles.<br>
                        Lucharás por tu vida y por la de tus cercanos.<br>`
                }
            },

            "Kor'Ronzo": {
                available: true,
                abilities: {
                    'Extraer arma (Nv 1)':
                        `Extraes un arma de la Armería de Kor'Ronzo a tu elección, el arma permanecerá físicamente por hasta 10 minutos, puede ser traspasada y usada por cualquier persona. Las armas a distancia rellenan su munición de la armería de Kor'Ronzo automáticamente.
                        <br><strong>Bonus por clérigo:</strong> Las armas te guían, por lo que tus pruebas de ataque con las armas de la Armería de Kor'Ronzo se harán con Ventaja. Puedes hacer desaparecer las armas extraídas en cualquier momento`,
                    "Afiladora de Kor'Ronzo (Nv 1)":
                        `Bendices hasta 4 armaduras, armas o herramientas de acero o metal con Alcance hábil de 5 metros, los objetos benditos se reparan.
                        <br><strong>Bonus por clérigo:</strong> Las armas, armaduras y municiones afectadas aumentan su armadura en 1 y daño en 2.`,
                    'Lluvia de cuchillas (Nv 1)':
                        `Invocas 6 cuchillas afiladas que puedes disparar causando 1d2 de daño perforante cada una con Alcance hábil de 5 metros. Las cuchillas al impactar desaparecen.
                        <br><strong>Bonus por clérigo:</strong> Aumenta las cuchillas a 9 y el alcance a 10 metros y las cuchillas se ensanchan al clavarse en los enemigos causándoles Hemorragia de 1d2 por turno por cada cuchilla impactada.`,
                    'Extraer munición (Nv 2)':
                        `Extraes hasta 3 municiones de cualquier tipo de la Armería de Kor'Ronzo (ignéo, gélido, eléctrico, pesado o perforante) y las colocas en tus manos. La munición desaparece luego de impactar a un objetivo.
                        <br><strong>Bonus por clérigo:</strong> Al extraer las municiones, puedes dispararlas con un Alcance hábil de 20 metros.`,
                    'Hambre de guerra (Nv 2)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros durante 12 horas, mientras los objetivos benditos estén en combate, los efectos negativos por Hambruna se eliminan.
                        <br><strong>Bonus por clérigo:</strong> Los objetivos obtienen una bonificación de +2 en pruebas de fuerza y destreza mientras tengan Hambruna.`,
                    'Deteriorar acero (Nv 3)':
                        `Deterioras una arma, armadura, munición u otro objeto metálico con Alcance hábil de 5 metros reduciendo su daño en 2 y armadura en 1.
                        <br><strong>Bonus por clérigo:</strong> El objeto deteriorado se desintegrará poco a poco, desintegrándose por completo en tu siguiente turno.`,
                    'Extraer arma divina (Nv 4)':
                        `Extraes una de dos armas divinas de la Armería de Kor'Ronzo en tus manos. La silenciadora, un espada/espadón que evita el lanzamiento de hechizos y milagros por un minuto a todo aquel que corte. La reflectora, un escudo que refleja todos los hechizos y milagros que recibe. La invocación dura 10 minutos.
                        <br><strong>Bonus por clérigo:</strong> Puedes invocar ambas armas divinas o la misma dos veces. Aumenta su duración a 20 minutos. Las armas te guían por lo que tus ataques con las armas de la Armería de Kor'Ronzo se harán con Ventaja.`,
                    "Abrir armería de Kor'Ronzo(Nv 5)":
                        `Bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos benditos ganan la capacidad de poder materializar todo tipo de armas no-divinas provenientes de la Armería de Kor'Ronzo tanto como lo deseen por una 10 minutos. Además obtienen una bonificación de +3 en fuerza, destreza y constitución.
                        <br><strong>Bonus por clérigo:</strong> El mejor guerrero de la historia hace aparición de forma etérea para luchar por ti. Los objetivos benditos pueden materializar copias de La silenciadora y La reflectora.`,
                },
                treats:{
                    'Mandamientos':
                        `Harás notar los errores en las acciones de los demás.<br>
                        No dudarás en lastimar ni en matar.<br>
                        Si te insultan o hacen daño, devuelve el doble.<br>`
                }
            },            

            'Pármidas': {
                available: true,
                abilities: {
                    'Redención del débil (Nv 1)':
                        `Puedes lanzar este milagro sólo si el objetivo a 5 metros o menos de ti falló una prueba de cualquier tipo. El objetivo obtiene una intento extra. Sólo funciona en fallos de acciones justas y justificadas.
                        <br><strong>Bonus por clérigo:</strong> El intento extra siempre acertará.`,
                    'Grillete de los rebeldes (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, invocas un pesado y etéreo grillete sujeto a una parte del objetivo a tu elección reduciendo su velocidad de movimiento y alcance de salto a la mitad por un minuto. Si el objetivo está bajo el agua se hundirá.
                        <br><strong>Bonus por clérigo:</strong> El grillete se vuelve tan pesado que imposibilita que el objetivo camine, nade o salte.`,
                    'Protección contra críticos (Nv 1)':
                        `Bendices a los objetivos a 2 metros o menos de ti, los impactos críticos que sufran los objetivos se convertirán en ataques normales durante los siguientes 5 minutos.
                        <br><strong>Bonus por clérigo:</strong> Los impactos críticos evitados pasan a ser fallos.`,
                    'Compartir condena (Nv 2)':
                        `Invocas una cadena etérea de 5 hasta metros que puede atar a dos seres u objetos durante 5 minutos con Alcance hábil de 5 metros.
                        <br><strong>Bonus por clérigo:</strong> El tamaño de la cadena y el Alcance hábil aumenta a 10 metros, además podrás alargar y contraer la cadena a placer luego de invocarla.`,
                    'Retribución de agujas (Nv 2)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, cada vez que el objetivo maldito realice una acción dañina o perjudicial para alguien, sufrirá un pinchazo adentro de él infligiendo 1d4 de daño.
                        <br><strong>Bonus por clérigo:</strong> El daño que infligen los objetivos malditos se le es devuelto. El daño de los pinchazos aumenta a 2d4.`,
                    'Invocar campana de la verdad (Nv 3)':
                        `Invocas una campana que flota y puedes mover a voluntad en un radio de 10 metros de ti durante 10 minutos. La campana resonará cada vez que alguien mienta dentro de 5 metros a la redonda de esta.
                        <br><strong>Bonus por clérigo:</strong> Aquellos que mientan frente la campana, verán su ubicación, intenciones y características revelados ante ti.`,
                    'Igualdad indiscriminada (Nv 4)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, unas cadenas etéreas brotan de él y se atan a todo ser que esté a 2 metros o menos del objetivo original encadenando hasta a 2 objetivos por 10 minutos. Los daños infligidos a cualquiera de los objetivos encadenados se dividen entre ellos como lo decida el agresor.
                        <br><strong>Bonus por clérigo:</strong> El máximo de encadenados aumenta a 5, el daño que sufre cualquiera de los objetivos encadenados se comparte en su totalidad al resto de encadenados.`,
                    'Pena capital de Pármidas (Nv 5)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros por 4 minutos. Invocas una guillotina atérea anclada al punto más vital del objetivo. Esta maldición no puede ser rota. Acabada la cuenta atrás la guillotina se activa arrebatándole la vida al objetivo sin posibilidad a ser reanimado o resucitado. Puedes cancelar la cuenta atrás para prevenir la activación de la guillotina.
                        <br><strong>Bonus por clérigo:</strong> El tiempo de activación de la guillotina pasa a ser indefinido, puedes activarla en cualquier momento. Mientras el objetivo permanezca bajo la guillotina, responderá con la verdad a todas las preguntas.`,
                },
                treats:{
                    'Mandamientos':
                        `Respetarás las normas y te asegurarás de hacerlas respetar.<br>
                        No dudarás en condenar hasta al prójimo más cercano.<br>
                        No tolerarás las injusticias.<br>`
                }
            },

            'Fustus': {
                available: true,
                abilities: {
                    'Ligereza gravitacional (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros. Durante 5 minutos, puedes modificar la gravedad del objetivo aumentándola o reduciéndola a la mitad, aumentando o disminuyendo así su capacidad de salto y velocidad de movimiento a la mitad.
                        <br><strong>Bonus por clérigo:</strong> Aumenta la duración a 10 minutos, puedes hacer que el objetivo propague la bendición al establecer contacto con cualquier cosa.`,
                    'Levitación de Fustus (Nv 1)':
                        `Bendices a un objetivo con Alcance hábil 5 metros durante 5 minutos, el objetivo podrá levitar para mantenerse en el aire.
                        <br><strong>Bonus por clérigo:</strong> Adicionalmente puedes maldecir a un objetivo con Alcance hábil de 10 metros para impedir que levante sus pies del suelo por la misma duración.`,
                    'Vulnerar atmósfera (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros durante 5 minutos, siempre que el objetivo reciba daño elemental recibirá 1d4 de daño de adicional de ese elemento.
                        <br><strong>Bonus por clérigo:</strong> El daño infligido pasa a ser de 1d6 + modificador de sabiduría. Al maldecir al objetivo le infliges 1d6 de dañor por electricidad. Ese daño activa esta misma habilidad.`,
                    'Anclar objeto (Nv 2)':
                        `Maldices un objeto inanimado con Alcance hábil de 20 metros para anclarlo en el espacio por 3 minutos, el objeto será inamovible hasta que tú decidas o termine el milagro.
                        <br><strong>Bonus por clérigo:</strong> Puedes maldecir a 2 objetos adicionales y la duración aumenta a 10 minutos.`,
                    'Direccionar gravedad (Nv 2)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 5 minutos, puedes cambiar la dirección de la gravedad del cuerpo del objetivo durante la duración. No puedes redirigir la gravedad hacia arriba.
                        <br><strong>Bonus por clérigo:</strong> Puedes tener un objetivo adicional, puedes hacer que los objetivos controlen su propia dirección gravitatoria.`,
                    'Anclar criatura (Nv 3)':
                        `Maldices a un objetivo viviente con Alcance hábil de 10 metros para anclarlo en el espacio por un minuto, el objetivo no podrá moverse ni ser movido bajo ningún concepto, solo podrá respirar y ejercer sus 5 sentidos.
                        <br><strong>Bonus por clérigo:</strong> Podrás anclar totalmente al objetivo deteniéndo totalmente su cuerpo y organismo.`,
                    'Vacío espacial (Nv 4)':
                        `Creas un vacío absoluto diminuto con Alcance hábil de 10 metros, toda cosa material a 2 metros o menos del vacío absoluto es atraída rotundamente hacia el vacío, los objetos y seres quedan atrapados imposibilitando su movilización. Tú eres inmune al vacío absoluto.
                        <br><strong>Bonus por clérigo:</strong> Al momento de ser atraídos, los objetivos sufren una cantidad de daño igual a la mitad superior de su constitución + 3. Mientras los objetivos permanezcan atrapados, sufrirán 2d6 de daño por aplastamiento + 1 adicional por cada otro objetivo atrapado.`,
                    'Uno con la tormenta (Nv 5)':
                        `Te conviertes en una tormenta eléctrica y ganas la capacidad de flotar libremente durante 10 minutos, en ese tiempo tus acciones se reemplazan por las siguientes: Chispa de Fustus: inflige 2d10 de daño eléctrico a un objetivo y 1d4 de daño eléctrico a las criaturas mojadas a 3 metros o menos del objetivo original. Viento de Fustus: una fuertísima ráfaga de viento que hace 2d15 de daño contundente por viento a un enemigo. Granizo de Fustus: disparas una lluvia de granizo que inflige 2d4 de daño por hielo a todos los objetivos en una zona de 6 metros de radio. Todos con un Alcance hábil de 20 metros.
                        <br><strong>Bonus por clérigo:</strong> Una vez, podrás lanzar Grito de Fustus: un trueno colosal que inflige 4d12 de daño eléctrico a un objetivo. El alcance de todos los hechizos de Fustus se doblan.`,
                },
                treats:{
                    'Mandamientos':
                        `No desaprovecharás ni jugarás con comida.<br>
                        Ante la duda, te convertirás en el líder.<br>
                        No serás egoísta y buscarás el bien común.<br>`
                }
            },

            'Vermidón': {
                available: true,
                abilities: {
                    'Caminata de Vermidón (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos ganan Caminata acuática durante 5 minutos con posibilidad de anular la bendición en cualquier momento si así lo deseas.
                        <br><strong>Bonus por clérigo:</strong> Los objetivos aumentarán su velocidad de movimiento un 50% al caminar sobre el agua.`,
                    'Bendición de Vermidón (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos ganan Respiración acuática por 5 minutos.
                        <br><strong>Bonus por clérigo:</strong> Otorgas a los objetivos +2 en todas sus características.`,
                    'Invocar conchas marinas (Nv 1)':
                        `Invocas 5 afiladas y resistentes conchas marinas de 5 centímetros de radio con Alcance hábil de 5 metros, puedes agruparlas y combinarlas como mejor prefieras.
                        <br><strong>Bonus por clérigo:</strong> La conchas marinas invocadas aumentan a 7. Al invocarlas puedes arrojarlas infligiendo 1d2 de daño cada una con un Alcance hábil de 10 metros.`,
                    'Invocar piraña de Vermidón (Nv 2)':
                        `Invocas una Piraña de Vermidón que flota en el aire con Alcance hábil de 5 metros y que seguirá tus órdenes por los siguientes 5 minutos antes de morir. Las pirañas tienen 6 de salud y al morder infligen 1d4 + 2 de daño. Al morir, las pirañas no desaparecen.
                        <br><strong>Bonus por clérigo:</strong> Puedes invocar 2 Pirañas de Vermidón adicionales.`,
                    'Escudo acuífero (Nv 2)':
                        `Bendices a un objetivo con Alcance hábil de 5 metros durante 3 minutos, los siguientes 2 ataques que sufra el objetivo serán totalmente absorbidos por el escudo acuífero.
                        <br><strong>Bonus por clérigo:</strong> El escudo puede bloquear hasta 3 ataques. Siempre que el escudo bloquee un ataque puedes remover el escudo y concentrarlo en un ataque de 1d6 de daño cortante o perforante en la dirección objetivo con un Acance hábil de 5 metros.`,
                    'Invocar tentáculo de medusa (Nv 3)':
                        `Un tentáculo de medusa de hasta 10 metros sale disparado en línea recta desde cualquier parte de tu cuerpo. El tentáculo envenena al primer objetivo que toque otorgándole Parálisis parcial durante 2 minutos y le inflige 1d4 de daño perforante.
                        <br><strong>Bonus por clérigo:</strong> Puedes disparar un tentáculo adicional o en su defecto, disparar uno solo que inflige Parálisis por la misma duración.`,
                    'Prisión de agua (Nv 4)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros, envuelves al objetivo en agua durante 2 minutos siendo incapaz de respirar pero sí de moverse.
                        <br><strong>Bonus por clérigo:</strong> Puedes reducir la capacidad pulmonar del objetivo a 0 segundos.`,
                    'Estancia de Vermidón (Nv 5)':
                        `Bendices todo el terreno a 20 metros a tu alrededor durante 10 minutos, toda la materia física se convierte en agua que conserva su figura original. Te bendices a tí y hasta a 5 objetivos para otorgarles Respiración acuática y Movimiento libre bajo el agua.
                        <br><strong>Bonus por clérigo:</strong> De ti brotan 4 tentáculos estirables de hasta 10 metros de largo que puedes controlar libremente, los tentáculos poseen ventosas afiladas que hacen 1 de daño por contacto.`,
                },
                treats:{
                    'Mandamientos':
                        `Serás valiente ante toda adversidad.<br>
                        Manifestarás tus verdaderos sentimientos a todo momento.<br>
                        Esperar siempre será la última opción.<br>`
                }
            },            

            'Shika': {
                available: true,
                abilities: {
                    'Apaciguar mente (Nv 1)':
                        `Calmas la mente de un objetivo con Alcance hábil de 10 metros alejándolo de pensamientos violentos por 5 minutos curándolo de Irracionalidad.
                        <br><strong>Bonus por clérigo:</strong> Extiende la duración a 15 minutos, curas su salud mental al mínimo estable y le restauras 1d6 de salud mental. Los objetivos aumentan a 3.`,
                    'Fuerza sagrada (Nv 1)':
                        `Liberas una fuerza sagrada que empuja a los objetivos ubicados frente a ti, el milagro tiene un alcance cónico máximo de 7 metros.
                        <br><strong>Bonus por clérigo:</strong> Una vez realizado el milagro puedes concentrarte para mantener la fuerza sagrada y repeler a los enemigos que se acerquen por hasta 5 minutos.`,
                    'Purificar cuerpo (Nv 1)':
                        `Bendices hasta a 2 objetivos con 5 metros de Alcance hábil. Eliminas Veneno, Hemorragia, Infeccion y Enfermedades comunes de los objetivos benditos, además rompes las maldiciones y bendiciones a tu elección.
                        <br><strong>Bonus por clérigo:</strong> Los objetivos pasan a ser ilimitados siempre y cuando estén dentro del Alcance hábil. Además ganan protección contra todo tipo de maldiciones y contra las bendiciones removidas por las próximas 2 horas.`,
                    'Plegaria sanadora (Nv 2)':
                        `Escoges a un objetivo con Alcance hábil de 10 metros y le realizas una curación de 1d10 + modificador de sabiduría a la vida o a la salud mental.
                        <br><strong>Bonus por clérigo:</strong> El objetivo se vuelve inmune al siguiente daño físico o psíquico que reciba. La curación se aplica tanto para la vida como a la salud mental.`,
                    'Círculo sanador de Shika (Nv 2)':
                        `Convocas un círculo sanador de 2 metros de radio a tu alrededor que cura a los objetivos que eligas durante un minuto. Los objetivos se curan 2 de vida cada 15 segundos que pasen dentro del círculo (Curación total de 8).
                        <br><strong>Bonus por clérigo:</strong> Puedes concentrarte para extender la duracion del círculo a 3 minutos (Curación total de 24).`,
                    'Negar ataque (Nv 3)':
                        `Puedes lanzar este milagro cuando una criatura a 10 metros o menos de ti realice una prueba exitosa de ataque. Detienes en seco al objetivo antes de impactar el golpe, imposibilitando daño alguno.
                        <br><strong>Bonus por clérigo:</strong> El objetivo no podrá atacar en su siguiente turno.`,
                    'Armas abajo (Nv 4)':
                        `Maldices a un grupo de hasta 3 objetivos con Alcance hábil 10 metros, los objetivos malditos sueltan sus armas y se vuelven incapaces de empuñar cualquier tipo de arma por los próximos 3 minutos.
                        <br><strong>Bonus por clérigo:</strong> Las pruebas de ataques de los objetivos se harán con Desventaja.`,
                    'Rechazar el dolor (Nv 5)':
                        `Secretamente bendices a un grupo de objetivos con Alcance hábil de 10 metros, los objetivos benditos se vuelven inmunes al daño de todo tipo mientras permanezcas concentrado por hasta 5 minutos. Al terminar el tiempo, puedes infligir todo el daño prevenido de esta manera a un objetivo con Alcance hábil de 20 metros a su vida o salud mental. Si uno de tus objetivos se aleja del alcance, pierde la bendición.
                        <br><strong>Bonus por clérigo:</strong> Se restaura la mitad de la salud y magia de los objetivos, aquellos moribundos o inconscientes fuera de combate se levantan listos para continuar su labor.`,
                },
                treats:{
                    'Mandamientos':
                        `Evitarás los conflictos sin arriesgar tu integridad ni la de tus cercanos.<br>
                        Siempre buscarás la comodidad.<br>
                        Buscarás solución a los conflictos.<br>`
                }
            },

            'Zergamin': {
                available: true,
                abilities: {
                    'Alterar equilibrio (Nv 1)':
                        `Maldices a un objetivo con Alcance hábil de 10 metros. El objetivo pierde el equilibrio dándole Desventaja en pruebas de destreza durante 2 minutos.
                        <br><strong>Bonus por clérigo:</strong> Adicionalmente puedes bendecir a un objetivo dentro del mismo alcance, el objetivo bendito obtiene Ventaja en pruebas de destreza. La duración de ambos efectos se alarga a 5 minutos.`,
                    'Visión de Zergamin (Nv 1)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros, los objetivos benditos aumentan su visión en la oscuridad en 20 metros y su visión en oscuridad total en 3 metros.
                        <br><strong>Bonus por clérigo:</strong> El aumento de visión se dobla, además podrán ver objetivos invisibles. Obtendrán una bonificación de +2 en percepción.`,
                    'Rastrear origen (Nv 1)':
                        `Haces objetivo al fragmento o pieza de un objeto o ser que debes tocar, percibirás la dirección de sus piezas o fragmentos faltantes siempre y cuando se encuentren a 50 metros o menos de tu ubicación.
                        <br><strong>Bonus por clérigo:</strong> Las piezas o fragmentos serán visibles para ti a través de las paredes. El alcance de la revelación aumenta a 100 metros y la duración a 10 minutos.`,
                    'Sondear área (Nv 2)':
                        `Sondeas un área de 50 metros a la redonda de tí, percibes a los seres vivos dentro del área descubriendo el número de seres vivos.
                        <br><strong>Bonus por clérigo:</strong> El área sondeada aumenta a 100 metros y la duración a 10 minutos. Las posiciones de los seres vivos sondeados se te revelan.`,
                    'Trampolín de aire (Nv 2)':
                        `Invocas un trampolín de aire circular de un metro de radio dentro con Alcance hábil de 5 metros. Una vez invocado podrás movilizarlo una sola vez, el trampolín amortigua las caídas y permanece activo por 5 minutos.
                        <br><strong>Bonus por clérigo:</strong> Puedes invocar un trampolín adicional además de poder moverlos libremente durante su tiempo de vida.`,
                    'Metamorfosear estructura (Nv 3)':
                        `Alteras una pared, barricada o estructura deformándola con Alcance hábil de 10 metros para que sea escalable por 5 minutos.
                        <br><strong>Bonus por clérigo:</strong> Puedes deformar el terreno, lo que te permite atacar utilizando el entorno como arma.`,
                    'Esconder presencia (Nv 4)':
                        `Bendices a los objetivos a 3 metros a la redonda de ti, los objetivos benditos obtienen un camuflaje que cambia de color según el entorno de cada objetivo haciéndolos invisibles.
                        <br><strong>Bonus por clérigo:</strong> Los objetivos ven sus ruidos totalmente silenciados, sus olores neutralizados y son protegidos por habilidades de detección. Al iniciar una emboscada en este estado, los primeros ataques de cada objetivo bendito hacia los enemigos siempre acertarán`,
                    'Visión terramórfica (Nv 5)':
                        `Bendices a un grupo de objetivos con Alcance hábil de 5 metros durante 10 minutos, los objetivos obtienen la capacidad de poder verse a sí mismos llevando a cabo las tareas y movimientos exactos para lograr su cometido de manera impecable. Los ataques de los objetivos siempre acertarán.
                        <br><strong>Bonus por clérigo:</strong> Siempre que los objetivos ataquen, lanzan una moneda, si ganan, su ataque será crítico.`,
                },
                treats:{
                    'Mandamientos':
                        `Explorarás cada recoveco estés donde estés.<br>
                        Nunca negarás un viaje.<br>
                        Lo desconocido te atraerá.<br>`
                }
            },
        };
    }

    getGods(){
        return this.gods;
    }
}

export default GodService;