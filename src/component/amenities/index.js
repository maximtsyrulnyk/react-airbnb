import React from "react";
import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import poolLogo from "./svg/pool_logo.svg";
import gymLogo from "./svg/gym_logo.svg";
import breakfastLogo from "./svg/breakfast_logo.svg";
import wifiLogo from "./svg/wi-fi_logo.svg";
import parkingLogo from "./svg/parking_logo.svg";
import petLogo from "./svg/pet_logo.svg";
import transferLogo from "./svg/transfer_logo.svg";
import conciergeServiceLogo from "./svg/concierge-service_logo.svg";
import roomServiceLogo from "./svg/room_service_logo.svg";
import suitableForChildrenLogo from "./svg/suitable_for_children_logo.svg";

export const Amenities = ({pool, gym, breakfast, wifi, parking, pet, transfer, conciergeService, roomService, suitableForChildren}) => {
  return (
      <Box shadow classname="amenities">
          <Heading border>Зручності:</Heading>
          <ListItem imageSrc={poolLogo}>Басейн: {pool}</ListItem>
          <ListItem imageSrc={gymLogo}>Спортивний зал: {gym}</ListItem>
          <ListItem imageSrc={breakfastLogo}>Безкоштовний сніданок: {breakfast}</ListItem>
          <ListItem imageSrc={wifiLogo}>Безкоштовний Wi-Fi: {wifi}</ListItem>
          <ListItem imageSrc={parkingLogo}>Безкоштовний вуличний паркінг: {parking}</ListItem>
          <ListItem imageSrc={petLogo}>Дозволено розміщення з домашніми тваринами: {pet}</ListItem>
          <ListItem imageSrc={transferLogo}>Трансфер до/з аеропорту: {transfer}</ListItem>
          <ListItem imageSrc={conciergeServiceLogo}>Консьєрж-сервіс: {conciergeService}</ListItem>
          <ListItem imageSrc={roomServiceLogo}>Обслуговування номерів: {roomService}</ListItem>
          <ListItem imageSrc={suitableForChildrenLogo}>Підходить для дітей: {suitableForChildren}</ListItem>
      </Box>
  );
};