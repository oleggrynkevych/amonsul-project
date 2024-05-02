import './Preview.scss';
import LOGO from '../../assets/logo.svg';
import ARROW from '../../assets/arrow.svg';


const Preview = () => {
    return (
        <section className='preview-block'>
            <div className='preview-block-container'>
                <img 
                    src={LOGO} 
                    alt={'logo'}
                    className='preview-logo'
                />

                <div className='preview-info'>
                    <div className='preview-arrow'>
                        <span>Find us on </span>
                        <img src={ARROW} alt={'arrow'}/>
                    </div>
                    

                    <div className='preview-socmedia'>
                        <a href='https://www.linkedin.com/company/amonsul-tech/' target='_blank' rel='noreferrer'>
                            <span>linkedin</span>
                        </a>

                        <a href='https://www.facebook.com/amonsul.tech' target='_blank' rel='noreferrer'>
                            <span>facebook</span>
                        </a>

                        <a href='mailto: welcome@amonsul.tech'>
                            <span>email</span>
                        </a>
                    </div>

                    <p>While our website is under development, our eyes are closely monitoring the security of your cyberspace</p>
                </div>
            </div>
        </section>
    )
}

export default Preview;
