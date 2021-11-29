import axios from "axios";
import { useState } from "react";
import Nav from "../../components/Nav/Nav.jsx";
import Card from "../../components/Card/Card.jsx";

export default function Home(props) {
  //   const [loading, setLoading] = useState(true);
  const API_KEY = "4382962791714286";
  const [superheros, setSuperheros] = useState(undefined);

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

  return (
    <>
      <Nav handleSearch={handleSearch} />
      <div>
        {superheros != undefined ? (
          <>
            <Card superheros={superheros} />
          </>
        ) : (
          <>No results..</>
        )}
      </div>
    </>
  );
}
