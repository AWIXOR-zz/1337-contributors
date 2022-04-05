import React, { FC } from "react";

type Props = {
  firstName: string;
  lastName: string;
  github: string;
  bio: string;
  index: number;
};

const ContainerStyles = {
  width: "50%",
  maxWidth: `300px`,
  minWidth: "260px",
  margin: "auto",
  marginBottom: `1.45rem`,
  marginTop: 0,
};
const AvatarStyles: any = {
  position: "relative",
  maxWidth: `300px`,
  minWidth: "260px",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
};

const userNameStyles: any = {
  display: "inline",
  position: "absolute",
  minWidth: 120,
  bottom: 0,
  left: "38%",
  fontSize: 19,
  fontWeight: "bold",
  padding: "5px  10px",
  background: `linear-gradient(90deg, #ea472c 0%, rgba(234,71,44,1) 53%, rgba(234,71,44,0.8130602582830007) 100%)`,
  border: `2.63922px solid #212121`,
  boxSizing: "border-box",
  boxShadow: `0px 131.961px 263.922px rgba(0, 0, 0, 0.2)`,
  borderRadius: `7.5px`,
  transform: `rotate(-4deg)`,
  color: "#FFF",
};
const imgStyle: any = {
  borderRadius: "50%",
  border: "3px #e3462b solid",
};

const bioStyles: any = {
  fontSize: 15,
  textAlign: "center",
  color: "#ffffff",
  fontWeight: "bold",
  padding: "0px 20px",
};

const User: FC<Props> = ({ firstName, lastName, github, bio, index }) => (
  <div style={ContainerStyles}>
    <a href={`https://github.com/${github}`} target="_blank">
      <div style={AvatarStyles}>
        {/* <Avatar github={github} index={index} /> */}
        <img
          style={imgStyle}
          // transform="translate(-.01) scale(.00106)"
          width="260"
          height="255"
          src={`https://github.com/${github}.png?size=${400 + index}`}
        ></img>

        <p style={userNameStyles}>
          {firstName} <br /> {lastName}
        </p>
      </div>
    </a>

    <p style={bioStyles}>{bio}</p>
  </div>
);

export default User;
