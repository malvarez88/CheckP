"use strict";

/*
 * El objetivo es hacer un TO DO LIST:
 *   vas a tener que agregarle tareas a distintas personas y
 *   configurar propiedades de esas tareas.
 *
 *    (\
 *    \'\
 *     \'\     __________
 *     / '|   ()_________)
 *     \ '/    \ ~~~~~~~~ \
 *      \       \ ~~~~~~   \
 *      ==).      \__________\
 *     (__)       ()__________)
 */

var tasks = {}; // acá vamos a guardar nuestras personas y tareas


module.exports = {
  reset: function () {
    tasks = {}; // esta función ya esta armada :D
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  
  
  listPeople: function () {
    // devuelve un arreglo de personas con tareas
    return Object.keys(tasks);
  },

  add: function (name, task) {
    if(tasks[name]){
      tasks[name].push(task)
    }else{
      tasks[name]=[task];  
    }
    if(task.complete === undefined){
      task.complete = false;
    }
  },

  list: function () {
    //devuelve un array de nombres
    
    let arr = [];
      for (let i in tasks){
         arr = tasks[i];
        }
      return arr;
  },
  

 

  complete: function(){
    
  },





  remove: function () {
  
  }

}



// etc.

