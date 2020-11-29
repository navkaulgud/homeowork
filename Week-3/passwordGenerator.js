function generatePasswordSp(p1, p2) 
{

    //Original way shown for defining variables. 
    //Commented out since the new way tried works
    //var length = input1;
    //var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_<>?";
    //var genPass = "";

    //trying out a new way to define all variables in a single line
    var length = p1,
        genPass = "";

    //Checking if the right variables, characters are being picked up
    console.log("Using " + p2 + "for generating password with special charagers");

    for (var i = 0, n = p2.length; i < length; ++i) {
        genPass += p2.charAt(Math.floor(Math.random() * n));
    }


//return genPass;
console.log(genPass);   

}