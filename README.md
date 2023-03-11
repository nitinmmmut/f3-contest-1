# f3-contest-1

Task:
Create a bunch of callback functions and also implement callback Hell. You have to write functions to implement a Schools SportsDay Function.
The sports day will have 4 colours - red,yellow,blue and green. The task is that you have to create multiple callback functions and pass a score object which will look like {red:100,blue:50,green:150,yellow:100}. You also have to pass the callback functions as parameters as discussed in the foodOrdering system example in the class.
But when the sport day begins you have to start from {red:0,blue:0,green:0,yellow:0}

Requirements
The event will be as follows →

OpeningCeremony() → Race100M() → LongJump() → HighJump() → AwardCeremony()


The OpeningCeremony() function will have a console.log saying “Let the games begin”. The console log will be in a timeout of 1000 milliseconds. It will also initialise a score object as told above and It will then call the Race100M() while passing the sports obj and the next callback fnc.


The Race100M() function will take another 3000 milliseconds to execute and it will randomly generate an int between 10 to 15 seconds for all the 4 colours. Now the colour with the least time will get 50 points, while the colour with the second least time will get 25 points. The score object will be updated and the callbackFnc will be called. Again in the callbackFnc you have to pass the score object and then you have to pass the callback Fnc.


The LongJump() function will randomly select one colour out of red,yellow,green and blue and give that color 150 points and will update the score object and call the next callback fnc. Again in the callbackFnc you have to pass the score object and then you have to pass the callback Fnc. This function will take 2000 milliseconds to execute.


The HighJump() function will open up a prompt (js prompt : hint - https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt) and ask the user What colour secured the highest jump - if the user enters red increase red’s score by 100, if yellow then increase the score of yellow by 100 and so on for all the other colours. But if the user enters a wrong colour or doesn't enter anything or cancels then you console.log (”Event was cancelled”) and move forward. Call the AwardCermony with the updated score object.


The AwardCeremony() will console.log score values and declare who came first,second and third. So the output will look like - Yellow came first with ${yellow’s score} points. Red came second with ${red’s score} points. and so on.


Also console.log values on every step of the way. Every function when called should console log the previous score and the updated new score. And it should also tell which colour won which sport.
