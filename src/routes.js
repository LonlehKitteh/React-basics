import React from 'react'

const Page404 = React.lazy(() => import('./components/pages/Page404'))
const Home = React.lazy(() => import("./components/pages/Home"))
const About = React.lazy(() => import("./components/pages/About"))
const Service = React.lazy(() => import("./components/pages/Service"))
const HookUseState = React.lazy(() => import("./components/pages/hooksIntroduction/HookUseState"))
const HookUseEffect = React.lazy(() => import("./components/pages/hooksIntroduction/HookUseEffect"))
const HookUseRef = React.lazy(() => import("./components/pages/hooksIntroduction/HookUseRef"))
const HookUseCallback = React.lazy(() => import("./components/pages/hooksIntroduction/HookUseCallback"))
const HookUseMemo = React.lazy(() => import("./components/pages/hooksIntroduction/HookUseMemo"))
const HookUseContext = React.lazy(() => import("./components/pages/hooksIntroduction/HookUseContext"))
const HookUseReducer = React.lazy(() => import("./components/pages/hooksIntroduction/HookUseReducer"))

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/*',
        component: Page404
    },
    {
        path: '/usestate',
        component: HookUseState
    },
    {
        path: '/useEffect',
        component: HookUseEffect
    },
    {
        path: '/useRef',
        component: HookUseRef
    },
    {
        path: '/useMemo',
        component: HookUseMemo
    },
    {
        path: '/useCallback',
        component: HookUseCallback
    },
    {
        path: '/useReducer',
        component: HookUseReducer
    },
    {
        path: '/useContext',
        component: HookUseContext
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/Service',
        component: Service
    }

]
