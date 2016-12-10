import Task from "../models/Task.js"
class Tasks extends Task {
  constructor(name,subTasks,completed){
    super(name,completed);
  	this.subTasks = subTasks
  	this.subTasksAmount= subTasks.length;
  }

  addSubTask(task){
    this.subTasks.push(task);
    this.subTasksAmount = this.subTasks.length;
  }

  setCompleted(){
    if(this.subTasksAmount > 0){
      for(var i=0; i < this.subTasksAmount; i++){
        if(this.subTasks[i].completed === false){
          this.completed = false;
          return;
        }
      }
    this.completed = true;
    }
    else{
      this.completed = !this.completed;
    }
  }

  static fromObject(obj){
    var tasks = new Tasks('',[],false);
    for(var property in obj){
      if(Array.isArray(obj[property]) === true){
        tasks[property] = obj[property].map(function(obj1){
          var task = new Task("",false);
          for(var property1 in obj1){
            task[property1] = obj1[property1];
          }
          return task;
        });
      }
      tasks[property] = obj[property];
    }
    return tasks;
  }
}

export default Tasks