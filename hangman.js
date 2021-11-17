
$(document).ready(function () {
	var hangman = [
		"</br> 0 <br>",
		"</br> 0 <br>/",
		"</br> 0 <br>/|",
		"</br> 0 <br>/|&#92; <br>",
		"</br> 0 <br>/|&#92; <br>/",
		"</br> 0 <br>/|&#92; <br>/&#92; <br>"
		]

	// 	function wykonajXML() {
	// 		$(document).ready(function() {
	// 		  $.ajax({
	//    type: "GET",
	//    url: "hangman.xml",
	//    dataType: "xml",
	//    success: function(xml) {
	// 			  words = xml;
	//    }
	//    });
	//    $(words).find('word').each(function(){
	// 	   var randomWord = $(this).find('word').text()
	//    })
	//    })
	//    };
	   
		function wykonanieXML(){
			var words = new XMLHttpRequest();
			
		}




	var randomWordList = [
		"DIAMOND",
		"GALAXY",
		"FLOWER",
		"WATCH",
		"COMPUTER",
		"CHRISTMAS",
		"ROLLERCOASTER",
		"RHINOCEROS",
		"ARSON",
		"SILHOUETTE",
		"PHENOMENAL",
		"ROULETTE",
	]

	function start(){
		$('body').html();
		theChosenWord = randomWordList[Math.floor((Math.random() * randomWordList.length))]
		numLines = [];

		for (var x = 0; x < theChosenWord.length; x++){
			numLines.push('_&nbsp;');
		}
		$('#lines').html(numLines);
		incGuessLetterList = [];
		numOfIncGuess = 0;
		totalGuessed = [];
	}
	start();
	$(document).on('click', "#enter", function() {
	var letterGuess = $('#guess').val();
	$('#guess').val('');
		if (letterGuess.length > 1){
			alert('Guess: ' + letterGuess.toUpperCase() + ' . Please only guess one letter.');
		} else if (letterGuess.length < 1){
      alert('Guess: ' + letterGuess.toUpperCase() + ' . Please guess one letter');
		} else if (isNaN(letterGuess) === false || letterGuess == " "){
			alert('Guess: ' + letterGuess + ' . Please guess a letter');
		} else if (totalGuessed.includes(letterGuess)){
			alert('Guess: ' + letterGuess.toUpperCase() + ' . You have already guessed ' + letterGuess);
		} else if (/^[a-zA-Z]+$/.test(letterGuess) === false){
			alert('Guess: ' + letterGuess + ' . Is an invalid character');
		} else {
			totalGuessed.push(letterGuess);
			if (theChosenWord.includes(letterGuess.toUpperCase())){
				for (var i = 0; i < theChosenWord.length; i++){
					if (theChosenWord[i] == letterGuess.toUpperCase()){
						numLines[i] = letterGuess.toUpperCase() + '&nbsp;';
					}$('#lines').html(numLines);
				}
			} else {
				numOfIncGuess++;
				incGuessLetterList.push(letterGuess.toUpperCase() + '&nbsp;&nbsp;');
				$('#incGuessLetter').html(incGuessLetterList);
			}
		}

		$('#hangmanDisplay').html(hangman[numOfIncGuess - 1]);
		if (numOfIncGuess >= 6){
			$('body').html("<h1>GAME OVER</h1><h2>The word was " + theChosenWord+ "</h2>");
			return false;
		}
		if (/_/.test(numLines) === false){
			$('body').html("<h1>YOU WON!!</h1><h2>The word was " + theChosenWord+ "</h2>");
		}
	});
});
