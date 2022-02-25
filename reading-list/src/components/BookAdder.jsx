import {useState} from "react";

function BookAdder ({addBook}) {
    const [title, setTitle] =useState("");
    const [author, setAuthor] = useState("")
    const [coverURL, setCoverURL] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {title, author, coverURL, read: false};
        addBook(newBook);
        setTitle("");
        setAuthor("");
        setCoverURL("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Book title and Book Cover URl to add to the list</legend>
                <label htmlFor="title">Title: </label>
                <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="author">Author: </label>
                <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="coverURL">Cover URL: </label>
                <input
                id="coverURL"
                type="text"
                value={coverURL}
                onChange={(e) => setCoverURL(e.target.value)}
                />
                <button>Add Book</button>
            </fieldset>
        </form>
    )
}


export default BookAdder;