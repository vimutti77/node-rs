/* eslint-disable */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export function load(): void
export function loadDict(dict: Buffer): void
export function cut(sentence: string | Buffer, hmm?: boolean | undefined | null): string[]
export function cutAll(sentence: string | Buffer): string[]
export function cutForSearch(sentence: string | Buffer, hmm?: boolean | undefined | null): string[]
export interface TaggedWord {
  tag: string
  word: string
}
export function tag(sentence: string | Buffer, hmm?: boolean | undefined | null): Array<TaggedWord>
export interface Keyword {
  keyword: string
  weight: number
}
export function extract(sentence: string | Buffer, topn: number, allowedPos?: string | undefined | null): Array<Keyword>
export function loadTFIDFDict(dict: Buffer): void
