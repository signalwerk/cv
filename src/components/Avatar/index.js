import React from "react";
import { ListItem, ListCol } from "../List";
import "./styles.css";

import StefanHuber from "./img/StefanHuber1673k.jpg";
import Signalwerk from "./img/signalwerk.svg";

const Avatar = ({ children }) => (
  <div className="avatar">
    <ListItem>
      <ListCol column={0}>
        <div className="avatar--round">
          <img className="avatar--img" src={Signalwerk} alt="Stefan Huber" />
        </div>
      </ListCol>
      <ListCol column={1}>
        <img className="avatar--img" src={StefanHuber} alt="Stefan Huber" />
      </ListCol>
    </ListItem>
  </div>
);

export default Avatar;
