import { useEffect, useState } from "react"
import './phps.css'

export default function Phpcode() {
  const [quession, setQuestion] = useState('');

  const askQuestion = async () => {
  }

  return (
    <div className="phpcodecom">
      <div className="prompts">
        <div className="masseges"></div>
        <input type="text" value={quession} onChange={(event) => setQuestion(event.target.value)} className="promptinput" />
        <button onClick={askQuestion} className="add">add</button>
      </div>
    </div>
  );
}