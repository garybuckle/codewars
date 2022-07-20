function likes (names) {
	let theString =''
if (names.length  < 1) { 
	theString = "no one likes this"
}

if (names.length == 1) {
	theString = names[0] + " likes this"
} 
else if (names.length == 2){
		theString = names[0]+ " and " + names[1] + " like this"
} 
else if (names.length == 3) {
			theString = names[0]+ ", " + names[1] + " and " + names[2] + " like this"
	}
else if (names.length > 3){
				theString = names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this"


}

return theString
}


console.log(likes(["gary", "Heike", "Colleen", "Alicia", "Sean"]))