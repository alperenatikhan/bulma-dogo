import React from "react";
import FadeIn from "react-fade-in";
import "./styles.css";
import { GiDogHouse } from "react-icons/gi";

function DogoCard(props) {
  let { id, title, photo, location, link } = props.item;

  return (
    <>
      <div
        className="card"
        key={id}
        style={{
          minWidth: "180px",
          maxWidth: "320px",
          margin: "1rem auto",
          border: "1px solid lightgray",
          borderRadius: "0.5rem",
          padding: "1rem 1.5rem 1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FadeIn>
          <h4
            style={{
              margin: "0rem 0 1rem 0",
              width: "80%",
              fontFamily: "Playfair Display",
              fontWeight: "600"
            }}
          >
            {title}
          </h4>
          <img
            alt={title}
            src={photo}
            style={{ width: "95%", height: "10rem", margin: "auto" }}
          />
          <p style={{ margin: "0.5rem 0 0.5rem 0" }}>
            <GiDogHouse /> {location}{" "}
          </p>
          <a href={link} target="_blank">
            <button className="button is-fullwidth is-warning ">
              {" "}
              Visit Page{" "}
            </button>
          </a>
        </FadeIn>
      </div>
    </>
  );
}

export default DogoCard;
