import { useState, useEffect } from 'react'
export default function Watch() {
  const [age, setAge] = useState(1)

  const handleChange = () => {
    setAge(age + 1)
  }

  useEffect(() => {
    if (age > 3) {
      console.log('大于3了');
    }
  }, [age])

  return (
    <div>
      <p>{ age }</p>
      <button onClick={ handleChange }>change</button>
    </div>
  )
}