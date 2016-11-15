var pQuote = document.getElementById("quote"); 
var pPerson = document.getElementById("person");
var tweetButton = document.getElementById("twitter");
var newQuoteButton = document.getElementById("newQuote");
var newUrl = "https://dl.dropboxusercontent.com/s/g5cpjvy638ty2mr/harrypotter.json?dl=0";

//when the button is pressed, it tweets it, with a hashtag 
tweetButton.addEventListener("click", function(){
	var str = pQuote.textContent+" "+pPerson.textContent;
	str = "https://twitter.com/intent/tweet?text="+str+" &hashtags=quotes";
	window.open(str);
});	

//when the button is pressed, it displays new quote
newQuoteButton.addEventListener("click", function(){
	$.getJSON(newUrl, function(data){
		console.log(data);
		var randomNum = Math.floor(Math.random() * data.length);		
		pQuote.textContent = data[randomNum].quote;
		pPerson.textContent = '-'+data[randomNum].character;
		switch (data[randomNum].book) {
			case 1:
				cover.src = "images/sorcerers_stone.jpg";
				break;
			case 2: 
				cover.src = "images/chamber_of_secrets.jpg";
				break;
			case 3: 
				cover.src = "images/prisoner_of_azkaban.jpg";
				break;
			case 4: 
				cover.src = "images/goblet_fire.jpg";
				break;
			case 5: 
				cover.src = "images/order_of_the_phoenix.jpg";
				break;
			case 6: 
				cover.src = "images/the_half_blood_prince.jpg";
				break;
			case 7: 
				cover.src = "images/deathly_hallows.jpg";
				break;
		}
	});
});

