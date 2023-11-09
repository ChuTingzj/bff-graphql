import { useState } from 'react'
import {useQuery,gql} from '@apollo/client'
import type {GetListResponse} from './proto/list.ts';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {loading,error,data} = useQuery<{getList:GetListResponse}>(gql`
      {
          getList(clientType:2608,cursor:"0",idType:2,limit:20,sortType:200){
              errMsg,
              errNo,
              data{
                  itemType,
                  itemInfo{
                      title,
                      briefContent,
                      readTime,
                      authorUserInfo{
                          userName,
                          description
                      }
                  }
              }
          }
      }
  `)
  console.log(data);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
