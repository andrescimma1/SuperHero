import axios from "axios";
import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav.jsx";
import Card from "../../components/Card/Card.jsx";
import StatusBar from "../../components/StatusBar/StatusBar.jsx";

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

  useEffect(() => {
    console.log(teamStats);
  }, [team, teamStats]);

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

      console.log(superhero);

      console.log(teamStats);
    }
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
          <StatusBar teamStats={teamStats} team={team} />
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
