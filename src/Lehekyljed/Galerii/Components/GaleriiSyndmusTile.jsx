import './GaleriiSyndmusTile.css'
import '../../../index.css';

export default function GaleriiSyndmusTile({pilt, title, pildistaja, kuupaev, handleClick}) {
    return (
        <div className='galeriiSyndmusTile' onClick={handleClick}>

            <div className='galeriiSyndmusTile-pilt'>
                <img src={pilt} />
            </div>

            <div className='galeriiSyndmusTile-textid'>
                <div className='normal-sub-header galeriiSyndmusTile-text galeriiSyndmusTile-title'> {title} </div>
                <div className='normal-sub-header galeriiSyndmusTile-text'> pildistas {pildistaja} </div>
                <div className='normal-sub-header galeriiSyndmusTile-text'> {kuupaev} </div>

                
            </div>
            
        </div>
    );
}  