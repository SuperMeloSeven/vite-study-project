import styles from './index.module.scss'
import Button from '../Button'
import { devDependencies } from "../../../package.json";

export function Header() {
  return (
    <div>
      <div className='flex-c mb-5'>
        <p>vite version: { devDependencies.vite }</p>
        <p className={styles.header}>This is Header</p>
      </div>
      <div className='mb-5'>
        {/* <button
          bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
          text="sm white"
          font="mono light"
          p="y-2 x-4"
          border="2 rounded blue-200"
        >测试 attributify</button> */}
      </div>
      <Button />
    </div>
  )
}