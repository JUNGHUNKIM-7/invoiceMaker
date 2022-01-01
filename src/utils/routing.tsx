import { useRouter } from 'next/router'

export const useRouting = () => {
    const router = useRouter()
    const p = router.query.slugs

    const routerPush = (path: string) => {
        router.push({ pathname: `${path}` })
    }
    const routerReplace = (path: string) => {
        router.replace(path)
    }
    const routerBack = () => {
        router.back()
    }
    const routerReload = () => {
        router.reload()
    }

    return {
        p,
        routerPush,
        routerBack,
        routerReload,
        routerReplace,
    }
}
