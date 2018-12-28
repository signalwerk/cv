import React from "react";
import { ListRoot, ListItem, ListCol } from "../List";
import "./styles.css";

import StefanHuber from "./img/StefanHuber1673k.jpg";
import Signalwerk from "./img/signalwerk.svg";

const Avatar = ({ children }) => (
  <div className="avatar">
    <ListRoot>
      <ListItem>
        <ListCol column={0}>
          <div className="avatar--icon">
            <img className="avatar--img" src={Signalwerk} alt="Stefan Huber" />
          </div>
        </ListCol>
        <ListCol column={1}>
          <img className="avatar--img" src={StefanHuber} alt="Stefan Huber" />
        </ListCol>
      </ListItem>
    </ListRoot>
  </div>
);

export default Avatar;
