import "./App.css";
import { TWStyles, units } from "./temp";

export default function App() {
  const props = {
    mt: "500",
    underline: true,
    // opacity: 'transparent',
    c: "gray-950",
  } as const;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ButtonM {...props} />
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

import type { Entries } from "type-fest";

export function ConvertProps(props: Props) {
  let converted = "";

  for (const [key, val] of Object.entries(props) as Entries<typeof props>) {
    const temp = TWStyles[key] ?? key;

    // if (typeof val === 'string' && ending(val)) converted += `${temp}[${val}] `;
    if (typeof val === "boolean") {
      if (val === true) converted += `${temp} `;
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
