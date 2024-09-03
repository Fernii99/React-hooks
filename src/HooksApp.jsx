import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
import { SimpleForm } from "./02-useEffect/SimpleForm"

export const HooksApp = () => {
  return (
    <>
        <CounterApp/>
        <div style={{marginTop: 100}}></div>
        <CounterWithCustomHook />
        <div style={{marginTop: 100}}></div>
        <SimpleForm />
    </>
  )
}
