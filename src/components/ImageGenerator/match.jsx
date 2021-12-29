import React from 'react';
import './style.css';
import {Image} from "semantic-ui-react";
import logo from "../../images/logo2-0.png";
import logo2 from "../../images/mb2021.png";
import groupJSON from '../../jsons/groups.json';

const Match = ({user1, user2, results = [], stage, round, group = '', id, datetime, live = false}) => {

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
            <div className='group-users__user all_users__user' style={{height: '150px', width: '1400px', fontSize: '109px'}} id={'grus' + index}>
                <div style={{
                    background: `linear-gradient(${user.color1}, ${user.color2})`,
                    width: '50px',
                    height: '200px',
                    marginTop: '-40px'
                }}/>
                <Image src={user.photo} avatar
                       style={{width: '105px', height: '105px', marginLeft: '20px', marginTop: '-18px'}}/>
                <div style={{width: '1100px', marginTop: '18px'}}>{user.user.toUpperCase()}</div>
                <div style={{width: '50px', marginTop: '18px', textAlign: 'end'}}>{summResult(user)}</div>

            </div>
        )
    }

    return (
        <div className='image-generation__image' id={id}>
            <div className='group-users'>
                <img src={logo} height={750} style={{position: 'absolute', bottom: -12, right: -13}}/>
                <img src={logo2} height={250} style={{position: 'absolute', top: 65, left: 70}}/>
                <div style={{position: 'absolute', top: 65, right: 170}}>
                    {live && <b>
                        <span style={{color: 'gray', fontSize: '30px', padding: '10px 30px 10px 30px'}}>EUROBUNKER / TOURNIRKEN</span>
                        <span style={{backgroundColor: 'red', color: 'white', fontSize: '100px', padding: '10px 30px 10px 30px'}}>LIVE</span>
                    </b>}
                </div>

                <div className='group-users__name all-users__name'>{text(stage)}
                </div>
                <div className='group-users__users'>
                    {user(user1, '1')}
                    {user(user2, '2')}
                </div>

                <div style = {{display: 'flex', marginLeft: '110px'}}>
                    <div style={{
                        background: '#ff3800',
                        width: '50px',
                        height: '100px',
                        marginTop: '-240px'
                    }}/>
                    {results.map(res=> result(res) && <div style={{
                        background: `linear-gradient(${result(res).color1}, ${result(res).color2})`,
                        width: '50px',
                        height: '100px',
                        marginTop: '-240px'
                    }}/>)}
                    <div style={{fontSize: '70px', marginTop: '-200px', marginLeft: "30px"}}><b>{datetime}</b></div>
                </div>
            </div>
        </div>
    )
}
export default Match;