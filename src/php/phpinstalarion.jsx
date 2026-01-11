import './phps.css'
import frist from '/public/screens/1.png'
import frist1 from '/public/screens/2.png'
import frist2 from '/public/screens/3.png'
import frist3 from '/public/screens/4.png'
import frist4 from '/public/screens/5.png'
import frist5 from '/public/screens/6.png'
import frist6 from '/public/screens/7.png'
import frist7 from '/public/screens/8.png'
import frist8 from '/public/screens/9.png'
import frist9 from '/public/screens/10.png'
import frist10 from '/public/screens/11.png'
import frist11 from '/public/screens/12.png'
import frist12 from '/public/screens/13.png'

export default function Phpinstalation() {
  const xamppUrl =
    'https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.0.30/xampp-windows-x64-8.0.30-0-VS16-installer.exe'

  const handleDownload = () => {
    window.open(xamppUrl, '_blank')
  }

  return (
    <div className="content">
      <h1>
        1. Install XAMPP
        <img src="/download.png" alt="Download" />
      </h1>
    
      <img src="/pngwing.com.png" alt="XAMPP" />
      <div className="contents">
        <div className="install">
          <h3>XAMPP – version x64-8.0.30</h3>
          <button className="link" onClick={handleDownload}>
            Download XAMPP
          </button>
        </div>
      </div>
      <div className='intruction'>
        <div className="frist">
          <img src={frist} alt="" />
        </div>
        <div className="frist">
          <img src={frist1} alt="" />
        </div>
        <div className="frist">
          <img src={frist2} alt="" />
        </div>
        <div className="frist">
          <img src={frist3} alt="" />
        </div>
        <div className="frist">
          <img src={frist4} alt="" />
        </div>
        <div className="frist">
          <img src={frist5} alt="" />
        </div>
        <div className="frist">
          <img src={frist6} alt="" />
        </div>
        <div className="frist">
          <img src={frist7} alt="" />
        </div>
        <div className="frist">
          <img src={frist8} alt="" />
        </div>
        <div className="frist">
          <img src={frist9} alt="" />
        </div>
        <div className="frist">
          <img src={frist10} alt="" />
        </div>
        <div className="frist">
          <img src={frist11} alt="" />
        </div>
        <div className="frist">
          <img src={frist12} alt="" />
        </div>
      </div>
    </div>
  )
}
