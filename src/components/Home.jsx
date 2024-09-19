import CardCarousel from "./Carousel";
import { useState, useEffect } from "react";

export default function Home() {
  const [medications, setMedications] = useState();
  useEffect(() => {
    fetch("https:") //drop web app address here
      .then((res) => res.json())
      .then((data) => setMedications(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <CardCarousel medications={medications} />
    </div>
  );
}
