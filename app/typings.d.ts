declare module "*.css"
declare module "*.png"
declare module "*.jpg"

declare const serverData: any
declare const __DEV__: boolean

interface Window {
    setToast: any;
}

declare module 'md5' {
    const content: any
    export = content
}
