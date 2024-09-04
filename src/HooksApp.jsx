import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks"

export const HooksApp = () => {
  return (
    <>
        <CounterApp/>
        <div style={{marginTop: 100}}></div>
        <CounterWithCustomHook />
        <div style={{marginTop: 100}}></div>
        <SimpleForm />
        <div style={{marginTop: 100}}></div>
        <FormWithCustomHook />
        <div style={{marginTop: 100}}></div>
        <MultipleCustomHooks />
    </>
  )
}
