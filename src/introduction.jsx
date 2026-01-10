import './intro.css';

export default function Introduction() {
  return (
    <div className="main">
      <div className="intro">
        <h1>Welcome 👋</h1>
        <div className="topics">
          <h3>Select any topic from the sidebar to begin learning.</h3>
          <div className="topicsub">
            <button className="suject"><input type="radio" className='chack' /><h1>PHP</h1></button>
            <button className="suject"><input type="radio" className='chack' /><h1>PHP</h1></button>
            <button className="suject"><input type="radio" className='chack' /><h1>PHP</h1></button>
            <button className="suject"><input type="radio" className='chack' /><h1>PHP</h1></button>
            <button className="suject"><input type="radio" className='chack' /><h1>PHP</h1></button>
            <button className="suject"><input type="radio" className='chack' /><h1>PHP</h1></button>
          </div>
        </div>
      </div>
    </div>
  )
}
