// Code your solutions in this file
function writeCards( arrayNames, event) {
    let thankYouCards = []
    for (let i = 0; i < arrayNames.length; i++ ) {
        thankYouCards.push ( `Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}

function countDown ( startNumber ) {
    while ( startNumber > 0 ) {
        console.log (startNumber )
        startNumber -= 1
    }
    console.log ( startNumber )
}