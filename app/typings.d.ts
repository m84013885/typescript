declare module "*.css"
declare module "*.png"
declare module "*.jpg"

declare const serverData: any
declare const __DEV__: boolean

interface ObjectConstructor {
    assign: any;
}

declare var window: any
declare const document: any
declare const navigator: any
declare const fetch: any

declare module 'md5' {
    const content: any
    export = content
}
