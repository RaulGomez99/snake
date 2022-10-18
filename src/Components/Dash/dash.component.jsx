import { useCookies } from 'react-cookie';
import './dash.css'

function Dash({ close, pause, num }) {

    const [cookies, setCookie] = useCookies(['bestScore']);

    return (
        <div className='dash'>
            <span className='close' onClick={()=>{
                pause()
                close()
            }}>X</span>
            <span className='apples'>{num}</span>
            {cookies.bestScore ? <span className='record'>{
                cookies.bestScore < num ? num : cookies.bestScore
            }</span> : null}
        </div>
    );
}

export default Dash;
