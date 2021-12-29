import React from 'react';
import './style.css';
import usersJSON from '../../jsons/users.json';
import groupJSON from '../../jsons/groups.json';
import gamesJSON from '../../jsons/games.json';
import {Card, Icon, Image, Segment} from "semantic-ui-react";
import ImageGenerator from "../ImageGenerator";

const Groups = () => {

    const groupInfo = (group) => {
        return {
            ...group,
            users: group.users.map(u=>usersJSON.find(us=>us.id === u))
        }
    }

    return (
        <>
            {
                groupJSON.map((g, index) => (
                    <ImageGenerator type='group_users' isCreate key={index} data={groupInfo(g)} id={index}/>
                ))

            }
        </>
    )
}
export default Groups;