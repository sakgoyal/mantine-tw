import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import { type MantineProps } from "./temp";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <ButtonM />
    </>
  );
}
type Props = Partial<Record<MantineProps, any>>;


function ButtonM(props: Props) {
  const actualProps = {
    rounded: "md",
    bg: "blue-500",
    px: 4,
    py: 2,
    text: "white",
    font: "semibold",
    hover: {
      bg: "blue-600"
    },
    dark: {
      bg: "blue-600",
      hover: {
        bg: "blue-700",
        underline: true
      },

    },
    ...props,
  } as const satisfies Props;
  return (
    <button className={ConvertProps(actualProps)}>
      Testing Button
    </button>
  );
}

export function ConvertProps(props: Props, prefix = ""): string {
  return Object.entries(props)
    .flatMap(([key, value]) => {
      const cls = prefix ? `${prefix}:${key}` : key;
      if (typeof value === 'string' || typeof value === 'number') return `${cls}-${value}`
      if (typeof value === 'boolean') return value ? cls : ''
      if (typeof value === 'object' && value !== null) return ConvertProps(value, cls)
      return ''
    })
    .join(' ')
}

function transforms() {
  // specific mantine conversions to tailwind

  // color conversions
  // bright color c="bright" translates to "text-white dark:text-black"
  // dimmed color c="dimmed" translates to "text-gray-700 dark:text-dark-[#828282]"
  // white color c="white" translates to "text-white"
  // black color c="black" translates to "text-black"


}


// if variant prop is defined, use different defaults
function variants() {

}
