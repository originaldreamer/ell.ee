import '../../index.css'
import './HeaderSeparatorOne.css'



export default function HeaderSeparatorOne({text}) {
    return (
        <div className='HeaderSeparatorOne-container'>
            <div className='HeaderSeparatorOne-line' />
            <div className='big-header' style={{marginTop:'22px',marginBottom:'22px', textAlign:'center'}}>{text}</div >
            <div className='HeaderSeparatorOne-line' />

            
        </div>
        

        
    );
}