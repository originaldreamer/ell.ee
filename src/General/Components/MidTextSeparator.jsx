import '../../index.css'
import './MidTextSeparator.css'



export default function MidTextSeparator({text, textColor='black', bgColor = 'white', marginTop = '0px'}) {
    return (
        <div className='MidTextSeparator-container' style={{backgroundColor: bgColor, marginTop: marginTop}}>
            
            <div className='MidTextSeparator-sisu'>
                <div className='normal-text' style={{color: textColor, textAlign: 'center'}}>{text}</div>
            </div>
        </div>
        

        
    );
}