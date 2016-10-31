var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
}

Game.prototype.addNode = function(name, value){
	if(this.nodes[name] !== undefined){
		throw new Error("This already exists.");
	}
 	this.nodes[name] = new Node(name, value);

 	if(this.startingPoint === null){
 		this.startingPoint = this.nodes[name];
 	}

 	console.log("added: " , this.nodes[name]);
 	return this.nodes[name];

}


Game.prototype.getNode = function(name){
	return this.nodes[name];
}

Game.prototype.connect = function(node1, node2, condition){
	if(this.nodes[node1]===undefined){
		throw new Error("Does not exist.");
	}

	this.getNode(node1).connect(this.getNode(node2), condition);
	//console.log("added connection: " , this.getNode(node1).conditions[condition]);
}

module.exports = Game
