var Connection = require('./connection')

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
	this.conditions = {};
}

Node.prototype.connect = function(value, name) {
	var c = new Connection(value, name);
	if (this.conditions[name] !== undefined) {
		throw new Error("Connection already exists.");
		//return;
	}
	this.connections.push(c);
	this.conditions[name] = c;
};



module.exports = Node
