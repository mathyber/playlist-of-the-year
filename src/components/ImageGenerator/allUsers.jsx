import React, {useEffect, useState} from 'react';
import './style.css';
import logo from "../../images/logo2-0.png";
import logo2 from "../../images/mb2021.png";
import {Image} from "semantic-ui-react";
import usersJSON from '../../jsons/users.json';
import groupJSON from "../../jsons/groups.json";


const AllUsers = ({id, users, matches, stage, round, bottomPosition, height}) => {
    console.log(id, users, bottomPosition, height)
    //
    // const rez = (type) => {
    //     let color1;
    //     let color2;
    //     switch (type) {
    //         case 1: {
    //             color1 = 'rgb(24,255,0)';
    //             color2 = 'rgb(17,196,0)';
    //             break
    //         }
    //         case 2: {
    //             color1 = 'rgb(0,140,255)';
    //             color2 = 'rgb(0,97,175)';
    //             break
    //         }
    //         case 3: {
    //             color1 = 'rgb(255,0,0)';
    //             color2 = 'rgb(180,0,0)';
    //             break
    //
    //         }
    //         default : {
    //             color1 = 'rgba(255,0,0,0)';
    //             color2 = 'rgba(180,0,0,0)';
    //             break
    //         }
    //     }
    //     ;
    //     let bg = `linear-gradient(${color1}, ${color2})`;
    //     return <div style={{background: bg, width: '40px', height: '100px', marginTop: '-40px'}}/>
    // }

    const usersOfMatch = (match) => {
        return [
            usersJSON.find(user=>user.id===match.user1),
            usersJSON.find(user=>user.id===match.user2)
        ]
    }

    const user = (user, index) => {
        console.log(user)
        return (
            <div className='group-users__user all_users__user' id={'grus' + index}>
                <div style={{
                    background: `linear-gradient(${user.color1}, ${user.color2})`,
                    width: '50px',
                    height: '100px',
                    marginTop: '-40px'
                }}/>
                <Image src={user.photo} avatar
                       style={{width: '60px', height: '60px', marginLeft: '20px', marginTop: '-18px'}}/>
                <div style={{width: '700px'}}>{user.user.toUpperCase()}</div>

            </div>
        )
    }


    const text = (stage, round) => {
        switch (stage) {
            case 'group' : return "ГРУППОВОЙ ЭТАП - ТУР "+round;
            case '1/8' : return "1/8 финала";
            case '1/4' : return "ЧЕТВЕРТЬФИНАЛ";
            case '1/2' : return "ПОЛУФИНАЛ";
            case '1' : return "ФИНАЛ";
            default : return 'ВСЕ УЧАСТНИКИ'
        }
    }

    console.log(matches)

    const [h, setH] = useState(-1512);
    useEffect(()=> {
        bottomPosition && setH(bottomPosition)
    }, [bottomPosition])


    return (
        <div className='image-generation__image all-users' style={{height: parseInt(height), maxHeight: parseInt(height), backgroundColor: 'black'}} id={id}>
            <div className='group-users'>
                <img src={logo} style={{position: 'absolute', bottom:  parseInt(h), right: -13}}/>
                <img src={logo2} height={250} style={{position: 'absolute', top: 65, left: 70}}/>

                <div className='group-users__name all-users__name'>{text(stage, round)}</div>
                <div className='group-users__users'>
                    {matches?
                        matches.map(m=><div style={{marginBottom: '40px'}}>{usersOfMatch(m).map((u, index) => user(u, index))}</div>)
                        :users.map((u, index) => user(u, index))}
                </div>
            </div>
        </div>
    )
}
export default AllUsers;