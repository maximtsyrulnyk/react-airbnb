import { Fragment } from "react";

import Box from "../box"

import Heading from "../heading";

import "./index.css";

export default function Review({list}) {
    return (
    <div className="review__block">
        <Heading border>Відгуки клієнтів</Heading>

        <div className="room__list">
            {list.map(({id, ...rest}) => (
                <Fragment key={id}>
                    <Item {...rest}/>
                </Fragment>
            ))}
        </div>
        </div>
    );
}

function Item ({id, pricePerNight: price, currency, name}) {
    return (
        <Box className="room">
            <span className="room__title">{id}</span>
            <span className="room__info"> {name}</span>
            <span className="room__price">
                {currency}
                {price}
            </span>
        </Box>
    );
}