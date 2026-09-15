import "./Navbar.css";

function Navbar({ activePage, setActivePage }) {
    return (
        <header className="navbar">
            <a
                href="/"
                className="navbar-logo"
            >
                CHIANG MAI 7-ELEVEN
            </a>

            <nav className="navbar-links">
                <button
                    className={`navbar-link ${
                        activePage === "food" ? "active" : ""
                    }`}
                    onClick={() => setActivePage("food")}
                >
                    Food
                </button>

                <button
                    className={`navbar-link ${
                        activePage === "mealplan" ? "active" : ""
                    }`}
                    onClick={() => setActivePage("mealplan")}
                >
                    Meal Plan
                </button>
            </nav>
        </header>
    );
}

export default Navbar;