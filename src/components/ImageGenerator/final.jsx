import React from 'react';
import './style.css';
import {Image} from "semantic-ui-react";
import logo from "../../images/logo2-0.png";
import logo2 from "../../images/mb2021.png";
import groupJSON from '../../jsons/groups.json';

const FinalGame = ({user1, user2, results = [], stage, round, group = '', id, datetime}) => {

    const result = (result) => {
        switch (result) {
            case user1.id : return user1;
            case user2.id : return user2;
            default : return null
        }
    }

    const summResult = (user) => {
        return results.filter(r => r === user.id).length
    }

    const text = (stage) => {
        switch (stage) {
            case 'group' : return "ГРУППА "+groupJSON.find(g=>g.users.includes(user1.id)).name+" - ТУР "+round;
            case '1/8' : return "1/8 финала";
            case '1/4' : return "ЧЕТВЕРТЬФИНАЛ";
            case '1/2' : return "ПОЛУФИНАЛ";
            case '1' : return "ФИНАЛ";
        }
        return 'ТОВАРИЩЕСКИЙ МАТЧ';
    }

    const user = (user, index) => {
        console.log(user)
        return (
            <div className='group-users__user all_users__user' style={{height: '180px', width: '1360px', fontSize: '119px'}} id={'grus' + index}>
                <div style={{
                    background: `linear-gradient(${user.color1}, ${user.color2})`,
                    width: '50px',
                    height: '200px',
                    marginTop: '-40px'
                }}/>
                <Image src={user.photo} avatar
                       style={{width: '135px', height: '135px', marginLeft: '20px', marginTop: '-18px'}}/>
                <div style={{width: '1100px', marginTop: '33px'}}>{user.user.toUpperCase()}</div>
            </div>
        )
    }

    return (
        <div className='image-generation__image' id={id}>
            <div className='group-users'>
                <img src={logo} height={750} style={{position: 'absolute', bottom: -12, right: -13}}/>
                <img src={logo2} height={250} style={{position: 'absolute', top: 65, left: 70}}/>

                <div className='group-users__name all-users__name'>{text(stage)}</div>
                <div className='group-users__users'>
                    {user(user1, '1')}
                    {user(user2, '2')}
                </div>

                <div style = {{display: 'flex', marginLeft: '110px'}}>
                    <div style={{fontSize: '70px', marginTop: '-210px', marginLeft: "30px", lineHeight: '1.2'}}>
                        <b>2 ДЕКАБРЯ 2021</b>
                        <br/>
                        ПРЕДМАТЧЕВАЯ СТУДИЯ - <b>18:30 </b>мск
                        <br/>
                        ФИНАЛ - <b>19:10</b> мск
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinalGame;