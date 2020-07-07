import Head from 'next/head';
import Router from 'next/router';
import Cookie from "js-cookie";
import { GoogleLogin } from "react-google-login";

import { configs } from "../configs";
import Layout from "../components/templates/Layout";

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const { profileObj: { googleId } } = response;
    if (response && response.profileObj) {
      const { pathname } = Router;

      Cookie.set('googleId', googleId, { secure: true });

      if (pathname === '/login')
      {
        Router.push('/');
      } else {
        Cookie.remove('googleId');
      }
    }
  }

  return (
    <Layout className="container">
      <Head>
        <title>EzOrder: Login Here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          // clientId={configs.GOOGLE_CLIENT_ID}
          buttonText="Start EZ Order"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </main>
    </Layout>
  )
}
