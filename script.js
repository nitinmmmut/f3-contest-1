let score = {};

//we define a function called OpeningCeremony that takes two arguments, score and Race100m.
// setTimeout() method to wait for 1 second before executing the code inside the arrow function.
function OpeningCeremony(score, Race100m) {
    score = { red: 0, blue: 0, green: 0, yellow: 0 };
    setTimeout(() => {
        console.log("Let the game begin!");
        Race100m(score, longJump);
    }, 1000);
}

function Race100m(score, longJump) {
    setTimeout(() => {
        console.log("Score");
        console.log(score);
        const obj = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10
        };
        const sortedArr = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
        let newObj = {};
        newObj[sortedArr[0]] = 50;
        newObj[sortedArr[1]] = 25;
        console.log("Winner of 100M race is " + sortedArr[0]);

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Updated Score");
        console.log(score);
        longJump(score, HighJump);

    }, 3000);


}

function longJump(score, HighJump) {
    setTimeout(() => {
        console.log("Prev Score");
        console.log(score);

        const i = Math.floor(Math.random() * 4) + 1;
        if (i == 1) {
            let val = score.red;
            val += 150;
            score.red = val;
            console.log("Winner of LongJump is " + "red");
            console.log("Updated Score");
            console.log(score);
        }
        if (i == 2) {
            let val = score.blue;
            val += 150;
            score.blue = val;
            console.log("Winner of LongJump is " + "blue");
            console.log("Updated Score");
            console.log(score);
        }
        if (i == 3) {
            let val = score.green;
            val += 150;
            score.green = val;
            console.log("Winner of LongJump is " + "green");
            console.log("Updated Score");
            console.log(score);
        }
        if (i == 4) {
            let val = score.yellow;
            val += 150;
            score.yellow = val;
            console.log("Winner of LongJump is " + "yellow");
            console.log("Updated Score");
            console.log(score);
        }
        HighJump(score, awardCeremony);

    }, 2000);
}

function HighJump(score, awardCeremony) {

    console.log("Prev Score");
    console.log(score);

    let person = prompt("Please enter the Colour");

    //This if statement checks whether the user entered a valid color. If the user didn't enter anything or clicked "cancel" in the prompt, the function prints out a message to indicate that the event was cancelled, and then calls the awardCeremony function with the current score as its argument. If the user did enter a color, the code inside the else block is executed.

    if (person == null || person == "") {
        console.log("Event Was cancelled");
        awardCeremony(score);
    } else {

        //These four if statements check which color the user entered, and then add 100 points to the score for that color.
        if (person == "red") {
            let val = score.red;
            val += 100;
            score.red = val;
            console.log("Winner of HighJump is red");
            console.log("Updated Score");
            console.log(score);
        }
        if (person == "blue") {
            let val = score.blue;
            val += 100;
            score.blue = val;
            console.log("Winner of HighJump is blue");
            console.log("Updated Score");
            console.log(score);
        }
        if (person == "green") {
            let val = score.green;
            val += 100;
            score.green = val;
            console.log("Winner of HighJump is green");
            console.log("Updated Score");
            console.log(score);
        }
        if (person == "yellow") {
            let val = score.yellow;
            val += 100;
            score.yellow = val;
            console.log("Winner of HighJump is yellow");
            console.log("Updated Score");
            console.log(score);
        }
        awardCeremony(score);
    }
}

function awardCeremony(score) {

    //creates a new array sortedArr that contains the keys of the score object sorted in ascending order based on the corresponding values in the score object. 

    let sortedArr = Object.keys(score).sort((a, b) => score[a] - score[b]);

    //This declares a new variable n and assigns it the length of the sortedArr array.
    let n = sortedArr.length;

    //These four lines print the results of the competition, with the first line displaying the winner's name and score, the second line displaying the second-place finisher's name and score, and so on down to the fourth-place finisher's name and score.

    console.log(`${sortedArr[n - 1]} Came First with ${score[sortedArr[n - 1]]} points`);
    console.log(`${sortedArr[n - 2]} Came Second with ${score[sortedArr[n - 2]]} points`);
    console.log(`${sortedArr[n - 3]} Came Third with ${score[sortedArr[n - 3]]} points`);
    console.log(`${sortedArr[n - 4]} Came Fourth with ${score[sortedArr[n - 4]]} points`);
}

OpeningCeremony(score, Race100m);