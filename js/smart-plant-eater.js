function SmartPlantEater() {
  this.energy = 20;
  this.hungry = false;
};

SmartPlantEater.prototype.act = function(view) {
  this.hungerCheck();
  var space = view.find(" ");
  var plant = view.find("*");
  var found = view.findAll();

  if (this.hungry && plant){
    return {type: "eat", direction: plant};
  }

  // if (this.energy===20 && space) {
  //   return {type: "reproduce", direction: space};
  // }

  if (this.energy>24 && space){
    return {type:"reproduce", direction: space};
  }

  if (space){
    return {type: "move", direction: space};
  }

  if (!this.hungry && found.length==8){
    this.hungry = true;
    this.energy = 5
  }
};

SmartPlantEater.prototype.hungerCheck = function(view) {

  if (this.energy <= 20) {
    this.hungry = true;
  }
  if (this.energy >= 30) {
    this.hungry = false;
  }
}
