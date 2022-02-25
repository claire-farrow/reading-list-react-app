import BookCard from "./BookCard";
import BookAdder from "./BookAdder";
import {useState} from "react";

function ReadingList() {
    const bookList = [
        {
            title: "The Phoenix Project",
            author: "Gene Kim, Kevin Behr, Geroge Spafford",
            read:   false,
            coverURL: "https://images-na.ssl-images-amazon.com/images/I/81ZMvLDtmIL.jpg"
        },
        {
            title: "Cain's JawBone",
            author: "Torquemada",
            read:   false,
            coverURL: "https://images-na.ssl-images-amazon.com/images/I/71xb-YtVdqL.jpg"
        },
        {
            title: "Queenie",
            author: "Cansice Carty-Williams",
            read: false,
            coverURL: "https://images-na.ssl-images-amazon.com/images/I/81aDPmLZVpL.jpg"
        }
    ];

    const [books, setBooks] = useState(bookList);

    const updateRead = (bookToUpdate) => {
        const booksUpdated = books.map((book) => {
            if(book === bookToUpdate) {
                return {...book, read: !book.read};
            } else {
                return book;
            }
        });
        setBooks(booksUpdated)
    };

    const addBook = (bookToAdd) => {
        setBooks((currentBooks) => {
            return [bookToAdd, ...currentBooks]
        })
    }

    return (
        <>
        <BookAdder addBook={addBook} />
        <ul className="books">
            {books.map((book) => {
                return (
                    <BookCard 
                    key={book.coverURL}
                    updateRead={updateRead}
                    book={book}/>
                );
            })}
        </ul>
        </>
    )
}

export default ReadingList;