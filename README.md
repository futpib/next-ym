# next-ym

Next.js High Order Component to integrate Yandex.Metrika on every page change.

<a href="https://www.patreon.com/sergiodxa">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

Install it

```bash
yarn add next-ym
```

Import it inside your `pages/_app.js`;

```js
import Router from "next/router";
import withYM from "next-ym";
```

Wrap your [custom App container](https://nextjs.org/docs#custom-%3Capp%3E) with it

```js
// pass your YM code as first argument
export default withYM("XXXXXXXX", Router)(MyApp);
```

That's it, now when the user access a page it will log a pageview to Yandex.Metrika, each page change after that will also trigger a pageview on Yandex.Metrika.

> **Note**: This module detects if it's running in localhost and do nothing there to avoid polluting your analytics with local data.
