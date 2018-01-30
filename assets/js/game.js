$(document).ready(function() {
	
// Initialize Firebase
	var config = {
	  apiKey: "AIzaSyAP9t4t0AfSkll898LtXw4RJGKalbULA6k",
	  authDomain: "rock-paper-scissors-e0439.firebaseapp.com",
	  databaseURL: "https://rock-paper-scissors-e0439.firebaseio.com",
	  projectId: "rock-paper-scissors-e0439",
	  storageBucket: "rock-paper-scissors-e0439.appspot.com",
	  messagingSenderId: "362071363983"
	};
	
	firebase.initializeApp(config);
	
	function initGame() {
		var database = firebase.database();
	
		//variables
		var name = '';
			wins = 0,
			losses = 0,
			choice = ' ',
			playerNumber = 0,
			turns = 0,

	}

	intiGame();


});

