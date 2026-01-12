import './intro.css';

export default function Introduction() {
  return (
    <div className="main">
      <div className="intro">
        <div className="sugg">
          <h1>Welcome to HUB</h1>
          <div className="keysugg">
            <p className="keys">Leftbar: CTRL + b</p>
            <p className="keys">Leftbar: CTRL + b</p>
            <p className="keys">Leftbar: CTRL + b</p>
            <p className="keys">Leftbar: CTRL + b</p>
            <p className="keys">Leftbar: CTRL + b</p>
          </div>
        </div>
        <div className="topics">
          <h3>Select any topic from the sidebar to begin learning.</h3>
          <div className="topicsub">
            <div className="suject"><input type="checkbox" className='chack' /><h1>PHP</h1></div>
            <div className="suject"><input type="checkbox" className='chack' /><h1>Data Structuar</h1></div>
            <div className="suject"><input type="checkbox" className='chack' /><h1>computer networking</h1></div>
            <div className="suject"><input type="checkbox" className='chack' /><h1>Maths-II</h1></div>
            <div className="suject"><input type="checkbox" className='chack' /><h1>Boostrap</h1></div>
            <div className="suject"><input type="checkbox" className='chack' /><h1>IKS</h1></div>
            <div className="commit">Commit</div>
          </div>
        </div>
      </div>
    </div>
  )
}
