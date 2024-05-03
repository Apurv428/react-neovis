# React Neovis Example

## What is this?

This repo is just a simple example of a [neovis.js](https://github.com/neo4j-contrib/neovis.js/) graph visualization in a React application.

## How do I use it?

We don't need to install Neo4j for this project. We just need 3 things:

1. Create a Neo4j Sandbox on [neo4j.com](https://neo4j.com/sandbox/),
2. Install the project dependencies,
3. Connect to Neo4j Sandbox.

### 1 - Create a Neo4j Sandbox

A Neo4j Sandbox is essentially a Docker container with Neo4j installed, and a graph dataset that you can play with. There is nothing to install. It runs on the cloud. A Sandbox will expire in 3 days, but if we want you can extend your project for an additional 7 days (it can be done only once).

Create a Neo4j Sanbox [here](https://neo4j.com/sandbox/).

![image](https://github.com/Apurv428/react-neovis/assets/84929607/666ec062-229a-401c-ae73-eb1e66bdb7f5)

### 2 - Install project dependencies

```sh
git clone https://github.com/Apurv428/react-neovis
cd react-neovis
yarn install  # or simply, yarn
```

### 3 - Connect to your Neo4j Sandbox

Find the `Connection details` for your Neo4j Sandbox:

![image](https://github.com/Apurv428/react-neovis/assets/84929607/9114f0d7-a90f-4b68-a697-1476ffe6bd10)

Then open the [App component](https://github.com/Apurv428/react-neovis/blob/main/src/components/App.js) and replace `YOUR-BOLT-URI-HERE` and `YOUR-NEO4J-PASSWORD-HERE` with Neo4j Sanbox connection details.

Now you are all set, and you can run the app with:

```sh
yarn start
```
