import Head from 'next/head';
import Router from 'next/router';
import Cookie from "js-cookie";
import { GoogleLogout } from "react-google-login";

import { configs } from "../configs";

// components
import Layout from "../components/templates/Layout";

export default function Home() {
  const logout = () => {
    const { pathname } = Router;
    Cookie.remove('googleId');

    (pathname === '/') ? Router.push('/login') :
      Cookie.set('googleId', googleId, { secure: true });
  }

  return (
    <Layout className="container">
      <Head>
        <title>EzOrder: Make Order Simpler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          Cookie.get("googleId") && (
            <GoogleLogout
              clientId={process.env.GOOGLE_CLIENT_ID}
              // clientId={configs.GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={logout}
            />
          )
        }
      </main>
    </Layout>
  )
}
