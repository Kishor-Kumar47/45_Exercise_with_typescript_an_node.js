
function describe_city (city:string,country:string='default country'){

    console.log(`${city} is in ${country}`);
}

describe_city ('Karachi','Pakistan');
describe_city ('Tokyo','Japan');
describe_city ('parise','default country');
