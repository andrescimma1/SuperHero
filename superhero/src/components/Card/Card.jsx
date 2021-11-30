import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  const { superheros, addToTeam } = props;

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
                <Link to={`/details/${superhero.id}`} class="btn btn-primary">
                  See more..
                </Link>

                <hr />
                <button
                  onClick={() => addToTeam(superhero)}
                  class="btn btn-primary"
                >
                  Add to team
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
