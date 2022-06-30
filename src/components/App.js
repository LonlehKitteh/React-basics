import React, { Suspense } from 'react'
import Navigation from "./Navigation"
import { Route, Routes } from 'react-router-dom'
import '../css/App.css'
import LoadingSpinner from './LoadingSpinner'

const Page404 = React.lazy(() => import('./pages/Page404'))
const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Service = React.lazy(() => import("./pages/Service"))
const HookUseState = React.lazy(() => import("./pages/HookUseState"))
const HookUseEffect = React.lazy(() => import("./pages/HookUseEffect"))
const HookUseRef = React.lazy(() => import("./pages/HookUseRef"))
const HookUseCallback = React.lazy(() => import("./pages/HookUseCallback"))
const HookUseMemo = React.lazy(() => import("./pages/HookUseMemo"))
const HookUseContext = React.lazy(() => import("./pages/HookUseContext"))
const HookUseReducer = React.lazy(() => import("./pages/HookUseReducer"))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <div className="push">
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
