import React, { Fragment } from 'react';
import Heading from '../heading';
import ListItem from '../list-item';
import './index.css';
import Box from '../box';

export default function Attractions ({id, name, link}) {
    return (
        <Box shadow classname="attractions">
            <Heading>Пам'ятки поблизу</Heading>
            {list.map(({id, name, link}) => (
                <Fragment key={id}>
                    <ListItem>
                        <a href={`http://${link}`} target="_blank">{name}</a>
                    </ListItem>
                </Fragment>
            ))}
        </Box>
    );
}