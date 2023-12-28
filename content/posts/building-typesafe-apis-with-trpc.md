---
title: Building typesafe APIs with tRPC
description: tRPC is a TypeScript framework for building APIs that focuses on type safety, validation, and ease of use
category: ['api', 'server']
published: 2023-12-09 00:00
---

# What is tRPC?

tRPC is a TypeScript framework for building APIs that focuses on type safety, validation, and ease of use. It enables developers to define endpoints and automatically generate type-safe clients for consuming those endpoints. Its features include automatic request validation, response serialization, and strong typing throughout the API lifecycle.

# Setting Up a tRPC Project

To get started with tRPC, you'll need Node.js and npm or yarn installed on your machine. Begin by creating a new TypeScript project:

```shell
mkdir trpc-api
cd trpc-api
npm init -y
# or
yarn init -y
```

Next, install tRPC and its peer dependencies:

```shell
npm install trpc @trpc/server @trpc/client @trpc/client/next
# or
yarn add trpc @trpc/server @trpc/client @trpc/client/next
```

# Defining Your API

Now, let's define a simple API using tRPC. Create a folder named api and add an endpoint to it. For example, let's create a helloWorld.ts file:

```typescript
// api/helloWorld.ts

import { createTRPC } from '@trpc/server';
import { z } from 'zod';

const appRouter = createTRPC<{}>({
  router: {
    helloWorld: {
      input: null,
      resolve: () => {
        return { message: 'Hello, World!' };
      },
    },
  },
});

export type Context = typeof appRouter extends infer Router
  ? Router extends createTRPC<infer Context>
    ? Context
    : never
  : never;

export default appRouter;
```

This endpoint helloWorld takes no input and simply returns a greeting message.

# Creating the Server

Now, let's create the server to serve our API. Create an index.ts file in the root folder of your project:

```typescript
// index.ts

import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createContext } from './api/context';
import apiRouter from './api/helloWorld';

export default createNextApiHandler({
  router: apiRouter,
  createContext,
});
```

# Running the Server  

To start the server, run the following command:

```shell
npx next dev
# or
yarn dev
```

This will start the server, and your tRPC API will be available at `http://localhost:3000/api/helloWorld`.

# Consuming the API  

To consume the API, let's create a simple Next.js page. Create a file named index.tsx inside the pages directory:

```tsx
// pages/index.tsx

import { GetServerSideProps } from 'next';
import { createReactQueryHooks } from '@trpc/react';
import { trpc } from '../utils/trpc';
import React from 'react';

const trpcClient = trpc.createClient();

const Home: React.FC = () => {
  const { data } = createReactQueryHooks(trpcClient).useQuery(['helloWorld']);

  return (
    <div>
      <h1>tRPC Example</h1>
      <p>{data?.message}</p>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
```

This page uses `@trpc/react` and `createReactQueryHooks` to fetch the helloWorld endpoint data and display the message.

# Conclusion  

tRPC simplifies the process of creating APIs in TypeScript by providing type safety, automatic validation, and a straightforward API definition. It's a powerful tool for building robust and type-safe APIs.

This guide covered the basic setup and creation of a simple tRPC API. Explore more features and advanced usage to leverage the full potential of tRPC in your projects!