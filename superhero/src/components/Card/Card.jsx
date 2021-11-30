import { Link } from "react-router-dom";
import "./Card.css";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function Card(props) {
  const { superheros, addToTeam, inHome, deleteFromTeam } = props;

  console.log(superheros[0].name);

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {superheros.map((superhero) => (
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={superhero.image.url} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{superhero.name}</h5>
                <p class="card-text">
                  {superhero.biography.alignment.toUpperCase()}
                </p>
                <Link to={`/details/${superhero.id}`} class="btn btn-secondary">
                  See more..
                </Link>
                {inHome ? (
                  <button
                    onClick={() => addToTeam(superhero)}
                    class="btn btn-success"
                  >
                    Add to team
                  </button>
                ) : (
                  <button
                    onClick={() => deleteFromTeam(superhero)}
                    class="btn btn-danger"
                  >
                    <FaTrash style={{ color: "black" }} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
