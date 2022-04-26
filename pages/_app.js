import '../styles/global.css'
// Top-level component that will be common across all pages
// Can also be used to keep state when navigating between pages or load global css
// Must restart dev server when you add this component
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
