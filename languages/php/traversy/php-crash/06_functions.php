<?php
// $y = 12;
function registerUser($email) {
    //Global variables to allow access within function scope
    global $y;
    echo $y;
    $x = 10;
    echo $email . ' registered.';
}

// registerUser('Arthur');

function sum($n1 = 4, $n2 = 5) {
    return $n1 + $n2;
}

$number = sum();
// echo $number;

//Anonymous functions
$subtract = function($n1, $n2) {
    return $n1 - $n2;
};

// echo $subtract(10, 5);
//Arrow function
$multiply = fn($n1, $n2) => $n1 * $n2;

echo $multiply(5, 4);