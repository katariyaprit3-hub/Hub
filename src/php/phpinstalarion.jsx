import './phps.css'

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
    </div>
  )
}
