// modern way of string concat
// const name="Rahul";
// const age = 50

// console.log(`My name is ${name} and age is ${age}`);
// console.log(name.length);
// console.log(name.charAt(3));
// console.log((name.indexOf('u')));

// console.log(name.substring(0,4));



//  const gameName= new String('power Ranger')
// // console.log(gameName);
// // console.log(gameName.length);
// // console.log(gameName.slice(0,3))
// console.log(gameName)
// console.log(gameName.trim())


// const myName= " power "
// console.log(myName);
// console.log(myName.trim())




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// OBJECTS

const myArr=[0,1,2,3,4]
// console.log(myArr.length);
// console.log(myArr.push(9));
// console.log(myArr.unshift(5));
// console.log(myArr);
// console.log(myArr.shift());
// console.log(myArr.includes(23));

// const newArray=['a','b','c','d']

// const sum = myArr.flat(newArray)
// console.log(sum);

// const myKey=Symbol("key1");
// const myDetails={
//     name:"Rushikesh",
//     email:"chandanshiv12323@gmail.com",
//     [myKey]:"newKey",
//     age: 19,
//     location:"india",
// }

// console.log(myDetails);

////////////////////////////////////////////////////////////////////////////////
// const obj1 ={1:"a",2:"b",3:"c"}
// const ob2 ={4:"d",5:"e",6:"f"}
// // const obj3 =Objectj.assign({},obj1,obj2)
// const obj3 = {...obj1,...ob2}
// console.log(obj3);
/////////////////////////////////////////////////////////////////////////////


//Function


// function applyFunvtion(number1,number2){
//     if()
//     console.log(number1+number2);
//     return
// } 
// applyFunvtion(3,4);


function logginInfo(username){
    if(!username){
        console.log("plzz enter name");
        return
    }
    return`${username} just logged in`;
}
console.log(logginInfo("vikas"));