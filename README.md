# RHTE 2019 RHMI Hackathon UI

This is a template repository used to build a UI to render results fetched from
the Junction & Parking Meters API built as part of the Solution Pattern
[here](https://github.com/evanshortiss/rhte-2019-hackathon-on-rhmi).

This repository is utilises Patternfly for building the UI. It was generated
from the  on the [Patternfly React Seed](https://github.com/patternfly/patternfly-react-seed).

## Quick-start
```bash
# ensure you have yarn on your machine globally
npm install yarn -g

# clone the project
git clone https://github.com/evanshortiss/rhte-2019-hackathon-on-rhmi-ui

# navigate into the project directory
cd rhte-2019-hackathon-on-rhmi-ui

# create an environment variables file (.env)
# replace the stub API key in .env with a real one
cp .env.example .env

# install patternfly-react-seed dependencies
yarn

yarn build # build the project
yarn start # start the development server
```
## Development Scripts

Install development/build dependencies
`yarn`

Start the development server
`yarn start`

Run a production build
`yarn build`

Run the test suite
`yarn test`

Run the linter
`yarn lint`

Run the code formatter
`yarn format`

Launch a tool to inspect the bundle size
`yarn bundle-profile:analyze`

## Configurations
* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./webpack.common.js)
* [Jest Config](./jest.config.js)
* [Editor Config](./.editorconfig)

## Raster Image Support

To use an image asset that's shipped with patternfly core, you'll prefix the paths with "@assets". `@assets` is an alias for the patternfly assets directory in node_modules.

For example:
```js
import imgSrc from '@assets/images/g_sizing.png';
<img src={imgSrc} alt="Some image" />
```

You can use a similar technique to import assets from your local app, just prefix the paths with "@app". `@app` is an alias for the main src/app directory.

```js
import loader from '@app/assets/images/loader.gif';
<img src={loader} alt="Content loading />
```

## Vector Image Support
Inlining SVG in the app's markup is also possible.

```js
import logo from '@app/assets/images/logo.svg';
<span dangerouslySetInnerHTML={{__html: logo}} />
```

You can also use SVG when applying background images with CSS. To do this, your SVG's must live under a `bgimages` directory (this directory name is configurable in [webpack.common.js](./webpack.common.js#L5)). This is necessary because you may need to use SVG's in several other context (inline images, fonts, icons, etc.) and so we need to be able to differentiate between these usages so the appropriate loader is invoked.
```css
body {
  background: url(./assets/bgimages/img_avatar.svg);
}
```

## Code Quality Tools
* For accessibility compliance, we use [react-axe](https://github.com/dequelabs/react-axe)
* To keep our bundle size in check, we use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* To keep our code formatting in check, we use [prettier](https://github.com/prettier/prettier)
* To keep our code logic and test coverage in check, we use [jest](https://github.com/facebook/jest)
