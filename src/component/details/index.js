import React from "react";
import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import guestsLogo from "./svg/guests_logo.svg";
import bedroomLogo from "./svg/bedroom_logo.svg";
import bedLogo from "./svg/bed.svg";
import bathroomLogo from "./svg/bathroom.svg";

export const Details = ({guests, bedrooms, beds, baths}) => {
    return (
        <Box shadow classname="details">
            <Heading border>Деталі властивості:</Heading>
            <ListItem imageSrc={guestsLogo}>Гостей: {guests}</ListItem>
            <ListItem imageSrc={bedroomLogo}>Спалень: {bedrooms}</ListItem>
            <ListItem imageSrc={bedLogo}>Ліжок: {beds}</ListItem>
            <ListItem imageSrc={bathroomLogo}>Ванних кімнат: {baths}</ListItem>
        </Box>
    );
};