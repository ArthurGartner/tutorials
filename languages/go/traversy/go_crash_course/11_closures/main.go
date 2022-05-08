package main

import "fmt"

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

//Sum takes adder() which sets sum := 0 and then returns anonymous function. Sum representes anonymous function.
func main() {
	sum := adder()
	for i := 0; i < 10; i++ {
		fmt.Println(sum(i))
	}
}