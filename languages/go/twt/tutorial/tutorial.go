//Tutorial followed from twt for GoLang
package main

import "fmt"

func main() {
	fmt.Println("Welcome to my quiz game!")
	var name string
	fmt.Printf("Enter you name: ")
	//& references memory address. This is a pointer like in C
	fmt.Scan(&name)

	fmt.Printf("Hello, %v, welcome to the game!\n", name)

	fmt.Printf("Enter your age: ")
	var age uint
	fmt.Scan(&age)
	
	//fmt.Println(age >= 10)

if age >= 10 {
	fmt.Println("Yay you can play!")
} else {
	fmt.Println("You cannot play!")
	return
}

score := 0
num_question := 2

fmt.Printf("What is better, the RTX 3080 or RTX 3090? ")

var answer string
var answer2 string
fmt.Scan(&answer, &answer2)

if answer + " " + answer2 == "RTX 3090" || answer + " " + answer2 == "rtx 3090"{
	fmt.Println("Correct!")
	score += 1
} else {
	fmt.Println("Incorrect!")
}

fmt.Printf("How many cores does the Ryzn 9 3900x have?")
var cores uint
fmt.Scan(&cores)

if cores == 12 {
	fmt.Println("Correct!")
	score++
} else {
	fmt.Println("Incorrect!")
}

fmt.Printf("You scored %v out of %v.\n", score, num_question)

percent := (float64(score) / float64(num_question)) * 100

fmt.Printf("You scored %v%%!", percent)










//---NOTES---//
	//Types: string, int, uint (unsigned), float64 (64 represents the precision, uses 64 bits to store memory), bool
	//var name string = "Arthur"
	//Syntax for implicit type guess of value.
	//name := "Arthur"
	//age := 27
	//fmt.Println(name)
	//fmt.Printf("Hello %v, you are %v years old", name, age)
}