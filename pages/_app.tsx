import '../styles/main.scss'
import type { AppProps } from 'next/app'
import ThemeController from '../src/components/global_theme/theme-controller'
import { GlobalReducerProvider } from '../src/utils/reducer/globalState'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalReducerProvider>
            <ThemeController>
                <Component {...pageProps} />
            </ThemeController>
        </GlobalReducerProvider>
    )
}
export default MyApp
