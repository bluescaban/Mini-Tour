import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageDetectorOptions = {
	// order and from where user language should be detected
	order: ['path', 'cookie', 'localStorage', 'navigator'],

	// keys or params to lookup language from
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'i18nextLng',
	lookupSessionStorage: 'i18nextLng',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,

	// cache user language on
	caches: ['localStorage', 'cookie'],
	excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

	// optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
	cookieOptions: { path: '/', sameSite: 'strict' as 'strict' },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-us',
    debug: true,
    detection: languageDetectorOptions,
    interpolation: {
      escapeValue: false,
    },
    load: 'currentOnly',
    lowerCaseLng: true,
    keySeparator: false,
    backend: {
      loadPath: '/locales/{{lng}}.json',
      allowMultiLoading: false,
      crossDomain: true,
      withCredentials: false,
      overrideMimeType: false,
    },
  }, (err, t) => {
    if (err) console.log('i18n init error:', err);
    console.log('Detected language:', i18n.language);
  });

export default i18n;
