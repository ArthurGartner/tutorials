<?php 
// PHP Data types

// - String    Series of characters surrounded by quotes
// - Integer   Whole numbers
// - Float     Decimal numbers
// - Boolean   True or False
// - Array     Special variable, which can hold more than one value
// - Object    A class 
// - Null      Empty variable  
// - Resource  Special variable that holds a resource

// Variable Rules
// - Variables must be prefixed with $
// - Variables must start with a letter ot the underscore character 
// - Variables can't start with a number
// - Variables can only contain alpha-numeric characters and underscores (A-z, 0-9, and _)
// - Variables are case-sensitive ($name and $NAME are two different variables

$name = 'Arthur'; //String
$age = 27; //Int
$has_kids = false; //Bool
$cash_on_hand = 20.75; //Float
// echo $name;
// echo $age;

// echo $name . " is " . $age . " years old.";

// echo "${name} is ${age} years old.";

$x = 5 + 5;
// var_dump($x);
// echo 10 - 5;
// echo 5 * 6;
// echo 10 / 2;
// echo 10 % 3;

//Constants
define('HOST', 'localhost');
define('DB_NAME', 'dev_db');

echo HOST;

?>

