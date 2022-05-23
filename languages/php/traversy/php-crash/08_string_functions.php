<?php 

$string = 'Hello World';

//Get length of string
echo strlen($string);

//Find position of first ocurrence of substring
echo strpos($string, 'o');

//Last occurence of substring
echo strrpos($string, 'o');

//Reverse string
echo strrev($string);

//Convert string to lowercase
echo strtolower($string);

//Convert to uppercase
echo strtoupper($string);

//Uppercase first character of each word
echo ucwords($string);

//String replace
echo str_replace('World', 'Everyone', $string);

//Return portion of a string specified by the offset and length
echo substr($string, 0, 5);
echo substr($string, 5);

//Starts with
if (str_starts_with($string, 'Hello')) {
    echo 'YES';
}

//Ends with
if (str_ends_with($string, 'ld')) {
    echo 'YES';
}

$string2 = '<h1>Hello</h1>';
//Parses out html element tags to prevent injection attacks
echo htmlspecialchars($string2);

printf('%s likes to %s', 'Arthur', 'code');
printf('1+1=%f', 1+1);