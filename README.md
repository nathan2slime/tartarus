<div align="center">
  <a href="#">
    <img src="https://tartarus-county.vercel.app/logo192.png" alt="Tartarus" width="120" height="120">
  </a>

  <h3 align="center">
  <a href="https://tartarus-county.vercel.app/" target="_black">Tartarus</a>
  </h3>

  <p align="center">
    Obtain information from a Brazilian municipality
  </p>
</div>

### Deployments

| App      | Storybook |
| ----------- | ----------- |
| <a href="https://tartarus-county.vercel.app/">https://tartarus-county.vercel.app</a>| <a href="https://storytartarus.vercel.app/">https://storytartarus.vercel.app</a>|




### Required technologies

```
1. Node.js v16.16.0 (LTS)
3. Git
5. Yarn
```

### Setup

Download the repository using the following command in your terminal

```
git clone https://github.com/nathan2slime/tartarus.git
```

Enter the directory and install the dependencies with yarn

```
cd tartarus
```

```
yarn install
```

Then run the yarn build command to build the libraries

```
yarn build
```

Create an `.env` file in the path `apps/app`, and add the environment variables

```
REACT_APP_API_URL=https://servicodados.ibge.gov.br/api/v1/localidades
GENERATE_SOURCEMAP=false
```

### Starting the app

Enter the `apps/app` directory and run the command below

```
yarn start
```

### Starting the storybook

Enter the `apps/storybook` directory and run the command below

```
yarn start
```
