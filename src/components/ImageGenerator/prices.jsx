import React from 'react';
import './style.css';
import {Image} from "semantic-ui-react";
import logo from "../../images/logo2-0.png";
import logo2 from "../../images/mb2021.png";
import groupJSON from '../../jsons/groups.json';

const Price = ({userData, id, name, text1, text2, text3, color}) => {

    const user = (user, index) => {
        console.log(user)
        return (
            <div className='group-users__user all_users__user' style={{height: '180px', width: '1400px', fontSize: '119px', backgroundColor: color}} id={'grus' + index}>
                <div style={{
                    background: `linear-gradient(${user.color1}, ${user.color2})`,
                    width: '50px',
                    height: '200px',
                    marginTop: '-40px'
                }}/>
                <Image src={user.photo} avatar
                       style={{width: '135px', height: '135px', marginLeft: '20px', marginTop: '-18px'}}/>
                <div style={{width: '1200px', marginTop: '33px'}}>{user.user.toUpperCase()}</div>
            </div>
        )
    }

    console.log(userData, id, name, text1, text2, text3, color)

    return (
        <div className='image-generation__image' id={id}>
            <div className='group-users'>
                <img src={logo} height={750} style={{position: 'absolute', bottom: -12, right: -13}}/>
                <img src={logo2} height={300} style={{position: 'absolute', top: 58, left: 70}}/>

                <div className='group-users__name all-users__name price__text'>Премия</div>
                <div className='group-users__name all-users__name price__name'>{name} <span className='price__text1'>{text1}</span></div>
                <div className='group-users__name all-users__name price__text2'>{text2}</div>

                <div className='group-users__users price__user'>
                    {user(userData, '1')}
                </div>

                <div style = {{display: 'flex', marginLeft: '110px'}}>
                    <div style={{fontSize: '50px', marginTop: '-390px', maxWidth: '1200px', lineHeight: '1'}}><b><span style={{fontSize: '70px'}}>ЗА ЧТО: </span>{text3}</b></div>
                </div>
            </div>
        </div>
    )
}
export default Price;