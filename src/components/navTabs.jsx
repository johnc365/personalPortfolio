import '../index.css'
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <Link
                to='/'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </Link>
            <Link
                to='/Portfolio'
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </Link>
            <Link
                to='/Contact'
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </Link>
            <Link
                to='/Resume'
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </Link>
        </>
    )
}

export default NavTabs