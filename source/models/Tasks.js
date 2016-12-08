import Task from "../models/Task.js"
class Tasks extends Task {
  constructor(name,subTasks){
    super(name);
  	this.subTasks = subTasks
  	this.subTasksAmount= subTasks.length;
  }

  addSubTask(name){
    this.subTasks.push(name);
    this.subTasksAmount = this.subTasks.length;
  }
}

export default Tasks