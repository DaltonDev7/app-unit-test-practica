


export class Jugador {

    hp:number;

    constructor(){
        this.hp = 100
    }

    recibirDamage(damage:number){
        if(damage >= this.hp){
            this.hp = 0
        }else{
            this.hp = this.hp - damage
            console.log(  this.hp);
            
        }

        return this.hp
    }

}