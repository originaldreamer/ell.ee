import './UudisLehtGaleriiTile.css'

export default function UudisLehtGaleriiTile({pilt, handleClick}) {
    return (
        <div className='uudisLehtGaleriiTile' onClick={handleClick}>
            <img src={pilt} />
        </div>
    );
} 