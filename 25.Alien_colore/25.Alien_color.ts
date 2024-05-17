
//create a variable called alien_color.

let alien_Color :string='green';

//Write an if statement to test whether the alien's color is green. If it is,print a message that the 
//player just earned 5 points.

if(alien_Color==='green'){
    console.log("Player just earn 5 points !");
}

//write one version of this program that passes the if test and another that fails.
alien_Color ='yellow';

//the version that fails will have no output.

if(alien_Color==='green'){
    console.log("Player just earn 5 points !");
}