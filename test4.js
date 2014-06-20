var cat = {
        energy: 50,
        hunger: 20,
        lonliness: 20,
        happiness: 15,
        obedience: -5000,
        feed: function(){
            console.log("Om nom nom")
            this.hunger -= 5;
            this.obedience += 1;
            console.log('Hunger: ' + this.hunger);
            console.log('Obedience:' + this.obedience);
        },
        sleep: function() {
            console.log("Purrrrrrrrrr");
            this.energy += 10;
            console.log('Energy: ' + this.energy);
        },
        pet: function(){
            console.log("Purr Purr bite");
            this.lonliness -= 5;
            this.happiness += 10;
            console.log('Lonliness: ' + this.lonliness);
            console.log('Happiness: ' + this.happiness);
        }
}; 
//Semicolon here because we ended the original statement that started on the first line, where we assigned a {} to a variable.