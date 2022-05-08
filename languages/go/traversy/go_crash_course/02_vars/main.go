package main

import "fmt"

func main() {
	// MAIN TYPES
	// string
	// bool
	// int
	// int int8 int16 int32 int64
	// uint uint8 uint16 uint32 uint64 uintptr
	// byte - alias for uint8
	// run - alias for int32
	// float32 float64
	// complex64 complex128

	//Using the var
	//var name string = "Arthur"
	var age int = 27
	var isCool = true
	//isCool = false
name, email := "Arthur", "arthur.gartner@gmail.com"
	fmt.Println(name, age, isCool, email)
	fmt.Printf("%T\n", name) //Prints a string
}