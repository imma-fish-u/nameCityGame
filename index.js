var counter = 0;  
var cities = [];


/*$.getJSON("russia.json", function(jsonData) { 
    cities.forEach()
}); */


var answers = []; 
var firstLetter;
var letter;

check = function (answer) {
    var userCity = 'Ты назвал город: ' + answer;
    var lastLetter;
    document.getElementById('speech').innerHTML = userCity;
    for (var i = 0; i < cities.length; i++) { 
        if (cities[i].toUpperCase() == answer.toUpperCase()) {
            firstLetter = answer[0];
            lastLetter = answer.slice(-1).toUpperCase();
            if (firstLetter == letter.textContent) {
                answers.push(answer);
                counter += 1;
                $('#error').hide();
                letter.innerHTML = lastLetter;
                return true;
            }
            else 
            {
                $('#error').show();
                return false;
            }
        }            
    }
    $('#error').show();
    return false;
}

sendNewCity = function () {
    for (var i = 0; i < cities.length; i++) {
        firstLetter = cities[i][0];
        lastLetter = cities[i].slice(-1).toUpperCase();
        if ((firstLetter == letter.textContent) && (answers.indexOf(cities[i]) == -1)) {
            answers.push(cities[i]);
            document.getElementById('city').innerHTML = cities[i]; 
            letter.innerHTML = lastLetter;
            return;
        }
    }
}

gameLoop = function() {
    var answer = document.getElementById('answer').value;
    letter = document.getElementById('letter');
    if (check(answer))
    {
        answer = '';
        sendNewCity();
    }
}

document.getElementById('send').addEventListener('click', gameLoop);
