import {Link} from 'react-router-dom'
import './Header.css'
const Header = () =>{
    return(
        <div>
            <header className='Header1'>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/adm">Admission</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/notfound">NotFound</Link>
                </nav>
             </header>
        </div>
    )
}

export default Header;