import React from 'react';
import './style.css';
import jsonTracks from '../jsons/1.json';
import TrackCard from "../components/Track";
import Footer from "../components/Footer";

const HomePage = () => {
    console.log('Кол-во треков: ', jsonTracks.length)
    return (
        <div className='playlist background_orange mesh-gradient'>
            <div className='playlist__header background'>
                <div className='playlist__text playlist__title'>Мой плейлист года 2021</div>
                <div className='playlist__text playlist__description'>@mathyber</div>
            </div>
            <div className='playlist__tracks'>
                {
                    jsonTracks.map(track => <TrackCard {...track}/>)
                }
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage;
