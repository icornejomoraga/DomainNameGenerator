console.log("Hello World");

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];






//uso la funcion sort para ordenar el arreglo pero dentro de la funcion ponemos la funcion flecha math.random para que nos devuelva el orden aleatorio


pronoun.sort(() => Math.random() - 0.5);
adj.sort(() => Math.random() - 0.5);
noun.sort(() => Math.random() - 0.5);


//este console.log  devuelve de forma aleatoria el dominio

console.log(pronoun[0]+adj[0]+noun[0]+'.com');

//pero el ejercicio nos pide que devolvamos todas las combinaciones posibles y la unica forma que conozco es con un bucle


//primero concatenamos los arreglos y despues los pasamos por un for 

let fusion = [...pronoun, ...adj, ...noun]



//let result = [];
    
//for(var i=0;i<fusion.length-1;i++){
        //for(var j=i+1;j<fusion.length;j++){
        //for(var k=i+2;k<fusion.length;k++){
          //result.push(fusion[i]+" "+fusion[j] + ' '+fusion[k]);
      //}
     //}
    
    //}
    //for(var i=0;i<result.length;i++){
        //console.log(result[i]);
    //}



//var array = ["the", "our", "great", "big","jogger","racoon"];
let array = [...pronoun, ...adj, ...noun]
var result = [];
    
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++)
        for(var k=i+2;k<fusion.length;k++){
          result.push(array[i]+array[j]+array[k]);
      }
    }
    console.log(result);
    
    for(var i=0;i<result.length;i++){
        console.log(result[i]+'.com');
        console.log(result[i]+'.es');
    }