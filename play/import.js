/*
##
* Imports all the scripts to make the game playable
##
*/


/*
* A function to import another Js File from a
*/
function importJS(name)
{
  var newScript = document.createElement("script");
  newScript.src = name;
  document.head.appendChild(newScript);
}

/*
now start importing in right order
*/
importJS("scripts/draw.js");
