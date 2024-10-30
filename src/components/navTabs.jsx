//Highlight the current page's tab in the navbar

//About me needs recent photo and short bio

//Portfolio needs titled images of six applications or placeholders with links to the deployed apps and the corresponding github repos

//Contact needs form with sections name, email address, and a message, when moving cursor out of the form field without entering text, a notifaction says this field is required, has a video displaying this activity in readme challenge 12
// email address must check for validity and display a message if the text is invalid

//Resume needs a link to a downladable resume in google docs and a list of the developer's

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
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </Link>
            <Link
                to='/Contact'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </Link>
            <Link
                to='/Resume'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </Link>
        </>
    )
}

export default NavTabs