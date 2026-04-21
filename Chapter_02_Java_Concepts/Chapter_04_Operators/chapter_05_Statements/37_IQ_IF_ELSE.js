if("hello") console.log("string is truthy");
if(42) console.log("Number is truthy");
if({}) console.log("Empty object is truthy!");
if([]) console.log("Empty array is truthy!");

if("")console.log("Wont print");
if(null)console.log("wont print");
if(undefined)console.log("wont print");
if(Nan)console.log("Wont print");
if(0)console.log("wont print");
