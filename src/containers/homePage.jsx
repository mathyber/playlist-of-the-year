import React from 'react';
import './style.css';
// import jsonTracks from '../jsons/1.json';
import TrackCard from "../components/Track";
import Footer from "../components/Footer";
import {parseTracksData} from "../utils/parse";
import t from "../jsons/1"

const HomePage = () => {
    const tracks = parseTracksData(t)
    console.log('Кол-во треков: ', tracks.length)
    return (
        <div className='playlist background_white'>
            <div className='playlist__header background'>
                <div className='playlist__text playlist__title'>Мой плейлист года 2024</div>
                <div className='playlist__text playlist__description'>@mathyber</div>
            </div>
            <div className='playlist__tracks'>
                {
                    tracks.map((track, i) => <TrackCard key={i} {...track}/>)
                }
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage;
