function findMatching(drivers,name){

    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}


function fuzzyMatch(drivers,letters){

    return drivers.filter(driver => driver.startsWith(letters));

}


function matchName(name,){

    for(let i = 0; i < name.length; i++){

        if(nameMatches){

            return true;

        } else {

            return false;
        }
    }
}