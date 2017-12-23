var john = {
	name: "John",
	surname:"Doe",
	age:28,
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	image: "img/boy1.jpg",  
	likes: 0,
};
var Jennifer = {
	name: "Jennifer",
	surname:"Smith",
	age:25,
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	image: "img/girl1.jpg",  
	likes: 0,
};
var Brian  = {
	name: "Brian",
	surname:"Adams",
	age:35,
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	image: "img/boy2.jpg",  
	likes: 0,
};
var Beyonce = {
	name: "Beyonce",
	surname:"Secret",
	age:27,
	favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	image: "img/girl2.jpg",  
	likes: 0,
};
var persons = [
	john, 
	Jennifer,
	Brian,
	Beyonce,			
];	

// Ids of the <span>s to be updated
var spanArray = [
	"boy1span",
	"girl1span",
	"boy2span",
	"girl2span"
];

function incrementLikes(index) {
	persons[index].likes = persons[index].likes + 1;   
	document.getElementById(spanArray[index]).innerHTML=" " + persons[index].likes + "	&hearts;";
}

function writeInfoToDocument(index) {
	document.write( "Name: " + persons[index].name              + "<br>");
	document.write( " Surname: " + persons[index].surname              + "<br>");
	document.write( " Age: " + persons[index].age              + "<br>");
}
function writeInfoToSpans() {
	for (index = 0; index <4; index++) { 
    	writeInfoToSpan(index);
    	document.getElementById(spanArray[index]).innerHTML=" " + persons[index].likes + "	&hearts;";
	}
}

function writeInfoToSpan(index) {
	document.getElementById("part"+index).innerHTML =  " Name: " + persons[index].name + "<br>" 
		+ " Surname: " + persons[index].surname              + "<br>"
		+ " Age: " + persons[index].age              + "<br>";
}

function sortPersonen() {
	persons.sort(function(pers1, pers2){return pers2.likes - pers1.likes});
	document.getElementById("href0").href = persons[0].image; 
	document.getElementById("src0").src = persons[0].image; 
	document.getElementById("href1").href = persons[1].image; 
	document.getElementById("src1").src = persons[1].image; 
	document.getElementById("href2").href = persons[2].image; 
	document.getElementById("src2").src = persons[2].image; 
	document.getElementById("href3").href = persons[3].image; 
	document.getElementById("src3").src = persons[3].image; 
	writeInfoToSpans();
	
}

