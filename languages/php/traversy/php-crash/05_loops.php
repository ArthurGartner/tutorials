<?php
// For loop 
// For loop syntax 
// for (initialize; condition; increment) {
//     code to be executed 
// }

//for loop
// for ($x = 0; $x <= 10; $x++) {
//     echo 'Number ' . $x . '<br>';
// }

// $x = 1;

// while($x <= 15) {
//     echo 'Number ' . $x .'<br>';
//     $x++;
// }

//do..while will ALWAYS execute the block of code once, even if the condition is false.

// $x = 6;

// do {
//     echo 'Number ' . $x . '<br>';
//     $x++;
// } while($x <= 5);

//foreach
$posts = ['First Post', 'Second Post', 'Third Post'];

// for($x = 0; $x < count($posts); $x++) {
//     echo$posts[$x];
// }

// foreach($posts as $post) {
//     echo($post);
// }

// foreach($posts as $index => $post) {
//     echo $index + 1 . ' - ' . $post . '<br>';
// }

$person = [
    'first_name' => 'Arthur',
    'last_name' => 'Gartner',
    'email' => 'Arthur.Gartner@gmail.com',
];

foreach($person as $key => $value) {
    echo "$key - $value<br>";
}

