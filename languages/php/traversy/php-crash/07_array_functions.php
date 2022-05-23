<?php

$fruits = ['apple', 'orange', 'pear'];

//Get length
// echo count($fruits);

//Search array
// var_dump(in_array('apple', $fruits));

//Add to array
$fruits[] = 'grape';

// print_r($fruits);

array_push($fruits, 'blueberry', 'strawberry');
array_unshift($fruits, 'mango');

//Remove from array
//Remove last item
array_pop($fruits);

//Remove first item
array_shift($fruits);

//Remove specific item
// unset($fruits[2]);

// Split into 2 chunks (segments)
// $chunked_array = array_chunk($fruits, 2);

// print_r($chunked_array);

// print_r($fruits);

$arr1 = [1,2,3];
$arr2 = [4,5,6];

$arr3 = array_merge($arr1, $arr2);
//Spread operator
$arr4 = [...$arr1, ...$arr2];


// print_r($arr4);

$a = ['green', 'red', 'yellow'];
$b = ['avacado', 'apple', 'banana'];

//Create key - value
$c = array_combine($a, $b);

// print_r($c);

$keys = array_keys($c);

// print_r($keys);

//Flip key -value
$flipped = array_flip($c);
// print_r($flipped);

$numbers = range(1, 20);

// print_r($numbers);

//Returns new array
$newNumbers = array_map(function($number) {
    return "Number ${number}";
}, $numbers);

// print_r($newNumbers);

$lessThan10 = array_filter($numbers, fn($number) => $number <= 10);

// print_r($lessThan10);
//Carry holds the return of the previous iterations
$sum = array_reduce($numbers, fn($carry, $number) => $carry + $number);

var_dump($sum);
