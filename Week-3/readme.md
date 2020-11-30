This folder is to create the homework for week -3.

The homework was about building a password generator. 

The page will ask the user for the lenght of the password.
The page will also ask the user if the password needs to have special characters. 

Based on the lenght and if the inclusion of special characters, the password will be generated. 

For the first trial, I used two different functions. one for creating password with special character and one without the special character. 
I defined the charactersets for each option and used these character sets to generate the relevant password. I also used the general method to define the variables one by one. Both the functions did not take any arguments. The password is printed out in the console.log.

for the second attempt, I used a different way to create the variables all in a single var definition. The password is printed out in the console.log.

for the 3rd attempt, I tried to create pass the variables into the function using the variables defined in the body and the if/else logic. The password is printed out in the console.log.

for the 4th attempt, I combined both the functions into a single function sitting outside the if/else logic. The password is printed out in the console.log.

for the 5th attempt, I created an alert window to print the password along with the console.log

for the 6th attempt, I moved the function outside of the javascript file. I had to take help from the TA as this wasn't working for me initially as I was trying to reference the src and type in the same script tag. 
// incorrect way to call script and text    
    <script type="text/javascript"src="./passwordGenerator.js"></script>

// correct way to call 
    <script src="./passwordGenerator.js"></script>
    <script type="text/javascript">