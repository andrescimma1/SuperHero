import { Link } from "react-router-dom";

export default function Card(props) {
  const { superheros } = props;

  console.log(superheros[0].name);

  return (
    <>
      {superheros.map((superhero) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={superhero.image.url} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{superhero.name}</h5>
            <Link to={`/details/${superhero.id}`} className="btn btn-primary">
              See more..
            </Link>

            <hr />
            <a href="#" className="btn btn-primary">
              Add to team
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
