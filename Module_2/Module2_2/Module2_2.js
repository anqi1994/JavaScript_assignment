let names = [];
let numberOfParticipants =
    parseInt(prompt("How many participants?"));

for (let number = 0; number < numberOfParticipants; number++) {
    names.push(prompt("Please enter the name of the participant: "));
}

names.sort();

