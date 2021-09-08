import { useRouter } from 'next/router'

export const useRouting = () => {
    const router = useRouter()
    const p = router.query.slugs

    const routerPush = (path: string) => {
        router.push({ pathname: `${path}` })
    }
    const routerBack = () => {
        router.back()
    }
    const routerReload = () => {
        router.reload()
    }
    const routerReplace = (path: string) => {
        router.replace(path)
    }

    return {
        p,
        routerPush,
        routerBack,
        routerReload,
        routerReplace,
    }
}
