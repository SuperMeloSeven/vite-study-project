import { useState, useMemo } from 'react'
export default function Computed() {
  const [age, setAge] = useState(1)

  const handleChange = () => {
    setAge(age + 1)
  }

  const name = useMemo(() => {
    return `test${age}`
  }, [age])

  return (
    <div>
      <p>{ name }</p>
      <button onClick={ handleChange }>change</button>
    </div>
  )
}