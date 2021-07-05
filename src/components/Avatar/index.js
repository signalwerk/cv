import React from "react";
import { ListRoot, ListItem, ListCol } from "../List";
import "./styles.css";

import StefanHuber from "./img/StefanHuber1673k.jpg";
import Signalwerk from "./img/signalwerk.svg";

const Avatar = ({ children }) => (
  <div className="avatar">
    <ListRoot>
      <ListItem>
        <ListCol column={0} noInner={true}>
          <span className="avatar--icon">
            <a
              href="https://avatar.signalwerk.ch/"
              className="avatar--link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="avatar--img"
                src={Signalwerk}
                alt="Stefan Huber"
              />
            </a>
          </span>
        </ListCol>
        <ListCol column={1} noInner={true}>
          <img className="avatar--img" src={StefanHuber} alt="Stefan Huber" />
        </ListCol>
      </ListItem>
    </ListRoot>
  </div>
);

export default Avatar;
