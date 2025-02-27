import './UudisedGaleriiTile.css'

export default function UudisedGaleriiTile({pilt}) {
    return (
        <div className='uudisedGaleriiTile'>
            <img src={pilt} />
        </div>
    );
}