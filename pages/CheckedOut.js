const CheckedOut = ({books}) => {
    return (
        <div className='container'>
            <h1>Checked Out</h1>
            {
                books && books.map((book, index) => {
                    return <Book key={index} data={book} />
                })
            }
        </div>
    )
}