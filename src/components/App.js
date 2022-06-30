import React, { Suspense } from 'react'
import Navigation from "./Navigation"
import { Route, Routes, useLocation } from 'react-router-dom'
import '../css/App.css'
import LoadingSpinner from './LoadingSpinner'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Page404 = React.lazy(() => import('./pages/Page404'))
const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Service = React.lazy(() => import("./pages/Service"))
const HookUseState = React.lazy(() => import("./pages/subPagesHooks/HookUseState"))
const HookUseEffect = React.lazy(() => import("./pages/subPagesHooks/HookUseEffect"))
const HookUseRef = React.lazy(() => import("./pages/subPagesHooks/HookUseRef"))
const HookUseCallback = React.lazy(() => import("./pages/subPagesHooks/HookUseCallback"))
const HookUseMemo = React.lazy(() => import("./pages/subPagesHooks/HookUseMemo"))
const HookUseContext = React.lazy(() => import("./pages/subPagesHooks/HookUseContext"))
const HookUseReducer = React.lazy(() => import("./pages/subPagesHooks/HookUseReducer"))

function App() {
  const location = useLocation()
  const title = [location.pathname.slice(1)[0]?.toUpperCase(), ...location.pathname.slice(2)].join('') || "Home"

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Basics | {title}</title>
        </Helmet>
      </HelmetProvider>
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <div className={`push ${title.toLowerCase()}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path='/*' element={<Page404 />} />
            <Route path='/usestate' element={<HookUseState />} />
            <Route path='/useeffect' element={<HookUseEffect />} />
            <Route path='/useref' element={<HookUseRef />} />
            <Route path='/usecallback' element={<HookUseCallback />} />
            <Route path='/usememo' element={<HookUseMemo />} />
            <Route path='/usecontext' element={<HookUseContext />} />
            <Route path='/usereducer' element={<HookUseReducer />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
