import { useState } from 'react'

function Tab(props: any) {
  const [serverUrl, setServerUrl] = useState<string | undefined>('https://')
  console.log(props);

  const changeMsg = (msg?: string) => {
    setServerUrl(msg)
  }

  return (
    <div className='tab'>
      这里是父组件
      ---
      {/* 父组件接受子组件值并修改 */}
      <TabName msg={serverUrl} changeMsg={changeMsg} />
    </div>
  )
}

function TabName(props: any) {
  console.log(props);

  const handleClick = (msg: string) => {
    props.changeMsg(msg)
  }

  return (
    <div>
      我是子组件
      <p>{ props.msg }</p>
      <button onClick={() => {handleClick('7777')}}>子改变父</button>
    </div>
  )
}

export default function Props() {
  return (
    <Tab />
  )
}