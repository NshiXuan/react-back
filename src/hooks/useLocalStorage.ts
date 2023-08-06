import { useEffect, useState } from 'react'

export function useLocalStorage<T = any>(
  key: string
): [data: T, setData: (value: any) => void] {
  const [data, setData] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem(key) as any)
    return data
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  return [data, setData]
}
