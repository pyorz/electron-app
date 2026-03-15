import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward?: boolean }) => void
      getCurrentWindow: () => Promise<{
        id: number
        title: string
        x: number
        y: number
        width: number
        height: number
        isMaximized: boolean
        isMinimized: boolean
        isFullScreen: boolean
      } | null>
    }
  }
}
