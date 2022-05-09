package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// Book struct (Model)
type Book struct {
	ID string `json:"id"`
	Isbn string `json:"isbn"`
	Title string `json:"title"`
	Author *Author `json:"author"`
}

type Author struct {
	Firstname string `json:"firstname"`
	Lastname string `json:"lastname"`
}

//Init books var as a slice of Book struct
var books []Book

// Get all books
func getBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(books)
}
//Get single book
func getBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) // Get params
	// Loop through books and find with id
	for _, item := range books {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}

	json.NewEncoder(w).Encode(&Book{})
}
//Create new book
func createBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var book Book
	//Decodes body and translates to book structure through &book
	json.NewDecoder(r.Body).Decode(&book)
	book.ID = strconv.Itoa(rand.Intn(10000000)) // Mock ID, could create collision IDs
	books = append(books, book)
	//GO from book struct to json format
	json.NewEncoder(w).Encode(book)

}
//Update a book
func updateBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range books {
		if item.ID == params["id"] {
			//SPlices array, takes items from before index and adds items after index, effectively deleting the referenced book
			books = append(books[:index], books[index+1:]...)
			var book Book
			//Decodes body and translates to book structure through &book
			json.NewDecoder(r.Body).Decode(&book)
			book.ID = params["id"] // Mock ID, could create collision IDs
			books = append(books, book)
			//GO from book struct to json format
			json.NewEncoder(w).Encode(book)
			return
		}

	}
	json.NewEncoder(w).Encode(books)
}

//Delete a book
func deleteBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range books {
		if item.ID == params["id"] {
			//SPlices array, takes items from before index and adds items after index, effectively deleting the referenced book
			books = append(books[:index], books[index+1:]...)
			break
		}

	}
	json.NewEncoder(w).Encode(books)
}


func main() {
	// Init mux router
	router := mux.NewRouter()

	//Mock data - @todo: need to implement a real DB
	books = append(books, Book{ID: "1", Isbn: "8451549845", Title:"Book1", Author: &Author{Firstname: "John", Lastname:"Doe"}})
	books = append(books, Book{ID: "2", Isbn: "4656846128", Title:"Book2", Author: &Author{Firstname: "Steve", Lastname:"Smith"}})

	// Route Handlers / Endpoints
	router.HandleFunc("/api/books", getBooks).Methods("GET")
	router.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	router.HandleFunc("/api/books", createBook).Methods("POST")
	router.HandleFunc("/api/books/{id}", updateBook).Methods("PUT")
	router.HandleFunc("/api/books/{id}", deleteBook).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", router))

}

