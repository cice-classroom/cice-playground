import { useEffect, useState } from 'react'
import { tap } from 'rxjs/operators'
import { Command } from './command'
import { Query } from './query'

export function useSubscribe<T>(useCase: Command | Query<T>, initialValue: T): T {
  const [result, setResult] = useState<T>(initialValue)
  useEffect(() => {
    const subscription = useCase
      .execute()
      .pipe(
        // @ts-ignore
        tap((x) => {
          // @ts-ignore
          setResult(x)
        })
      )
      .subscribe()

    return () => subscription.unsubscribe()
  }, [])

  return result
}
