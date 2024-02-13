import { useEffect, useState } from "react"

export const useLocalStorage = (key: string) => {
  const [data, setData] = useState<any>(undefined)

  useEffect(() => {
    if (!data) return
    window?.localStorage.setItem(key, JSON.stringify(data))
  }, [data])
  useEffect(() => {
    const stored = window?.localStorage.getItem(key)
    if (!stored) return
    setData(JSON.parse(stored));
  }, [])
  return { value: data, setValue: setData }
}