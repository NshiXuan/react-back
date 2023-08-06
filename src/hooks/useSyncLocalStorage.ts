// 同步运行 不会响应式更新
export function useSyncLocalStorage<T = any>(
  key: string
): [data: T, setData: (value: any, key?: string) => void] {
  let data: any = JSON.parse(window.localStorage.getItem(key) as any)
  const setData = (value: any) => {
    data = value
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  return [data, setData]
}
