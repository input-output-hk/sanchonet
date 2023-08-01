import React from 'react';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function FaucetFeatures(): JSX.Element {
  return (
    <section className="faucet">
      <Head>
        <script>
          alert("Hello World");
        </script>
      </Head>
      <form action="/send-money" method="get">
        <div id="payment"></div>
        <select name="type">
          <option value="default">ada</option>
        </select><br />
        address(required): <input type="text" name="address" size="50" /><br />
        api key(optional): <input type="text" name="api_key" /><br />
        <input type="submit" />
      </form>
      <form action="/delegate" method="get">
        <div id="delegate"></div>
        pool(required): <input type="text" name="poolid" size="50" /><br />
        api key(optional): <input type="text" name="api_key" /><br />
        <input type="submit" />
      </form>
    </section>
  );
}
