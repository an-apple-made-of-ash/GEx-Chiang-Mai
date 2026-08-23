import "./Navbar.css";


function Navbar() {
    return (
        <header className="navbar">

            <a
                href="/"
                className="navbar-logo"
            >
                CHIANG MAI 7-ELEVEN
            </a>


            <nav className="navbar-links">

                <a
                    href="/"
                    className="navbar-link active"
                >
                    Food
                </a>

                {/* <a
                    href="/meal-plan"
                    className="navbar-link"
                >
                    Meal Plan
                </a> */}

            </nav>

        </header>
    );
}


export default Navbar;