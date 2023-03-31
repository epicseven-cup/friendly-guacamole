import puppeteer from "puppeteer";

async function lanuchBrowser(){
	const broswer = await puppeteer.launch();
	const page = await broswer.newPage();

	// Go to localhost page
	const domain = "localhost";
	const port = "8080";

	// Check if the webpage that it is going to is secure
	// If the value is not secure -> http:// -> value will be false
	// If the value is secure -> https:// -> value will be true
	const secure = false;
	// The URL path
	let path = ""
	// Check if the connection is secure
	if (secure){
		path = "https://";
	} else {
		path = "http://";
	}

	// Add th domain
	path = path + doamin;

	// Check if the port is being used
	if (port != "" ){
		path = path + port;
	}

	// Go to the page
	await page.goto(path);

	// the name of the input box
	const input_box = "";

	const message = "";
	// type inside the input box, type in comment
	await page.type(input_box, message);


	

}