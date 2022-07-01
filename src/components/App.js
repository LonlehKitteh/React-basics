import React, { Suspense } from 'react'
import Navigation from "./Navigation"
import { Route, Routes, useLocation } from 'react-router-dom'
import '../css/App.css'
import LoadingSpinner from './LoadingSpinner'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { routes } from '../routes'

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
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={<route.component />} />
              )
            })}
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
