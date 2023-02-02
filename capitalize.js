function capitalize( string ) {

    let capitalizedString = string[0].toUpperCase();

    for ( let i = 1 ; i < string.length ; i++ ) {
        capitalizedString += string[i];
    }

    return capitalizedString;
}

module.exports = capitalize;