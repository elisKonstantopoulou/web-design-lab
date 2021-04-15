// this function recognises if what we've entered is alphanumeric
function isAlphanumeric(str) {
	return str.match(/^[0-9a-zA-Z]+$/);
}



// this function is used to count how many words we have entered 
function wordCounter() {
	var input = document.getElementById('myText');
	var text = myText.value.split(' ');
	var wordCount = 0;
	for (var i = 0; i < text.length; i++) {
		if (isAlphanumeric(text[i]) && text[i].length>=4) {
			wordCount++;
		}
	}
	return wordCount;
}



// this function will calculate the 5 most common words in a text
function repeated() {
	
	var input = document.getElementById('myText');
	var text = myText.value.split(' ');
	var myTextArray = Array.from(text);
	var tempArray =[];
	for (var k = 0; k < myTextArray.length; k++){
		if (myTextArray[k].length>=4){
			tempArray.push(myTextArray[k]);
		}
	}
	var sorted = tempArray.sort();
	
	var current = null;
	var counter = 0;
	var words = [];
	var numbers = [];
	
	for (var i = 0; i < sorted.length; i++) {
		if (sorted[i] != current) { 
			if (counter > 0) {	
				words.push(current);
				numbers.push(counter);
			}
			current = sorted[i];
			counter = 1;
		} else {
			counter++;
		}
	}
	
	if (counter > 0) {
		words.push(current);
		numbers.push(counter);
	}

	// below is a bubble sort to sort the two arrays according to the number of times 
	//the words exist so that we can take the first five rows of each table
	var checked;
	do {
		checked = false;
		for (i = 0; i < numbers.length; i++) {
			if (numbers[i] < numbers[i + 1]) {
				var tmp01 = numbers[i];
				var tmp02 = words[i];
        
				numbers[i] = numbers[i + 1];
				words[i] = words[i + 1];
        
				numbers[i + 1] = tmp01;
				words[i + 1] = tmp02;
        
				checked = true;
			}
		}
	} while (checked);
	
	
	var numberOfWords = wordCounter();
	
	if (numberOfWords == 0) {
		alert('You did not type any words.');
	} else if (words.length < 5) { 
		for (var j = 0; j < numbers.length; j++) {
			alert(words[j] + ' comes up ' + numbers[j] + ' times.');
		}
	} else {
		for (var j = 0; j < 5; j++) {
			alert(words[j] + ' comes up ' + numbers[j] + ' times.');
		}
	}
}