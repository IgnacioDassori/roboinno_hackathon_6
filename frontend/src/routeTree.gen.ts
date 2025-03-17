/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TextImport } from './routes/text'
import { Route as RootlayoutImport } from './routes/_root_layout'
import { Route as IndexImport } from './routes/index'
import { Route as EditIndexImport } from './routes/edit/index'

// Create/Update Routes

const TextRoute = TextImport.update({
  id: '/text',
  path: '/text',
  getParentRoute: () => rootRoute,
} as any)

const RootlayoutRoute = RootlayoutImport.update({
  id: '/_root_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EditIndexRoute = EditIndexImport.update({
  id: '/edit/',
  path: '/edit/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_root_layout': {
      id: '/_root_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof RootlayoutImport
      parentRoute: typeof rootRoute
    }
    '/text': {
      id: '/text'
      path: '/text'
      fullPath: '/text'
      preLoaderRoute: typeof TextImport
      parentRoute: typeof rootRoute
    }
    '/edit/': {
      id: '/edit/'
      path: '/edit'
      fullPath: '/edit'
      preLoaderRoute: typeof EditIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof RootlayoutRoute
  '/text': typeof TextRoute
  '/edit': typeof EditIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof RootlayoutRoute
  '/text': typeof TextRoute
  '/edit': typeof EditIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_root_layout': typeof RootlayoutRoute
  '/text': typeof TextRoute
  '/edit/': typeof EditIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/text' | '/edit'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/text' | '/edit'
  id: '__root__' | '/' | '/_root_layout' | '/text' | '/edit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RootlayoutRoute: typeof RootlayoutRoute
  TextRoute: typeof TextRoute
  EditIndexRoute: typeof EditIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RootlayoutRoute: RootlayoutRoute,
  TextRoute: TextRoute,
  EditIndexRoute: EditIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_root_layout",
        "/text",
        "/edit/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_root_layout": {
      "filePath": "_root_layout.tsx"
    },
    "/text": {
      "filePath": "text.tsx"
    },
    "/edit/": {
      "filePath": "edit/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
