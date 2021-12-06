import { useState } from "react";
import "./Nav.css";
import { GiSpiderMask } from "react-icons/gi";

export default function Nav(props) {
  const { handleSearch, setInHome } = props;
  const [input, setInput] = useState("");

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <GiSpiderMask style={{ color: "#B11313" }} size={40} />
        <a class="navbar-brand" href="#">
          Superheros
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a onClick={() => setInHome(true)} class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a onClick={() => setInHome(false)} class="nav-link" href="#">
                My team
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              onChange={(e) => setInput(e.target.value)}
              class="form-control me-2"
              type="search"
              placeholder="Search your hero.."
              aria-label="Search"
            />
          </form>
          <button
            onClick={() => handleSearch(input)}
            class="btn btn-outline-success"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
