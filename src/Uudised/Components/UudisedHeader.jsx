import './UudisedHeader.css';
import '../../index.css'

export default function UudisedHeader({ title, date, pilt, pildiAutor }) {
    return (
        <div className='uudisedHeader-container'>
            <div className='uudisedHeader-bg' />

            <div className='uudisedHeader'>
                <div className='big-header2' style={{color:"#F5F5F5"}}>{title}</div>

                <div className='uudisedHeader-line' />
                
                <div className='uudisedHeader-date'>
                    <div className='small-text-white' >{date}</div>

                </div>
                
                <img className='uudisedHeader-pilt' src={pilt} style={{width: '100%'}}/>
                
                {pildiAutor && 
                    <div className='uudisedHeader-pildiAutor'>
                        <div className='small-text-white' >Foto: {pildiAutor}</div>
                    </div>
                }
                
                
            </div>
        </div>
        

    );
}