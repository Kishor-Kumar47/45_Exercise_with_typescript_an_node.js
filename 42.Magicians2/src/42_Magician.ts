

let magician : string[]=['RK','KK','RDX','GD'];

function make_great (magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){

        magician[i] = 'the Great ' + magicianArray[i]
    }
}

function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}


make_great(magician);
show_magicians(magician);


