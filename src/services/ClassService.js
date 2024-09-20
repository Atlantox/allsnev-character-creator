class ClassService{
    constructor(){
        this.classes = {
            'Guerrero': {
                abilities: {
                    'Golpe fuerte': 
                        `Realizas un potente golpe que inflige 1d5 de daño adicional y un -2 a la precisión. 2 usos por combate.
                        <br><strong>Maestría:</strong> Ya no sufres la desmejora de precisión.`,
                    'Superar límites': 
                        `Si estás fuera de combate y acabas de perder una prueba de fuerza, puedes usar esta habilidad para superar la prueba al costo de que las extremidades que hayas utilizado para la acción, queden inhabilitadas por 10 minutos por sobreesfuerzo.
                        <br><strong>Maestría:</strong> Al terminar la acción haz una Prueba de salvación (constitución) CD10 para evitar el sobreesfuerzo.`,
                    'Sed de violencia': 
                        `Enloqueces por los siguientes 3 turnos, atacando a objetivos cercanos al azar infligiendo 2d3 de daño adicional y con posibilidad de usar habilidades. Requiere Nivel 2 y 1 Punto de habilidad.
                        <br><strong>Maestría:</strong> Si atacas a un aliado, lo atacarás con Desventaja..`,
                    'Golpe temerario': 
                        `Realizas un poderoso y temerario ataque que reduce la durabilidad del arma usada para infligir un dado extra del daño del arma. Se puede combinar con otras habilidades. Requiere Nivel 4 y 1 Punto de habilidad.
                        <br><strong>Maestría:</strong> Lanza una moneda, si ganas, el arma no verá reducida su durabilidad.`,
                },
                treats:{
                    'Dominio del guerrero': 
                        `Domina todo tipo de armas cuerpo a cuerpo y herramientas de fuerza.`,
                    'Torpeza manual': 
                        `Desventaja al usar armas o herramientas de destreza.`,
                },
                subClasses: {
                    'Bárbaro': {
                        abilities: {
                            'Fuerza barbárica': 
                                `Puedes usar armas de dos manos en cada mano con una desmejora de -1 a la precisión. requiere Nivel 5 y 1 Punto de habilidad.
                                <br><strong>Maestría:</strong> Ya no sufrirás la desmejora de precisión.`
                        },
                        treats: {
                            'Torpeza sobrenatural': 
                                `No puede aprender ni lanzar hechizos o milagros.`,
                            'Armadura bárbara': 
                                `Al no llevar armadura, la armadura será igual a su modificador de fuerza -1`,
                            'Incomodidad con armaduras': 
                                `Desventaja en pruebas de ataque al usar armadura`,
                        },
                    },
                    'Mixto': {
                        abilities: {
                            'Adaptabilidad flexible': 
                                `Distribuye hasta 5 puntos de fuerza, destreza o constitución entre esas estadísticas. 
                                La bonificación se mantiene por 10 minutos fuera de combate, o hasta que se termine un combate.
                                <br><strong>Maestría:</strong> Puedes transferir hasta 8 puntos. La duración aumenta a 20 minutos.`
                        },
                        treats: false,
                    },
                },
            },

            'Hechicero': {
                abilities: {
                    'Proyectil de magia pura':
                        `Disparas un proyectil de magia pura con Alcance hábil de 10 metros que inflige 2 x el maná que inviertas en el hechizo de daño sobrenatural. Coste mínimo: 1.
                        <br><strong>Maestría:</strong> Si inviertes 3 o más de maná, lanza una moneda, si ganas, recuperas la mitad inferior del maná invertido.`,
                    'Afinidad mágica (No religioso)':
                        `Al terminar cada combate, recuperas 1 de maná por cada enemigo abatido en el combate (no necesariamente abatido por ti).
                        <br><strong>Maestría:</strong> La recuperación pasa a ser de 2.`,
                },
                treats:{
                    'Dominio del hechicero': `Bonificación de +1 al lanzar hechizos con un báculo. Desmejora de -1 al lanzar hechizos sin un báculo.`,
                    'Conocimiento arcano': `Puedes leer y descifrar pergaminos y escritos rúnicos.`,
                    'Dependencia a los báculos': `Desventaja en pruebas de ataque de fuerza y destreza.`,
                },
                subClasses: false
            },

            'Cazador': {
                abilities: {
                    'Disparo lejano': 
                        `Aumentas el Alcance hábil de tu siguiente disparo en 50%. Dos usos por combate.
                        <br><strong>Maestría:</strong> La penalización por atacar más allá del Alcance hábil de tu siguiente disparo se elimina.`,
                    'Planificar disparo': 
                        `Tu siguiente disparo acertará. Perderás tu siguiente turno. Requiere Nivel 3 y 1 Punto de habilidad.
                        <br><strong>Maestría:</strong> Haz una Prueba de salvación (destreza) CD10 para evitar perder tu siguiente turno.`,
                    'Retroceso intrépido': 
                        `Golpeas a un objetivo dentro de tu alcance cuerpo a cuerpo y te alejas de él según tu velocidad de carrera evitando ataques de oportunidad. Requiere Nivel 4 y 1 Punto de habilidad.
                        <br><strong>Maestría:</strong> El objetivo hace una Prueba de salvación (constitución) CD10 para evitar sufrir Aturdimiento.`,
                    'Ojo de cazador (No religioso)': 
                        `El primer disparo que aciertes en cada combate siempre hará daño máximo.
                        <br><strong>Maestría:</strong> Además tendrá Crítico aumentado en 1.`,
                },
                treats:{
                    'Dominio del cazador': 
                        `Domina todo tipo de armas a distancia.`,
                    'Torpeza física': 
                        `Desventaja al usar armas y herramientas de fuerza.`,
                },
                subClasses: {
                    'Explorador': {
                        abilities: false,
                        treats: {
                            'Dominio del explorador': 
                                `Ventaja en pruebas relacionadas con escalar y seguir rastros.`,
                        },
                    },
                    'Cazador': {
                        abilities: false,
                        treats: {
                            'Dominio del cazador': 
                                `Bonificación de +2 en pruebas de ataque a distancia.`,
                        },
                    },
                },
            },

            'Pícaro': {
                abilities: {
                    'Ojo de pícaro': 
                        `Tus ataques tienen Crítico aumentado en 1.
                        <br><strong>Maestría:</strong> Una vez por combate, si sacas un 15 natural o más en una prueba de ataque, puedes hacer que sea crítico.`,
                    'Oportunidad del error': 
                        `Si fallas una prueba de ataque, puedes usar esta habilidad para hacer otro intento. Un uso por combate. Requiere Nivel 4 y 1 Punto de habilidad.
                        <br><strong>Maestría:</strong> Los usos por combante aumentan a 3.`,
                    'Impacto certero': 
                        `Tu siguiente ataque será crítico asegurado pero su acierto no está garantizado. Un uso por combate. Requiere Nivel 5 y 1 Punto de habilidad.
                        <br><strong>Maestría:</strong> El ataque tendrá una precisión de +2.`,
                    'Golpe fatal (No religioso)': 
                        `Realizas un Ataque furtivo, si aciertas, el resultado del daño final se dobla. Requiere Nivel 6 y 1 Punto de habilidad.
                        <br><strong>Maestría:</strong> El cálculo del daño final pasa a ser de x 2.5 redondeado hacia arriba.`,
                },
                treats:{
                    'Dominio del pícaro': 
                        `Domina el uso de armas y herramientas de destreza.`,
                    'Debilucho': 
                        `Desventaja en pruebas de constitución.`,
                },
                subClasses: {
                    'Ladrón': {
                        abilities: false,
                        treats: {
                            'Dominio del ladrón': 
                                `Ventaja en pruebas relacionadas con hurto, sigilo y escalar.`,
                        },
                    },
                    'Asesino': {
                        abilities: false,
                        treats: {
                            'Dominio del asesino': 
                                `Ventaja en pruebas de ataque con dagas.`,
                        },
                    },
                },
            },

            'Monje': {
                abilities: {
                    'Golpe directo': 
                        `Atacas a un objetivo con un poderoso puñetazo infligiendo 1d5 + modificador de fuerza de daño contundente.
                        <br><strong>Maestría:</strong> El daño base aumenta a 2d4.`,
                    'Patada inversa': 
                        `Realizas un ataque con el talón usando una patada giratoria inversa pudiendo impactar a más de un objetivo e infligiendo 1d4 + modificador de destreza de daño contundente.
                        <br><strong>Maestría:</strong> El primer objetivo en recibir el golpe hará una Prueba de salvación (constitución) CD10 para evitar sufrir Aturdimiento.`,
                    'Meditación': 
                        `Piertes tu turno. Tu siguiente ataque hará 1d5 de daño adicional y tendrá una bonificación de +2 a la precisión. Requiere Nivel 4.
                        <br><strong>Maestría:</strong> El daño adicional aumenta a 2d4.`,
                    'A bocajarro': 
                        `Realizas un combo de 6 golpes a los puntos vitales del objetivo usando tus dedos infligiendo 6d2 de daño perforante. Requiere Nivel 8.
                        <br><strong>Maestría:</strong> Los golpes aumentan a 8. El objetivo hará una Prueba de salvación (constitución) CD10 para evitar perder su siguiente turno. `,
                    'Golpe cortante': 
                        `Efectúas un ataque contra un objetivo rozándolo velozmente con una extremidad infligiendo 1d8 + modificador de destreza de daño cortante y aplicando Hemorragia de 1d5 por turno. Requiere Nivel 12
                        <br><strong>Maestría:</strong> El daño aumenta a 2d5 y la Hemorragia a 1d8.`,
                    'Rápquit (No religioso)': 
                        `Pierdes tu turno. Hasta tu siguiente turno esquivarás todos los ataques posibles. Requiere Nivel 16.
                        <br><strong>Maestría:</strong> Al esquivar un ataque, haz una Prueba de destreza CD10 para contraatacar.`,
                },
                treats:{
                    'Dominio del monje': 
                        `Ventaja en pruebas relacionadas con reflejos y contraataque.`,
                    'Torpeza con armas': 
                        `Desventaja en pruebas de ataque con armas de todo tipo.`,
                },
                subClasses: false,
            },

            'Clérigo': {
                abilities: {
                    'Sintonizar con mi adorado': 
                        `Haz una prueba de sabiduría CD17, si ganas podrás comunicarte con tu adorado, que te responderá a una pregunta hablando directamente en tu mente. 24 horas de recarga.
                        <br><strong>Maestría:</strong> La prueba de sabiduría se hará con Ventaja.`,
                },
                treats:{
                    'Dominio del clérigo': 
                        `Acceso al bonus por clérigo de los milagros.`,
                    'Dependencia a los cetros': 
                        `Desventaja en pruebas de ataque que no involucren un milagro.`,
                },
                subClasses: false
            },

            'Bardo': {
                abilities: {
                    'Labia del bardo (No religioso)':
                        `Las pruebas de carisma que no involucren sonatas se harán con Ventaja.
                        <br><strong>Maestría:</strong> Las pruebas para tocar sonatas tendrán una bonificación de +1.`,
                    'Sonata relajante':
                        `Tocas una relajante melodía que calma la mente de tus objetivos curando 1d6 de salud mental.`,
                    'Sonata tensa':
                        `Tocas una melodía tensa que alerta a tus objetivos otorgándoles una bonificación de +1 en pruebas de percepción mientras mantengas la melodía.`,
                    'Sonata de guerra':
                        `Tocas una inspiradora melodía a tus objetivos que les otorga un +1 en pruebas de ataque. de todo tipo mientras mantengas la melodía.`,
                    'Sonata ofensiva':
                        `Tocas una melodía errática combinada con cánticos de insultos para infligir 1d6 de daño psíquico a los objetivos.`,
                    'Sonata agobiante':
                        `Tocas una melodía enfocada a un objetivo para que sus pruebas de ataque se hagan con Desventaja mientras mantengas la melodía.`,
                    'Sonata frenética':
                        `Tocas una melodía de ritmo veloz que aumenta la velocidad de movimiento de los objetivos en 50% mientras mantengas la melodía.`,
                    'Sonata plácida':
                        `Tocas una melodía reconfortante para los objetivos, si los objetivos escuchan la melodía mientras duermen curarán a tu elección 1 de vida o salud mental extra por hora.`,
                    'Sonata concentrada':
                        `Tocas una melodía enfocada a un objetivo para otorgarle una bonificación de +1 en su siguiente prueba fuera de combate.`,
                },
                treats:{
                    'Dominio del bardo':
                        `Domina los intrumentos musicales y la labia.`,
                    'Torpeza del bardo':
                        `Desventaja en pruebas de ataques de todo tipo`,
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