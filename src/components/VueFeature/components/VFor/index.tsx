import { useState } from 'react'

export default function List() {
  const [list, setList] = useState([
    {
      name: 'hah1',
      age:18
    },
    {
      name: 'hah2',
      age:180
    },
  ])
  const handleAdd = () => {
    setList([
      ...list,
      {
        name: 'hi',
        age: 30
      }
    ])
  }

  return (
    <div>
      {
        list.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>{item.age}</span>
          </div>
        ))
      }
      <button onClick={ handleAdd }>增加user</button>
    </div>
  )
}