class RaceService{
    constructor(){
        this.races = [
            {
                name: 'Humano',
                icon: 'trebol.png',
                image: 'human.jpg',
                abilities: {
                    'Inquebrantable': 'Cuando te vais a morir no te morís',
                },
                treats:{
                    'Adaptabilidad': 'Te adaptás',
                },
            },
            {
                name: 'Orco',
                icon: 'hammer.png',
                image: 'Orc.webp',
                abilities: {
                    'Grito de guerra': 'Gritas fuerte',
                },
                treats:{
                    'Fuerza innata': 'Sos más fuerte',
                },
            },
            {
                name: 'Elfo blanco',
                icon: 'ciclo.png',
                image: 'high_elf.jpg',
                abilities: {
                    'Transferir mágia': 'Transfieres magia',
                },
                treats:{
                    'Belleza': 'Sos bello',
                },
            },
            {
                name: 'Elfo negro',
                icon: 'balance.png',
                image: 'dark_elf.jpg',
                abilities: {
                    'Reacción instantánea': 'Reacciones de manera instantánea',
                },
                treats:{
                    'Sentidos agudos': 'Tendrás los sentidos más agudos',
                },
            },
            {
                name: 'Demonio',
                icon: 'cono.png',
                image: 'oni.jpeg',
                abilities: {
                    'Seducción': 'Seducís a alguien',
                },
                treats:{
                    'Encanto natural': 'Sos encantador naturalmente',
                },
            },
            {
                name: 'Porcino',
                icon: 'butcher_knife.png',
                image: 'porcino.jpeg',
                abilities: {
                    'Transformar grasa': 'Transformás grasa',
                },
                treats:{
                    'Maestro chef': 'Cocinás mejor',
                },
            },
            {
                name: 'Ratápido',
                icon: 'flechas.png',
                image: 'ratapido.jpeg',
                abilities: {
                    'Ojo de ladrón': 'Mirás como ladrón',
                },
                treats:{
                    'Saltaro innato': 'Saltás más',
                },
            },
            {
                name: 'Córvido',
                icon: 'libro.png',
                image: 'corvido.jpeg',
                abilities: {
                    'Mimetizar técnica': 'Mimetizas una técnica',
                },
                treats:{
                    'Erudito': 'Sabés más',
                },
            },
        ];
    }

    getRaces(){
        return this.races;
    }
}

export default RaceService