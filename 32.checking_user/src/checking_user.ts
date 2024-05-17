

let current_users: string []=['KisHor','Dolat','BhaGchand','Gotam','Shellu'];

let new_users: string[] =['Rajesh','KisHor','Tara','BhaGchand','Vikash'];

new_users.forEach(new_username =>{
    let lowerCase: string = new_username.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${new_username} is not available. Please write a diffrent username.`);
    }
    else{
        console.log(`The username ${new_username} is available.`);
    }
})