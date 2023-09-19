// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { Provider } from "react-redux";
import i18n from "./i18n";
import store from "./store/store";
import "./App.css";
import MiniTour from "./components/MiniTour";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

function LocaleWrapper(): JSX.Element {
  const { locale } = useParams<{ locale?: string }>();

  // Check if the locale is valid and then set it
  if (locale && i18n.languages.indexOf(locale) !== -1) {
    i18n.changeLanguage(locale);
  }

  return (
    <div>
      <Nav />
      <Hero />
      <MiniTour />
    </div>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/:locale" element={<LocaleWrapper />} />
          <Route path="/" element={<LocaleWrapper />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
