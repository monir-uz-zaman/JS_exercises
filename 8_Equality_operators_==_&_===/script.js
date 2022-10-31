const numNeighbour = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbour === 1) {
    console.log('Only 1 border!');
} else if (numNeighbour > 1) {
    console.log('More than 1 border!')
} else {
    console.log('No border!');
}