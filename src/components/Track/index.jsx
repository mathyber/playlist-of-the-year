import React, {useRef} from 'react';
import './style.css';

const Text = ({className, text}) => {
    const ref = useRef(null);
    return <div className={className} ref={ref}>{text}</div>
}


const TrackCard = ({name, artist, imageLink}) => {

    return (
        <div className='track background' style={{backgroundImage: `url(${imageLink})`}}>
            <div className='track__info'>
                <Text className={'track__artist'} text={artist}/>
                <Text className={'track__name'} text={name}/>
            </div>
        </div>
    )
}
export default TrackCard;