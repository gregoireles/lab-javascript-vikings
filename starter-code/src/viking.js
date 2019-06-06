// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(the_dammage) {
        this.health = this.health - the_dammage;
    }
}


// Viking
class Viking {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(the_damage) {
        this.health = this.health - the_damage;
        if (this.health > 0) {
            return `${this.name} has received ${the_damage} points of damage`
        }
        else return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(the_damage) {
        this.health = this.health - the_damage;
        if (this.health > 0) {
            return `A Saxon has received ${the_damage} points of damage`
        }
        else return `A Saxon has died in combat`
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject);
    }

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject);
    }

    vikingAttack() {
         
       const randomViking =this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))];
       console.log(Math.random(this.vikingArmy.length)); 
       const randomSaxon =this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))]; 
       randomSaxon.receiveDamage(randomViking.strength); 
       if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(0, 1); 
       }
     
    }
    saxonAttack() {
        const randomViking =this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))];
        const randomSaxon =this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))]; 
        randomViking.receiveDamage(randomSaxon.strength); 
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(0, 1); 
       }
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day..."

    }
}
