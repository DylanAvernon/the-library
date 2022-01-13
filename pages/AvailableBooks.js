const AvailableBooks = ({books}) => {
    return (
        <div className='container'>
            <h1>Available Books</h1>
            {
                books && books.map((book, index) => {
                    return <Book key={index} data={book} />
                })
            }
        </div>
    )
}