import { Link } from "react-router-dom";
import "./Card.css";
import { FaTrash } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import StatusBar from "../StatusBar/StatusBar.jsx";

export default function Card(props) {
  const { superheros, addToTeam, inHome, deleteFromTeam } = props;

  console.log(superheros[0].name);

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {superheros.map((superhero) => (
          <div class="col">
            <div class="card card-flip h-100" style={{ width: "18rem" }}>
              <div class="card-front text-white bg-dark">
                <div class="card-body">
                  <img src={superhero.image.url} class="card-img-top" alt="" />
                  <i class="fa fa-search fa-5x float-right"></i>
                  <h3 class="card-title">{superhero.name}</h3>
                  {superhero.biography.alignment === "good" ? (
                    <h5 class="card-text" style={{ color: "#F2F520" }}>
                      {superhero.biography.alignment.toUpperCase()}
                    </h5>
                  ) : (
                    <h5 class="card-text" style={{ color: "#E50000" }}>
                      EVIL
                    </h5>
                  )}
                </div>
              </div>
              <div
                class="card-back bg-dark"
                style={{ padding: "0 24px !important" }}
              >
                <div class="card-body">
                  <StatusBar teamStats={superhero.powerstats} team={[0]} />
                  {/*<h3 class="card-title">Back</h3>
                  <p class="card-text">
                    Suprise this one has more more more more content on the
                    back!
                  </p>*/}
                  <div style={{ padding: "0 24px" }}>
                    {inHome ? (
                      <button
                        onClick={() => addToTeam(superhero)}
                        class="btn btn-success"
                        style={{ float: "left" }}
                      >
                        <GrAdd />
                      </button>
                    ) : (
                      <button
                        onClick={() => deleteFromTeam(superhero)}
                        class="btn btn-danger"
                        style={{ float: "left" }}
                      >
                        <FaTrash style={{ color: "black" }} />
                      </button>
                    )}
                    <Link
                      to={`/details/${superhero.id}`}
                      class="btn btn-secondary"
                      style={{ float: "right" }}
                    >
                      See more..
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
