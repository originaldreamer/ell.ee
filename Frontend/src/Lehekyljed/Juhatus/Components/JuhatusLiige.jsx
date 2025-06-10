import {usestate} from 'react'
import '../../../index.css'
import './JuhatusLiige.css'
import LinkUnderlined from '../../../General/Components/LinkUnderlined.jsx';


export default function JuhatusLiige({pilt, nimi, kool, roll, meil, telefon}) {
    return (
        <div className='juhatusLiige-container'>
            <div className='juhatusLiige-pilt'>
                <img src={pilt} />
            </div>

            <div className='juhatusLiige-bottom'>
                <div className='mid-small-top-header juhatusLiige-nimi' style={{marginTop: '12px'}}> {nimi} </div>

                <div className='juhatusLiige-bottom-tekst'>
                    <div className='normal-text-white juhatusLiige-profile-text'>{roll}</div>
                    <div className='normal-text-white juhatusLiige-profile-text'>{kool}</div>
                    <div className='juhatusLiige-profile-kontakt-text'>
                        <LinkUnderlined display={meil} normalColor='#F5F5F5'/>
                    </div>
                    <div className='juhatusLiige-profile-kontakt-text'>
                        <LinkUnderlined display={"telefon: " + telefon} normalColor='#F5F5F5'/>
                    </div> 

                    
                </div>

                
            </div> 
        </div>
    );
}
