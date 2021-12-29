import React from 'react';
import './style.css';
import usersJSON from '../../jsons/users.json';
import pricesJSON from '../../jsons/prices.json';
import gamesJSON from '../../jsons/games.json';
import {Card, Icon, Image, Segment} from "semantic-ui-react";
import ImageGenerator from "../ImageGenerator";

const Final = () => {

    const gameInfo = (game) => {
        let gamer1 = usersJSON.find(u=>u.id === game.user1);
        let gamer2 = usersJSON.find(u=>u.id === game.user2);
        return {
            ...game,
            user1: gamer1,
            user2: gamer2,
            results: [game.result1,game.result2,game.result3,game.result4,game.result5]
        }
    }

    return (
        <>
            <div>
                <ImageGenerator key={'final'} type={'final'} data={gameInfo(gamesJSON.find(g=>g.stage === '1'))} id={'fdsfs'} isCreate/>
            </div>
            {
                pricesJSON.map((p, index) => <ImageGenerator key={'price'} type={'price'} data={{...p, userData: usersJSON.find(u=>u.id === p.user)}} id={index} isCreate/>)
            }
        </>
    )
}
export default Final;