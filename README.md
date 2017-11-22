![Logo of the project](https://daks2k3a4ib2z.cloudfront.net/591023ba928fad05e55a95ae/592b7ac92940516ee254870d_jibble-logo-lg.png)

# Jibble Test

> Jibble test for backend.

## Installing / Getting started

Feel free to use the code editor of your choice. It has `prettier-eslint` setup;
Visual Studio and Atom have a nice plugin to format and enforce eslint on file
save, you can configure them in the next section.

### For Visual Studio Code

Make sure you have `prettier-vscode` plugin installed

```shell
ext install prettier-vscode
```

Also following settings in your workspace settings:

```json
{
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": true
}
```

### For Atom

Make sure you have `prettier-atom` plugin installed

```shell
apm install prettier-atom
```

-Automatically format on save (requires enabling in `Packages → Prettier →
Toggle Format on Save`) -Check the `ESLint Integration` checkbox

### Built With

* Hapi
* Jest
* ES6
* Prettier
* ESLint

### Setting up Dev

Run the code below:

```shell
git clone git@github.com:sorioinc/nodejs-backend.git
cd nodejs-backend/
npm install
```

## Style guide

The style is driven by ESLint, and it's based upon Airbnb's configuration. Plus,
it makes use of Prettier as a formatter. It is enforced with `git commit hooks`.
