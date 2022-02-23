import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div
      className="item"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", margin: "7px 5rem" }}
          onClick={() => props.clickHander(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
