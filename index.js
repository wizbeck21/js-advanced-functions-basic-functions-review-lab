// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(work="go to the office") {
  return `This Monday, I will ${work}.`
}

let wrapAdjective = function(style="*") {
  return function(adj="special") {
    return `You are ${style}${adj}${style}!`
  }
}

const Calculator = {
  add: function(a, b){
    return a + b;
  },

  subtract: function(b, a){
    return b - a;
  },

  multiply: function(a, b){
    return a * b;
  },

  divide: function(b, a){
   return b / a;
  }
}

let actionApplyer = function(start, arr){
  let a = start
  for (let i = 0; i < arr.length; i++){
    a = arr[i](a)
  }
  return a
}