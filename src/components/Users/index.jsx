import React, {useState} from 'react';
import './style.css';
import usersJSON from '../../jsons/users.json';
import {Card, Dropdown, Icon, Image, Input, Segment, Select} from "semantic-ui-react";
import ImageGenerator from "../ImageGenerator";
import gamesJSON from '../../jsons/games.json';


const Users = () => {

    const User = ({user}) => {
        return (
            <Card style={{margin: '10px', marginBottom: '20px', minWidth: '370px', width: '23%'}}>
                <Card.Content style={{backgroundColor: user.color1, width: '100%', height: '20px'}}/>
                <Card.Content style={{backgroundColor: user.color2, width: '100%', height: '20px'}}/>
                <Card.Content>
                    <Card.Header className='font-poppins' style={{fontSize: '25px'}}>
                        <Image src={user.photo} avatar style={{width: '44px', height: '44px', marginTop: '-5px'}}/>
                        {user.user.toUpperCase()}
                        <a style={{marginLeft: '10px'}} href={`https://vk.com/${user.id}`}>
                            <Icon name='vk'/>
                        </a>
                    </Card.Header>
                    <Card.Description style={{fontSize: '20px'}}>
                        {/*Группа {user.group}*/}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }

    let users = usersJSON;
    const [stage, setStage] = useState(null);
    const [round, setRound] = useState(null);
    const [bottomPosition, setBottomPosition] = useState(null);
    const [height, setHeight] = useState(2580);
    console.log(bottomPosition)
    return (
        <>
            <Card.Group className='users-page' centered>
                {
                    users.map(usr => (
                        <User user={usr}/>
                    ))
                }
            </Card.Group>
            <Select placeholder='Стадия' onChange={(e, {name, value}) => setStage(value)}
                    options={unique(gamesJSON.map(g => g.stage)).map(game => {
                        return {key: game, value: game, text: game}
                    })}/>
            <Select placeholder='Тур' onChange={(e, {name, value}) => setRound(value)}
                    options={unique(gamesJSON.map(g => g.round)).map(game => {
                        return {key: game, value: game, text: game}
                    })}/>
            <Input onChange={(e, {value})=>setBottomPosition(value)} value={bottomPosition}/>
            <Input onChange={(e, {value})=>setHeight(value)} value={height}/>
            <ImageGenerator type='all_users' isCreate key={'gfg'} data={{
                bottomPosition: bottomPosition,
                height: height,
                users,
                round,
                stage,
                matches: gamesJSON.filter(g => g.round === round && g.stage === stage)
            }} id={"index"}/>
        </>
    )
}
export default Users;