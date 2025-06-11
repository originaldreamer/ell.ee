import '../../index.css'
import './MidTextSeparator.css'

 

export default function MidTextSeparator({text, textColor='black', bgColor = 'white', marginTop = '0px'}) {
    return (
        <div className='MidTextSeparator-container' style={{backgroundColor: bgColor, marginTop: marginTop}}>
            
            <div className='MidTextSeparator-sisu'>
                <div className='normal-text MidTextSeparator-sisu-text' style={{color: textColor}}>{text}</div>
            </div> 
        </div> 
        

         
    );
}