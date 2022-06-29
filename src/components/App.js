import React, { Suspense } from 'react'
import Navigation from "./Navigation"
import { Route, Routes } from 'react-router-dom'
import '../css/App.css'
import LoadingSpinner from './LoadingSpinner'

const Page404 = React.lazy(() => import('./pages/Page404'))
const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Service = React.lazy(() => import("./pages/Service"))

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
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
