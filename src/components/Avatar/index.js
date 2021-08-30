import React from "react";
import { ListRoot, ListItem, ListCol } from "../List";
import "./styles.css";

const Avatar = ({ children }) => (
  <div className="avatar">
    <ListRoot>
      <ListItem>
        <ListCol column={0} noInner={true}>
          <span className="avatar--icon">
            <a
              href="https://avatar.signalwerk.ch/"
              className="avatar--link print-no-href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="avatar--img"
                src="https://avatar.signalwerk.ch/latest/signalwerk.svg"
                alt="Stefan Huber"
              />
            </a>
          </span>
        </ListCol>
        <ListCol column={1} noInner={true}>
          <img
            className="avatar--img"
            src="https://portrait.signalwerk.ch/illustration/2020/rgb/w2000/stefan-huber.jpg"
            alt="Stefan Huber"
          />
          <span className="small">
            Illustration by{" "}
            <a
              href="http://www.guedel.biz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Benjamin Güdel
            </a>{" "}
            · 2020
          </span>
        </ListCol>
      </ListItem>
    </ListRoot>
  </div>
);

export default Avatar;
