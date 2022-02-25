function BookCard ({book, updateRead}) {
    const handleClick = () => {
        updateRead(book);
    }

return (
    <li className="cardWrap">
        <div className="cardLeft">
            <h2>Library</h2>
            <div className="content">
                <div className="title">
                    <h3>{book.title}</h3>
                </div>
                <div className="author">
                    <h3>{book.author}</h3>
                    <span>book</span>
                </div>
                
                <img className="cover" src={book.coverURL} alt="Book Cover" />
                
            </div>
        </div>
            <div className="cardRight">
                
                <button onClick={handleClick}>{book.read ? "Have Read" : "To Read"}</button>
            </div>
        
    </li>
);
};

export default BookCard;