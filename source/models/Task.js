class Task{
  constructor(name,subTasks){
  	this.name = name
  	this.subTasks = subTasks
  	this.subTasksAmount= subTasks.length;
  }

  getName(){
  	return this.name
  }

  getSubTasks(){
  	return this.subTasks;
  }

  addSubTask(name){
    this.subTasks.push(name);
  }
}

export default Task