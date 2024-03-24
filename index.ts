import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tldjs from '@tahul/tldjs'

const local = (path: string) => resolve(dirname(fileURLToPath(import.meta.url)), path)
const disposable = readFileSync(local(`./data/disposable.txt`)).toString().split('\n')
const free = readFileSync(local(`./data/free.txt`)).toString().split('\n').concat(disposable)

export function isFree(email) {
  if (typeof email !== 'string')
    throw new TypeError('email must be a string')
  const domain = tldjs.getDomain(email.split('@').pop())
  return free.includes(domain as string)
}

export function isDisposable(email) {
  if (typeof email !== 'string')
    throw new TypeError('email must be a string')
  const domain = tldjs.getDomain(email.split('@').pop())
  return disposable.includes(domain as string)
}
