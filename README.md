# Spacekit

# Things to do before starting work on this project

## Install the recommended vscode plugin from below link

## [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) 

## Install the npm modules

```
yarn install
```

## To Start the Storybook dev server

```
yarn storybook
```

## To Format the code

```
yarn format
```

## To Check the Eslint issues

```
yarn lint
```

## To Build the project

```
yarn build
```

## To Build the static storybook assets

```
yarn build-storybook
```

## To Restart the project
### (if you face any issue on running the storybook)

```
yarn restart
```

# To Add SVG icons
### Add svg icons to `src/assets` folder then run the below command to generate the Typescript icon exports.

```
yarn prep:icons
```

# To Style the Components
## [Lit Documentation](https://lit.dev/docs/components/styles/)
###  For styling the components, You can directly use `SASS` or `CSS`, but you can't import the plain stylesheet to your Components, So the node script `/src/utils/styles.js` watches the `src` directory for any changes on your stylesheet & generates the lit version of styles based on your plain stylesheet with the help of `PostCSS`. So you just need to create the plain stylesheet then add the styles for your component and finally you have to import the `*.lit.ts` style file to your component, refer the below gif.


https://user-images.githubusercontent.com/43679827/203483152-ffaf5fa4-bb0c-4a84-b8ec-b25aad1c1fac.mp4

