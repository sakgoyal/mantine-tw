import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import { TWStyles } from "./temp";
import type { Entries } from "type-fest";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <ButtonM pt={5} c={"sky-50"} border-solid={true} bg={"blue"} rounded={"lg"} />
    </>
  );
}
type Props = Partial<Record<keyof typeof TWStyles, any>>;


function ButtonM(props: Props) {
  return (
    <button className={ConvertProps(props)}>
      Testing Button
    </button>
  );
}



export function ConvertProps(props: Props) {
  let converted = "";

  for (const [key, val] of Object.entries(props) as Entries<typeof props>) {
    const temp =  TWStyles[key] ?? `${key}-`;

    // if (typeof val === 'string' && ending(val)) converted += `${temp}[${val}] `;
    if (typeof val === "boolean") {
      if (val === true) converted += `${key} `;
    } else converted += `${temp}${val} `;
  }
  return converted;
}

// function ending(foo: string) {
//   // check if foo ends with any of the unit endings
//   for (const unit of units) {
//     if (foo.endsWith(unit)) return true;
//   }
//   return false;
// }
