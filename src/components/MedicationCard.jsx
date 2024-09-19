import React from "react";
import dogImage from "../Assets/dog-solid.svg";
import catImage from "../Assets/cat-solid.svg";

export default function MedicationCard({ medication }) {
  return (
    <div className="card-body">
      <p className="card-header">{`${medication?.name}`}</p>
      <p className="card-uses">
        <b>Common Uses:</b> {`${medication?.uses}`}
      </p>
      <p class="card-category">
        <b>Medication Category:</b> {`${medication?.category}`}
      </p>
      <p className="card-contra">
        <b>Contraindications:</b> {`${medication?.contraindication}`}
      </p>
      <p className="card-species">
        {medication?.canine ? (
          <img src={dogImage} alt="dog icon" title="Canine" />
        ) : (
          ""
        )}
        {medication?.feline ? (
          <img src={catImage} alt="cat icon" title="Feline" />
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
