const Navbar = ({setHashUrl}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class='container-fluid'>
            <a class='navbar-brand' href='#'><i class="bi bi-book-half"></i> The Library</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class='navbar-collapse collapse' id='navLinks'>
                <div class='navbar-nav'>
                    <button className='btn nav-link' onClick={() => setHashUrl('availableBooks')}>Available Books <i className='bi bi-check text-primary'></i></button>
                    <button className='btn nav-link' onClick={() => setHashUrl('checkedOut')}>Checked Out <i className='bi bi-person text-success'></i></button>
                    <button className='btn nav-link' onClick={() => setHashUrl('overdue')}>Overdue <i className='bi bi-bag-x text-danger'></i></button>
                </div>
            </div>
            </div>
        </nav>
    )
}