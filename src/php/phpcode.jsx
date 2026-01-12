import { useEffect, useState } from "react"
import './phps.css'

export default function Phpcode() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./phpcode.json")
        if (!res.ok) throw new Error("Failed to fetch")

        const json = await res.json()
        console.log(json);
        
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error}</h2>

  return (
    <div className="phpcodecom">
      <h2>Open Console to see JSON data</h2>
    </div>
  );
}
