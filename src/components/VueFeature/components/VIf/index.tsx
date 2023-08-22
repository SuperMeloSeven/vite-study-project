import { useState } from 'react'
export default function VIf() {
  const [isShow, setIsShow] = useState(false)

  const handleChangeShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div>
      {
        isShow ?
        (
          <p>我是show的时候展示的</p>
        ) :
        (
          <p>我是hide的时候展示的</p>
        )
      }
      <button onClick={ handleChangeShow }>change</button>
    </div>
  )
}