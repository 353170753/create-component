import { Options as TemplateOptions } from 'ejs'
import { IOptions as GlobOptions } from 'glob'

declare module 'conf'

declare module 'mem-fs-editor' {
  type Contents = string | Buffer
  type Store = any
  type ProcessFunc = (contents: Buffer) => Contents

  type Callback = (err: any) => any

  interface ICopyOptions {
    process?: ProcessFunc
    globOptions?: GlobOptions
  }
  interface IFsEditor {
    read(path: string, options?: { raw?: boolean; defaults?: string }): string
    write(path: string, content: string | Buffer): void
    readJSON(path: string, defaults?: any): any
    writeJSON(path: string, contents: any, replacer?: any, space?: number): void
    append(
      path: string,
      contents: string,
      options?: { trimEnd?: boolean; separator?: string },
    ): void
    extendJSON(path: string, contents: any, replacer?: any, space?: number): void
    delete(path: string, options?: { globOptions?: any }): void
    copy(
      from: string,
      to: string,
      options?: { process?: (contents: Buffer) => Buffer | string; globOptions?: any },
    ): void
    copyTpl(
      from: string,
      to: string,
      context: object,
      templateOptions?: TemplateOptions,
      copyOptions?: ICopyOptions,
    ): void
    move(from: string, to: string, options?: { globOptions?: any }): void
    exists(path: string): boolean
    commit(callback: () => void): void
  }

  export function create(store: Store): IFsEditor
}

declare module 'mem-fs' {
  type VinylFile = any

  interface IStore {
    get(path: string): VinylFile
    add(file: VinylFile): void
    each(callback: (file: string, index: number) => void): void
  }

  export function create(): IStore
}
