/*
 * http://stackoverflow.com/questions/18260815/use-gapi-client-javascript-to-execute-my-custom-google-api
 * https://developers.google.com/appengine/docs/java/endpoints/consume_js
 * https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientload
 *
 */

/**
 * After the client library has loaded, this init() function is called.
 * The init() function loads the recipesendpoints API.
 */

function init() {
	
	// You need to pass the root path when you load your API
	// otherwise calls to execute the API run into a problem
	// rootpath will evaulate to either of these, depending on where the app is running:
	// //localhost:8080/_ah/api
	// //your-app-id/_ah/api
	var rootpath = "//" + window.location.host + "/_ah/api";
	// Load the helloworldendpoints API
	// If loading completes successfully, call loadCallback function
	gapi.client.load('recipesendpoints', 'v1', loadCallback, rootpath);
}

/*
 * When recipesendpoints API has loaded, this callback is called.
 * 
 * We need to wait until the recipesendpoints API has loaded to
 * enable the actions for the buttons in index.html,
 * because the buttons call functions in the recipesendpoints API
 */
function loadCallback () {	
	// Enable the button actions
	enableButtons ();
}

function enableButtons () {
//	// Set the onclick action for the recipes button
	btn = document.getElementById("recipes");
	btn.onclick=function(){recipeName(document.getElementById("recipe_field").value);};
	btn.value="Click me to search direction of your favorite recipes.";
	btn = document.getElementById("breakfast");
	btn.onclick=function(){recipeBreakfast();};
	btn.value="Click Here For Breakfast";
	btn = document.getElementById("lunch");
	btn.onclick=function(){recipeLunch();};
	btn.value="Click Here For Lunch";
	btn = document.getElementById("dinner");
	btn.onclick=function(){recipeDinner();};
	btn.value="Click Here For Dinner";
	btn = document.getElementById("quick");
	btn.onclick=function(){recipeQuick();};
	btn.value="Click Here For Quick & Easy";
	btn = document.getElementById("gluten");
	btn.onclick=function(){recipeGluten();};
	btn.value="Click Here For Gluten Free";
	btn = document.getElementById("vegetarian");
	btn.onclick=function(){recipeVegetarian();};
	btn.value="Click Here For Vegetarian";
	btn = document.getElementById("fall");
	btn.onclick=function(){recipeFall();};
	btn.value="Click Here For Fall";
	btn = document.getElementById("spring");
	btn.onclick=function(){recipeSpring();};
	btn.value="Click Here For Spring";
	btn = document.getElementById("summer");
	btn.onclick=function(){recipeSummer();};
	btn.value="Click Here For Summer";
	btn = document.getElementById("frozen");
	btn.onclick=function(){recipeFrozen();};
	btn.value="Click Here For Frozen";
	btn = document.getElementById("lowSugar");
	btn.onclick=function(){recipeLowSugar();};
	btn.value="Click Here For Low Sugar";
	btn = document.getElementById("cake");
	btn.onclick=function(){recipeCake();};
	btn.value="Click Here For Cake";
	
}

function recipeName (title) {
	var name = document.getElementById("recipe_field").value;
	var request = gapi.client.recipesendpoints.getDirections({'title': title});
	request.execute(getRecipeCallBack)
	}

function recipeBreakfast () {
	var request = gapi.client.recipesendpoints.getBreakfast();
	request.execute(getRecipeCallBack)
}

function recipeLunch () {
	var request = gapi.client.recipesendpoints.getLunch();
	request.execute(getRecipeCallBack)
}

function recipeDinner () {
	var request = gapi.client.recipesendpoints.getDinner();
	request.execute(getRecipeCallBack)
}

function recipeQuick () {
	var request = gapi.client.recipesendpoints.getQuickEasy();
	request.execute(getRecipeCallBack)
}

function recipeGluten () {
	var request = gapi.client.recipesendpoints.getGlutenFree();
	request.execute(getRecipeCallBack)
}

function recipeVegetarian () {
	var request = gapi.client.recipesendpoints.getVegetarian();
	request.execute(getRecipeCallBack)
}


function recipeFall () {
	var request = gapi.client.recipesendpoints.getFallRecipe();
	request.execute(getRecipeCallBack)
}

function recipeSpring () {
	var request = gapi.client.recipesendpoints.getSpringRecipe();
	request.execute(getRecipeCallBack)
}

function recipeSummer () {
	var request = gapi.client.recipesendpoints.getSummerRecipe();
	request.execute(getRecipeCallBack)
}

function recipeFrozen () {
	var request = gapi.client.recipesendpoints.getFrozen();
	request.execute(getRecipeCallBack)
}

function recipeLowSugar () {
	var request = gapi.client.recipesendpoints.getLowSugar();
	request.execute(getRecipeCallBack)
}

function recipeCake () {
	var request = gapi.client.recipesendpoints.getCakeRecipe();
	request.execute(getRecipeCallBack)
}

function getRecipeCallBack(response){
	var table = document.getElementById("myTable");
	for(i = 0; i < response.recipeList.length; i++) {
		var row = table.insertRow(0);
	    var cell1 = row.insertCell(0);
	    cell1.innerHTML = response["recipeList"][i];
	}
}
