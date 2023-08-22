import { useRef } from 'react'

export default function Refs() {
  const domRef = useRef<HTMLInputElement>(null)

  const handleBtnClick = () => {
    domRef.current?.focus();
    console.log(domRef,'domRef')
  }

  return (
    <div>
      <input ref={domRef} type="text" />
      <button onClick={ handleBtnClick }>获取ref</button>
    </div>
  )
}