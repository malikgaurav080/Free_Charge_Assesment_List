
let name = async() =>{
	let output = await Promise.resolve("This is Gaurav");
	return output;
}
name().then((result)=>{
	console.log(result);
});

