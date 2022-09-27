import { useEffect, useState } from "react"
import { listRedemptions } from "./utils/API"

export const App = () => {
  const [redemptions, setRedemptions] = useState([])

  useEffect(() => {
    const init = async () => {
      const res = await listRedemptions()
      setRedemptions(res)
    }
    init()
  }, [])
 
  return (
    <div>
      <h1>Lista de cupons</h1>
      <ul>
        {redemptions.map((redemption) => {
          return (
            <div key={redemption.id}>
              <li>{redemption.code}</li>
              <li><div style={{width: 20, height: 20, backgroundColor: redemption.used ? "#f00" : "#0f0"}}></div></li>
            </div>
          )
        })}
      </ul>
    </div>
  )

}