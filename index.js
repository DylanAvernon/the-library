function App(){
    const [hashUrl, setHashUrl] = React.useState('');
    const [availableBooks, setAvailableBooks] = React.useState(null);
    const [checkedOutBooks, setCheckedOutBooks] = React.useState(null);
    const [overdueBooks, setOverdueBooks] = React.useState(null);
    React.useEffect(async () => {
        const response = await fetch('./books.json');
        const json = await response.json();
        const books = json.books;
        const available = books.slice(0, 3);
        const checkedOut = books.slice(3, 6);
        const overdue = books.slice(6, 9);
        setAvailableBooks(available);
        setCheckedOutBooks(checkedOut);
        setOverdueBooks(overdue);
    }, []);
    return (
        <>
            <Navbar setHashUrl={setHashUrl} />
            {
                hashUrl === '' || hashUrl === 'availableBooks'
                    ?
                        <AvailableBooks books={availableBooks} />
                    :
                hashUrl === 'checkedOut'
                    ?
                        <CheckedOut books={checkedOutBooks} />
                    :
                hashUrl === 'overdue'
                    ?
                        <Overdue books={overdueBooks} />
                    :
                        <AvailableBooks books={availableBooks} />
            }
        </>
    );   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);