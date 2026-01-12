import { useEffect } from "react";

export default function Phpcode() {

  useEffect(() => {

    const loadData = async () => {
      try {
        const response = await fetch('./phpcode.json')

        const data = await response.json()

        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();

  }, []);

  return (
    <div>
      <h2>Open Console to see JSON data</h2>
    </div>
  );
}
