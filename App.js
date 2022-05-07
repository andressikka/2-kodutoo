class App{
    // numbersArray = [[2,2,2,2],
    //                 [2,2,2,2],
    //                 [4,0,0,2],
    //                 [2,2,2,2]];

    numbersArray = [[0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [2,2,0,0]];
    
    constructor(){
        
    }
    printArray(array){
        for(let i = 0; i < 4; i++){
            console.log(array[i][0] + " " + array[i][1] + " " + array[i][2] + " " + array[i][3]);
        }
    }

    static generateNum(array){


        let nullsArray = [];
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                if(array[i][j]===0){
                    nullsArray.push([i,j]);
                }
            }
        }
        // console.log(array);
        // console.log(nullsArray);
        let searchForFreeSpace = Math.floor(Math.random()* nullsArray.length);
        let x = nullsArray[searchForFreeSpace][0];
        let y = nullsArray[searchForFreeSpace][1];
        // console.log("Сгенерированный номер: " + searchForFreeSpace);
        let rndNum = Math.floor(Math.random() * 11);
        if(rndNum === 0){
            let insertNum1 = 4;
            array[x][y] = insertNum1;
            return array;
        } else{
            let insertNum1 = 2;
            // console.log(x + "-х у-" + y);
            array[x][y] = insertNum1;
            return array;
        }
    }

    printOnScreen(array){
        $("#2048").html("<table><div class='gridcontainer'></div></table");
        $("gridcontainer    ")
        for (let i = 0; i < 16; i++) {
            $(".gridcontainer").append("<div class='element' id='nr"+(i+1)+"'></div>");
        }
    
        let counter = 1;
        for (let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(array[i][j] === 0){
                    $("#nr"+counter).append("");
                    counter +=1;
                } else{
                    $("#nr"+counter).append(array[i][j]);
                    counter +=1;
                }
            }

        }
    }
}    

class Move{
    app = new App();

    constructor(){
        
    }

    // moveLeft(array){
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 1; j < 4; j ++){
    //             if(array[i][j] === array[i][j-1] && array[i][j] != 0 && array[i][j-1] != 0){
    //                 array[i][j-1] = (array[i][j] + array[i][j-1]);
    //                 array[i][j] = 0;
    //             }
    //             let tempNumArray = [];
    //             let nullIndex = 0;

    //             for (let k = 0; k < 4; k++){
    //                 if(array[i][k] === 0){
    //                     nullIndex = k;

    //                 } else if (array[i][k] != 0){
    //                     tempNumArray.push[];
    //                 }
    //             }
    //         }
            
    //     }
    //     return array;
    // }

    moveLeft(array){
        for(let i=0;i<4;i++){
            let standaloneArray = array[i].filter(val => val != 0);
            for(let j=1;j<standaloneArray.length;j++){
                if(standaloneArray[j-1] === standaloneArray[j]){
                    standaloneArray[j-1] += standaloneArray[j];
                    standaloneArray[j] = 0;
                }
            }

            standaloneArray = standaloneArray.filter(val => val != 0);
            while(standaloneArray.length < 4){
                standaloneArray.push(0);
            }
            array[i] = standaloneArray;
        }
        return App.generateNum(array);
    }

    moveRight(array){
        for(let i=0;i<4;i++){
            let standaloneArray = array[i].filter(val => val != 0);
            for(let j=1;j<standaloneArray.length;j++){
                if(standaloneArray[j-1] === standaloneArray[j]){
                    standaloneArray[j] += standaloneArray[j-1];
                    standaloneArray[j-1] = 0;
                }
            }

            standaloneArray = standaloneArray.filter(val => val != 0);
            while(standaloneArray.length < 4){
                standaloneArray.unshift(0);
            }
            array[i] = standaloneArray;
        }
        return App.generateNum(array);

    }

    moveDown(array){
        for(let i=0; i<4;i++){
            let standaloneArray = [];
            for(let j=3;j>-1;j--){
                standaloneArray.push(array[j][i]);
            }
            standaloneArray = standaloneArray.filter(val => val != 0);
            // console.log("Pervi filtr: "+standaloneArray);
            for(let k=1; k<standaloneArray.length; k++){
                if(standaloneArray[k-1] === standaloneArray[k]){
                    standaloneArray[k-1] += standaloneArray[k];
                    standaloneArray[k] = 0;
                }
            }
            standaloneArray = standaloneArray.filter(val => val != 0);
            while(standaloneArray.length < 4){
                standaloneArray.push(0);
            }
            // console.log("Vtoroi filtr: " + standaloneArray);

            for(let l=3, u=0;l>-1;l--,u++){
                array[l][i] = standaloneArray[u];
            }
        }
        return App.generateNum(array);
        
    }

    moveUp(array){
        let a = new App();
        for(let i=0; i<4;i++){
            let standaloneArray = [];
            for(let j=0;j<4;j++){
                standaloneArray.push(array[j][i]);
            }
            standaloneArray = standaloneArray.filter(val => val != 0);
            // console.log("Pervi filtr: "+standaloneArray);
            for(let k=1; k<standaloneArray.length; k++){
                if(standaloneArray[k-1] === standaloneArray[k]){
                    standaloneArray[k-1] += standaloneArray[k];
                    standaloneArray[k] = 0;
                }
            }
            standaloneArray = standaloneArray.filter(val => val != 0);
            while(standaloneArray.length < 4){
                standaloneArray.push(0);
            }
            // console.log("Vtoroi filtr: " + standaloneArray);

            for(let l=0;l<4;l++){
                array[l][i] = standaloneArray[l];
            }
        }
        return App.generateNum(array);
    }
    
}

let a = new App();
let move = new Move();

// a.numbersArray = move.moveLeft(a.numbersArray);
// a.numbersArray = move.moveLeft(a.numbersArray);
// a.numbersArray = move.moveRight(a.numbersArray);
// a.numbersArray = move.moveLeft(a.numbersArray);
// a.numbersArray = move.moveDown(a.numbersArray);
// a.numbersArray = move.moveDown(a.numbersArray);


// a.numbersArray = move.moveUp(a.numbersArray);
// a.numbersArray = move.moveUp(a.numbersArray);
// a.numbersArray = move.moveLeft(a.numbersArray);
// a.numbersArray = move.moveLeft(a.numbersArray);

// console.log(a.generateNum(a.numbersArray));
// console.log(a.generateAndInsertStartingNumbers());
// console.log(a.numbersArray);

/*$(document).ready(function(){
    $("#2048").html("<table><div class='gridcontainer'></div></table");
    for (let i = 0; i < 16; i++) {
        $(".gridcontainer").append("<div id='nr"+(i+1)+"'></div>");
    }

    let counter = 0;
    for (let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            
            counter +=1;
        }
    }
});
*/
$(document).ready(function(){
    a.printOnScreen(a.numbersArray);
});


$(document).ready(function(){
    $(document).keydown(function(key){
        // alert(key.which);
        switch (key.which){
            case 37:
                a.numbersArray = move.moveLeft(a.numbersArray);
                a.printOnScreen(a.numbersArray);
                
                break;
            case 38:
                a.numbersArray = move.moveUp(a.numbersArray);
                a.printOnScreen(a.numbersArray);
                break;
            case 39:
                a.numbersArray = move.moveRight(a.numbersArray);
                a.printOnScreen(a.numbersArray);
                break;
            case 40:
                a.numbersArray = move.moveDown(a.numbersArray);
                a.printOnScreen(a.numbersArray);
                break;
        }
    })
});
