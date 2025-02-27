import './UudisedGalerii.css'

//imported components
import UudisedGaleriiTile from './UudisedGaleriiTile';


export default function UudisedGalerii({pildid}) {
    return (
        <div className='uudisedGalerii-container'>
            {pildid &&
                <div>
                    <div className='uudisedGalerii-line' />
                    <div className='big-header' style={{marginTop:'22px',marginBottom:'22px', textAlign:'center'}}>Galerii</div >

                    <div className='uudisedGalerii-line' />
                    <div className='uudisedGalerii-grid'>
                        {pildid.map((pilt, index) => (
                            <UudisedGaleriiTile key={index} pilt={pilt} />
                        ))}
                    </div>
                </div>
            }

            
        </div>
        

        
    );
}