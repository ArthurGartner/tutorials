<?php
// Simple Array
$numbers = [1, 44, 55, 22];
$fruits = array('apple', 'orange', 'pear');

// var_dump($numbers);
// echo $fruits[1];

// Associative Array
$colors = [
    1 => 'red',
    4 => 'blue',
    6 => 'green'
];

//Will print blue
// echo $colors[4];

$hex = [
    'red' => '@f00',
    'blue' => '#0f0',
    'green' => '#00f',
];

//Prints #0f0
// echo $hex['blue'];

$person = [
    'first_name' => 'Arthur',
    'last_name' => 'Gartner',
    'email' => 'Arthur.Gartner@gmail.com',
];

// echo $person['first_name'];

$people = [
    [
        'first_name' => 'Arthur',
        'last_name' => 'Gartner',
        'email' => 'Arthur.Gartner@gmail.com',
    ],
    [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'email' => 'John@gmail.com',
    ],
    [
        'first_name' => 'Jane',
        'last_name' => 'Doe',
        'email' => 'Jane@gmail.com',
    ]
];

// echo $people[1]['email'];

//Turn into json
var_dump(json_encode($people));