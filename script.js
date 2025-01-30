const byteSize = (str) => {
  // write your code here
		if (str==" "){
			console.log("0")
		} else {console.log(str.bytesize)}
	}
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
