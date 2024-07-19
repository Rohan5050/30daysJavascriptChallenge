 // Activity 1

  // Task 1

  let book = {
    title: "The Hoobit",
    author: "J. R. R. Tolkien",
    year: 1984

  }

  console.log(book);

  // Task 2

  console.log(book.title);
  console.log(book.author);

  // Activity 2

  // Task 3

  book.getDetails = function () {
    return `${book.title} by author ${book.author}`
  }

  console.log(book.getDetails());

  // Task 4

  book.updateDetails = function (year) {
    book.year=1937;
    return `${book.title} by author ${book.author} published on ${book.year}`

  }

  console.log(book.updateDetails());


  // Activity 3

  // Task 5

  let library =  {
    name: "book store",
    books : [
        {title:"Harry Potter Part-1", author: "JK Rowling", year:1997 },
        {title:"Harry Potter Part-2", author: "JK Rowling", year:2004 },
        {title:"Harry Potter Deadly Shadows", author: "JK Rowling", year:2007 }
        
    ]
  }

  console.log(library);

  // Task 6

  console.log(library.name);
  console.log(library.books[0].title)
  console.log(library.books[1].title)
  console.log(library.books[2].title)


  // Activity 4

  // Task 7

  library.books.forEach(book => {
    book.gettitleyear = function () {
        return `title:${this.title} & year:${this.year}`

    }
  })

  library.books.forEach(book => {
    console.log(book.gettitleyear());
  })
 
  console.log("\n")

  // Activity 5

  // Task 8

  for(const books in book) {
    console.log(book[books]);
  }


// Task 9

for(const books in book) {
    console.log(Object.keys(book));

    console.log(Object.values(book));
}