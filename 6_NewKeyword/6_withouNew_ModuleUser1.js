var mainModule = require('./6_MainModule');


var mainModFns1 = new mainModule;
mainModFns1.constructFullName('fName1','lName1');
mainModFns1.printName();


//show how it behaves without the new keyword below. 

//var mainModFns2 = mainModFns1;
var mainModFns2 = new mainModule;
//console.log(mainModule);
mainModFns2.constructFullName('fName2','lName2');
mainModFns2.printName();


mainModFns1.printName();
