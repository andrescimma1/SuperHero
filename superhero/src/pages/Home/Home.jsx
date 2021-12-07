import axios from "axios";
import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav.jsx";
import Card from "../../components/Card/Card.jsx";
import StatusBar from "../../components/StatusBar/StatusBar.jsx";
import "./Home.css";

export default function Home(props) {
  //   const [loading, setLoading] = useState(true);
  const API_KEY = "4382962791714286";
  const [superheros, setSuperheros] = useState(undefined);
  const [team, setTeam] = useState([]);
  const [inHome, setInHome] = useState(true);
  const [teamStats, setTeamStats] = useState({
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
  });
  const [added, setAdded] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (added !== null) {
      setTimeout(() => {
        setAdded(null);
      }, 1500);
    }
  }, [team, teamStats, added, loading]);

  const handleSearch = (input) => {
    setLoading(true);
    axios
      .get(`https://superheroapi.com/api.php/${API_KEY}/search/${input}`)
      .then(({ data }) => {
        console.log(data);
        if (data === undefined) setSuperheros(undefined);
        else setSuperheros(data.results);
        setLoading(false);
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
    if (validate(superhero)) {
      setTeam([...team, superhero]);

      let sum = [
        teamStats.combat,
        teamStats.durability,
        teamStats.intelligence,
        teamStats.power,
        teamStats.speed,
        teamStats.strength,
      ];
      if (superhero.powerstats.combat !== "null")
        sum[0] += parseInt(superhero.powerstats.combat, 10);
      if (superhero.powerstats.durability !== "null")
        sum[1] += parseInt(superhero.powerstats.durability, 10);
      if (superhero.powerstats.intelligence !== "null")
        sum[2] += parseInt(superhero.powerstats.intelligence, 10);
      if (superhero.powerstats.power !== "null")
        sum[3] += parseInt(superhero.powerstats.power, 10);
      if (superhero.powerstats.speed !== "null")
        sum[4] += parseInt(superhero.powerstats.speed, 10);
      if (superhero.powerstats.strength !== "null")
        sum[5] += parseInt(superhero.powerstats.strength, 10);

      setTeamStats({
        combat: sum[0],
        durability: sum[1],
        intelligence: sum[2],
        power: sum[3],
        speed: sum[4],
        strength: sum[5],
      });

      setAdded(true);
    } else setAdded(false);
  };

  const deleteFromTeam = (superhero) => {
    setTeam(team.filter((teamHero) => teamHero.id !== superhero.id));
    let res = [
      teamStats.combat,
      teamStats.durability,
      teamStats.intelligence,
      teamStats.power,
      teamStats.speed,
      teamStats.strength,
    ];

    if (superhero.powerstats.combat !== "null")
      res[0] -= parseInt(superhero.powerstats.combat, 10);
    if (superhero.powerstats.durability !== "null")
      res[1] -= parseInt(superhero.powerstats.durability, 10);
    if (superhero.powerstats.intelligence !== "null")
      res[2] -= parseInt(superhero.powerstats.intelligence, 10);
    if (superhero.powerstats.power !== "null")
      res[3] -= parseInt(superhero.powerstats.power, 10);
    if (superhero.powerstats.speed !== "null")
      res[4] -= parseInt(superhero.powerstats.speed, 10);
    if (superhero.powerstats.strength !== "null")
      res[5] -= parseInt(superhero.powerstats.strength, 10);

    setTeamStats({
      combat: res[0],
      durability: res[1],
      intelligence: res[2],
      power: res[3],
      speed: res[4],
      strength: res[5],
    });

    console.log(teamStats);
  };

  return (
    <>
      <Nav handleSearch={handleSearch} setInHome={setInHome} />
      {added === null ? (
        <></>
      ) : added ? (
        <div class="alert alert-success fixed-bottom alerts" role="alert">
          Added to your team!
        </div>
      ) : (
        <div class="alert alert-danger fixed-bottom alerts" role="alert">
          You can have 3 good and 3 evil heroes, and not repeat heroes
        </div>
      )}
      {inHome ? (
        <div>
          {superheros != undefined ? (
            <>
              {loading ? (
                <img
                  style={{ padding: "5rem 0" }}
                  src="https://lh3.googleusercontent.com/proxy/alUmWCg1SMSbCEyGfIWKE661T6u3nZGa81mconhsAMp4lUCT7E30t6DrpULs80NSBbXGZiYNIFNXXIipSe1KlfTb"
                />
              ) : (
                <Card
                  superheros={superheros}
                  addToTeam={addToTeam}
                  inHome={inHome}
                />
              )}
            </>
          ) : loading ? (
            <img
              style={{ padding: "5rem 0" }}
              src="https://lh3.googleusercontent.com/proxy/alUmWCg1SMSbCEyGfIWKE661T6u3nZGa81mconhsAMp4lUCT7E30t6DrpULs80NSBbXGZiYNIFNXXIipSe1KlfTb"
            />
          ) : (
            <h2 style={{ margin: "5rem 0.2rem" }}>
              Search for a superhero by name and add him to your team!
            </h2>
          )}
        </div>
      ) : team.length > 0 ? (
        <div style={{ padding: "5rem 0" }}>
          <h2>Your team</h2>
          <StatusBar teamStats={teamStats} team={team} />
          <Card
            superheros={team}
            inHome={inHome}
            deleteFromTeam={deleteFromTeam}
          />
        </div>
      ) : (
        <h2 style={{ margin: "5rem 0.2rem" }}>
          Please, go to Home, search and add a superhero to your team..
        </h2>
      )}
    </>
  );
}
