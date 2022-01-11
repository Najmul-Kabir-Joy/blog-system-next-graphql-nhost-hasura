import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostAuthProvider } from '@nhost/react-auth';
import '../styles/globals.css'
import nhost from '../utils/nhost';
import Navigation from './Components/Shared/Navigation';
function MyApp({ Component, pageProps }) {
  return (
    <NhostAuthProvider nhost={nhost}>
      <NhostApolloProvider
        nhost={nhost}
        graphqlUrl='https://ulecljgvqzkolexbbvge.nhost.run/v1/graphql'
      >
        <Navigation />
        <Component {...pageProps} />

      </NhostApolloProvider>
    </NhostAuthProvider>

  )
}

export default MyApp
