import './PildidGaleriiTile.css'

export default function PildidGaleriiTile({pilt, handleClick}) {
    return (
        <div className='pildidGaleriiTile' onClick={handleClick}>
            <img src={pilt} />
        </div>
    );
}  