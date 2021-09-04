import { useRouter } from 'next/router'

export const useRouting = () => {
    const router = useRouter()
    const p = router.query.slugs

    const routerPush = (path: string) => {
        router.push({ pathname: `/${path}` })
    }
    const routerBack = () => {
        router.back()
    }
    const routerToHome = () => {
        router.replace('/')
    }

    return {
        p,
        routerPush,
        routerBack,
        routerToHome,
    }
}
