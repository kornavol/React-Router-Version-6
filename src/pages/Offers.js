import { useState } from "react"

export default function Offers() {
  const [count, setCount] = useState(0)
  const [items] = useState([
    { title: 'Ninja Hoodie', price: 21.99 },
    { title: 'Ninja Sneakers', price: 34.99 },
    { title: 'Ninja Tee', price: 12.99 }
  ])

  return (
    <div>
      <h3>Latest Offers</h3>
      <div className="offers">
        {items.map(item => (
          <div key={item.title}>
            <img src="https://via.placeholder.com/350x200" alt="product" />
            <h4>{item.title}</h4>
            <p>£{item.price}</p>
          </div>
        ))}
      </div>
      <h3>Counter</h3>
      <div>{count}</div>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}
