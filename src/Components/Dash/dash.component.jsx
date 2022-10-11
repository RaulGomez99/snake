import './dash.css'

function Dash({ close, pause, num }) {


    return (
        <div className='dash'>
            <span className='close' onClick={()=>{
                pause()
                close()
            }}>X</span>
            <span className='apples'>{num}</span>
        </div>
    );
}

export default Dash;
