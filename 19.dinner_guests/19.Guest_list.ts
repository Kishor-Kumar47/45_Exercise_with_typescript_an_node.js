


let Guest_list : string[] =['Kishor Kumar','Gotam Dass','Dolat Ram','Bhagchand'];

//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Dear Mr. '+ Guest_list[i]+ ',\n\nIt is our pleaser to invite you in our party . \n\n Thank you! ')
//}

let absent_Guest :string = 'Kishor Kumar';
let new_Guest :string = 'Shellu Bhai';
Guest_list[0] = new_Guest;

//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Dear Mr. '+ Guest_list[i]+ ',\n\nIt is our pleaser to invite you in our party . \n\n Thank you! ')
//}

// console.log(`Mr. ${absent_Guest} is not coming to the party.`)

// console.log('Good news! we find Big table so we are inviting three more guests.')

Guest_list.unshift('Tarachand');
Guest_list.splice(2 , 0 ,'Naem');
Guest_list.push('Nadeem');

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. '+ Guest_list[i]+ ',\n\nIt is our pleaser to invite you in our party . \n\n Thank you! ')
// }

// console.log('sorry we can not arrange big table, only two peoples will be invited.');

while(Guest_list.length>2){
  let remove_Guest= Guest_list.pop();
  // console.log(`sorry Mr. ${remove_Guest} , you are not invited for dinner.`);
}


// for(let i=0; i<Guest_list.length; i++){
//   console.log('Dear Mr. '+ Guest_list[i]+ ',\n\n you are still invited. \n\n Thank you! \n\n')
// }

Guest_list.splice(0,2);
console.log(Guest_list);



//Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

console.log(`Total numbers of Guests Are: ${Guest_list.length}`);