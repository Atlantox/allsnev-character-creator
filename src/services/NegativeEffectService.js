class NegativeEffectService{
    constructor(){
        this.effects = [
            {
                name:'fatigue',
                debuffs:{
                    "Fuerza": -2,
                    "Destreza": -2,
                }
            },
            {
                name:'hungry',
                debuffs:{
                    "Constitución": -2,
                    "Percepción": -2,
                }
            },
            {
                name:'madness',
                debuffs:{}
            },
        ];
    }

    getEffects(){
        return this.effects;
    }
}

export default NegativeEffectService