import './UudisLehtHeader.css';
import '../../../index.css'

export default function UudisLehtHeader({ title, date, pilt, pildiAutor }) {
    return (
        <div className='uudisLehtHeader-container'>
            <div className='uudisLehtHeader-bg' />

            <div className='uudisLehtHeader'>
                <div className='big-header2' >{title}</div>

                <div className='uudisLehtHeader-line' />
                
                <div className='uudisLehtHeader-date'>
                    <div className='small-text' style={{color: '#EFA900'}}>{date}</div>

                </div>
                
                <img className='uudisLehtHeader-pilt' src={pilt} style={{width: '100%'}}/>
                
                {pildiAutor && 
                    <div className='uudisLehtHeader-pildiAutor'>
                        <div className='small-text' style={{color: '#EFA900'}}>Foto: {pildiAutor}</div>
                    </div>
                }
                
                
            </div>
        </div>
        

    );
}