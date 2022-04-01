import './style.css'
import Logo from '../../assets/logo-boti.png'
import LogoFacebook from '../../assets/facebook.svg'
import LogoInstagram from '../../assets/instagram.svg'

function Footer() {
    return (
        <footer>
            <div className='left-footer'>
                <div className='container-address'>
                    <strong>Sede</strong>
                    <span>Grupo Boticário</span>
                    <span>São José dos Pinhais, Paraná</span>
                </div>
                <div className='container-social'>
                <img src={LogoFacebook} alt="Logo Facebook" />
                <img src={LogoInstagram} alt="Logo Instagram" />
                </div>
            </div>
            <div className='vertical-line'></div>
            <div className='right-footer'>
                <img src={Logo} alt="Logo Footer" />

            </div>
        </footer>
    )
}

export default Footer;