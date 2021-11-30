import axios from "axios";
import { useState } from "react";
import Nav from "../../components/Nav/Nav.jsx";
import Card from "../../components/Card/Card.jsx";

export default function Home(props) {
  //   const [loading, setLoading] = useState(true);
  const API_KEY = "4382962791714286";
  const [superheros, setSuperheros] = useState(undefined);
  const [team, setTeam] = useState([]);
  const [inHome, setInHome] = useState(true);

  //   useEffect(() => {
  //     if (loading) {
  //       setLoading(false);
  //     }
  //   });

  const handleSearch = (input) => {
    axios
      .get(`https://superheroapi.com/api.php/${API_KEY}/search/${input}`)
      .then(({ data }) => {
        console.log(data);
        if (data === undefined) setSuperheros(undefined);
        else setSuperheros(data.results);
      });
  };

  const addToTeam = (superhero) => {
    setTeam([...team, superhero]);
  };

  return (
    <>
      <Nav handleSearch={handleSearch} setInHome={setInHome} />
      {inHome ? (
        <div>
          {superheros != undefined ? (
            <>
              <Card superheros={superheros} addToTeam={addToTeam} />
            </>
          ) : (
            <>No results..</>
          )}
        </div>
      ) : team.length > 0 ? (
        <>
          <Card superheros={team} addToTeam={addToTeam} />
        </>
      ) : (
        <>No results..</>
      )}
    </>
  );
}
