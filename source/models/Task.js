class Task{
  constructor(name,items){
  	this.name = name
  	this.items = items
  	this.itemAmount = items.length;
  }

  getName(){
  	return this.name
  }

  getItems(){
  	return this.items;
  }
}

export default Task