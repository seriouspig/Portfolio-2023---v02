import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import millionaires_img from "./assets/images/projects/wwtbam.png";
import grooooaar_img from "./assets/images/projects/grooooaar.gif";
import idefender_img from "./assets/images/projects/idefender.gif";
import ward_img from "./assets/images/projects/theward.png";
export const pageLinks = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/portfolio",
    text: "portfolio",
  },
  {
    id: 4,
    url: "/resume",
    text: "resume",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://facebook.com/579628308",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://linkedin.com/in/piotr-gryko-85a10077",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/seriouspig",
    icon: <FaGithub />,
  },
];

export const projects = [
  {
    id: 1,
    url: "https://www.onet.pl",
    image: idefender_img,
    title: "Id-efender",
    info: "A solo project developed as part of my Game Development Course at Edinburgh College. A spin on the 1981 Atari’s classic “Defender”.",
  },
  {
    id: 2,
    url: "https://www.onet.pl",
    image: millionaires_img,
    title: "Millionaires",
    info: "Group project developed during the CodeClan boot camp course. Based on the TV show – 'Who wants to be a millionaire'.",
  },
  {
    id: 3,
    url: "https://www.onet.pl",
    image: ward_img,
    title: "The Ward",
    info: "Another entry for the itch.io Nokia 3310 game jam. Interesting enemy AI. A full-res version for mobile devces is in the works",
  },
  {
    id: 4,
    url: "https://www.onet.pl",
    image: grooooaar_img,
    title: "GROOOOARR",
    info: "Another entry for the itch.io Nokia 3310 game jam. Interesting enemy AI. A full-res version for mobile devces is in the works",
  },
];
