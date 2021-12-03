import { useState } from "react";

export default function Nav(props) {
  const { handleSearch, setInHome } = props;
  const [input, setInput] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Superhero
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={() => setInHome(true)}
                  className="nav-link"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setInHome(false)}
                  className="nav-link"
                  href="#"
                >
                  My team
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                onChange={(e) => setInput(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button
              onClick={() => handleSearch(input)}
              className="btn btn-outline-success"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
