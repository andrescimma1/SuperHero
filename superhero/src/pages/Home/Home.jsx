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

  const validate = (superhero) => {
    let exist = false;
    let countGood = 0;
    let countBad = 0;

    team.map((teamHero) => {
      if (teamHero.biography.alignment === "good") countGood++;
      else countBad++;

      if (teamHero.id === superhero.id) exist = true;
    });

    if (!exist) {
      if (superhero.biography.alignment === "good" && countGood < 3)
        return true;
      if (superhero.biography.alignment === "bad" && countBad < 3) return true;
    }

    return false;
  };

  const addToTeam = (superhero) => {
    if (validate(superhero)) setTeam([...team, superhero]);
  };

  const deleteFromTeam = (superhero) => {
    setTeam(team.filter((teamHero) => teamHero.id !== superhero.id));
  };

  return (
    <>
      <Nav handleSearch={handleSearch} setInHome={setInHome} />
      {inHome ? (
        <div>
          {superheros != undefined ? (
            <>
              <Card
                superheros={superheros}
                addToTeam={addToTeam}
                inHome={inHome}
              />
            </>
          ) : (
            <>No results..</>
          )}
        </div>
      ) : team.length > 0 ? (
        <>
          <Card
            superheros={team}
            inHome={inHome}
            deleteFromTeam={deleteFromTeam}
          />
        </>
      ) : (
        <>No results..</>
      )}
    </>
  );
}
