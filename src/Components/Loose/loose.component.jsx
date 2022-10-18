import React, { useEffect } from 'react';
import './loose.css'
import Apple from '../../img/apple.png'
import Trophy from '../../img/trophy.png'
import { useCookies } from 'react-cookie';

function Loose({ num, init }) {
    const [cookies, setCookie] = useCookies(['bestScore']);

    useEffect(() => {
        if (!cookies.bestScore) {
            setCookie('bestScore', num)
        }
        if (num > cookies.bestScore) {
            setCookie('bestScore', num)
        }
    })

    return (
        <div>
            <div className='looseBackground' />
            <div className='loose'>
                <div className='scores'>
                    <img src={Apple} alt="" className='looseImage' />
                    <img src={Trophy} alt="" className='looseImage' />
                    <span className='apples_loose'>{num}</span>
                    <span className='apples_loose'>{cookies.bestScore}</span>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={() => init()}>                     <img src="//fonts.gstatic.com/s/i/googlematerialicons/play_arrow/v6/white-24dp/2x/gm_play_arrow_white_24dp.png" alt="" />
                        <h2>Jugar</h2></button>
                </div>
            </div>
        </div>

    );
}

export default Loose;
