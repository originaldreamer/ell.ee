import './UudisedGaleriiTile.css'

export default function UudisedGaleriiTile({pilt, handleClick}) {
    return (
        <div className='uudisedGaleriiTile' onClick={handleClick}>
            <img src={pilt} />
        </div>
    );
}