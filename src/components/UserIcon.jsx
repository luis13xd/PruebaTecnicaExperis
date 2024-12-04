import React from 'react';
import PropTypes from "prop-types";
import generateColor from "../utils/GenerateColor";

const UserIcon = ({ userId = 0 }) => (
  <div
    style={{
      backgroundColor: generateColor(userId),
      color: "#fff",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
  >
    {userId}
  </div>
);

UserIcon.propTypes = {
  userId: PropTypes.number,
};

export default UserIcon;
