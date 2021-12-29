import React from 'react';
import './style.css';
import logo from '../../images/mb2021.png'

const Logo = ({id}) => {

    return (
        <div className='image-generation__image logo-background' id={id}>
            <div className='logo-background__name'>
                <img src={logo} height={1100} style={{marginRight: '700px'}}/>
                <div className="ribbon bottom-right">
                    <div style={{marginTop: '50px', marginLeft: '20px', fontSize: '100px'}}>
                        <b>ЧЕМПИОНАТ БУНКЕРА</b>
                    </div>
                    <div style={{marginTop: '80px', marginLeft: '20px', fontSize: '80px'}}>
                        ПО МОРСКОМУ БОЮ
                    </div>
                    <div style={{marginTop: '110px', marginLeft: '20px', fontSize: '180px'}}>
                        <b>2021</b>
                    </div>
                </div>
            </div>
            <div>
                {/*<div*/}
                {/*    style={{color: 'white', fontSize: '27px', marginTop: '-100px', marginLeft: '100px', opacity: .3}}*/}
                {/*>*/}
                {/*    <b>mathyber / TOURNIRKEN / EUROBUNKER</b>*/}
                {/*</div>*/}
                <div style={{color: 'white', fontSize: '27px', marginTop: '-100px', marginLeft: '100px', opacity: .3}}>
                    <b>TOURNIRKEN / mathyber</b>
                </div>
                <div style={{color: 'white', fontSize: '27px', marginTop: '-65px', marginLeft: '100px', opacity: .3}}>
                    <b>© EUROBUNKER, 2021</b>
                </div>
                <div style={{color: 'white', fontSize: '27px', marginTop: '-65px', marginLeft: '100px'}}>
                    <b>ЧЕМПИОНАТ БУНКЕРА ПО МОРСКОМУ БОЮ 2021</b>
                </div>
            </div>
        </div>
    )
}
export default Logo;