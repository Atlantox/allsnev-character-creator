class GodService{
    constructor(){
        this.gods = {
            'Cortémulo': {
                available: true,
                abilities: {
                    'Apuñalar mente': 'apuañas la mente',
                    'Correción mental': 'corriges la mente'
                }
            },

            'Mamma': {
                available: true,
                abilities: {
                    'Luchar por la vida': 'revives a lguien',
                    'compreisón': 'halbas animal y planta'
                },
            },

            'Mastus': {
                available: false,
                abilities: {
                    'Sembrar el caos': 'te vuevles loco',
                    'intercambiar característica': 'untercambias una caracteristica'
                }
            },
        };
    }

    getGods(){
        return this.gods;
    }
}

export default GodService