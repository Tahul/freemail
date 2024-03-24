import { expect, it } from 'vitest'
import * as freemail from '../src/index'

it('gmail.com should be free', () => expect(freemail.isFree('smith@gmail.com')).toEqual(true))

it('gmail.com should be free with domain only', () => expect(freemail.isFree('gmail.com')).toEqual(true))

it('fb.com should not be free', () => expect(freemail.isFree('fb.com')).toEqual(false))

it('mailinater.com should be free', () => expect(freemail.isFree('smith@mailinater.com')).toEqual(true))

it('mailinater.com should be disposable', () => expect(freemail.isDisposable('smith@mailinater.com')).toEqual(true))

it('gmail.com should not be disposable', () => expect(freemail.isDisposable('smith@gmail.com')).toEqual(false))
