# Astro Fundamentals
### Sourced From: Traversy Media - [YT-Link](https://youtu.be/XoIHKO6AkoM?si=AD93JQmrHhgR5u4F)
#### Date: 3/21/2024


#### Introduction
This document was derived from the Astro Quick Start Course by Traversy Media and will contain Astro useage instructions and concepts.


### What Is Astro?
  - Astro is an all-in-one web framework geared toward content-driven websites. It can be used for static sites, SSR websites, and more.
  - Astro outputs **zero** JavaScript be default.
  - It uses the "Islands Architecture" that allows it to render HTML pages on the server & then inject placeholders around highly dynamic regions.
  - Astro has it's own component syntax that work in a similar way to other frontend frameworks. They can take in props, output dynamic content and styling.
  - You can use components from React, Vue, and other frameworks.


### Astro Default Setup
  - A default Astro project will will contain an `astro.config.ts` file that will be used to configure Astro. This is the file where adapters would be configured, or where Tailwind would be configured.
  - File Based Routing:
    - In Astro, the `pages` directory is used to define the routes.
    - Any components that end in `.astro` will be treated as pages and will be exposed to the router. For example, `About.astro` would be a page reachable at `/about`.
    - Directories can be used for **nested routing**. So if the directory structure was `/pages/articles/index.astro`, it would be reachable at `/articles`.


### The Image Component
  - Astro reccomends that local images be kept in the `src/` directory when possible so that Astro can transform, optimize, and bundle them. Files in the `/public` directory are always served or copied into the build folder as-is, with no processing.
  - The local images stored in `src/` can be used by all files in the project.
  - Images can be stored in any folder, including alongside the content.
  - If you want to avoid any processing or to have a direct public link to them, then store them in the `/public` directory.


### The Astro Component Script(aka frontmatter)
  - Astro uses a code fence `---` to identify the frontmatter in the Astro component. This concept was adopted from the *frontmatter* concept in Markdown.
  - You can use this frontmatter to write any JavaScript code that you need to render the template. This can include:
    - importing other Astro components
    - importing other framework components, like React
    - importing data, like a JSON file
    - fetching content from an API or database
    - creating variables that you will refernece in the template
    - creating functions that you will reference in the template
    - writing custom logic
  - The scripts are executed on the server or during the 'server' build stage, so not on the client or browser. This is depending on my configuration.


### Astro Layouts
  - Layouts are Astro components used to provide a reusable UI structure, such as a page template.
  - Conventionally the term "layout" for Astro components that provide common UI elements shared across pages such as headers, navigation bars, & footers.
  - A typical Astro layout component provides Astro, Markdown, or MDX pages with:
    - a page shell (<html>, <head>, <body> tags)
    - a `<slot />` to specify where the individual page content should be injected.
  - Layout components do not have to provide a full page shell, and can instead be used as partial UI templates.


# Astro Component Props
  - An Astro component can define and accept props. These props then become available to the component template for rendering HTML.
  - Props are available on the `Astro.props` global in the frontmatter:
    - `src/components/GreetingHeadline.astro`:
      ```astro
      ---
      // Usage: <GreetingHeadline greeting="Howdy" name="Partner" />
      const { greeting, name } = Astro.props;
      ---
      <h2>{greeting}, {name}!</h2>
      ```
  - You can also define your props with TypeScript with a `Props` type interface. Astro will automatically pick up the `Props` interface in your frontmatter and give type warnings/errors. These props can also be given default values when destructured from `Astro.props`.


### Astro Slots
  - The `<slot />` element is a placeholder for external HTML content, allowing you to inject (or “slot”) child elements from other files into your component template.
  - By default, all child elements passed to a component will be rendered in its `<slot />`.
  - Unlike props, which are attributes passed to an Astro component available for use throughout your component with Astro.props, slots render child HTML elements where they are written.
  - An Astro component can also have named slots. This allows you to pass only HTML elements with the corresponding slot name into a slot’s location.
    - Slots are named using the name attribute.
  - To inject HTML content into a particular slot, use the slot attribute on any child element to specify the name of the slot. All other child elements of the component will be injected into the default (unnamed) `<slot />`.
  - Use a `slot="my-slot"` attribute on the child element that you want to pass through to a matching `<slot name="my-slot" />` placeholder in your component.


### Astro Constants
  - Create a `constants.ts` file in the `src/` directory. This file will be imported in the project and will contain all of the constants that you need in your project.


### Astro Type Sync
  - There is a CLI command that can be run to setup types in an Astro project: `npx astro sync`


### Content Collections
  - `Content collections` are the best way to manage and author content in any Astro project. Collections help to organize your documents, validate your frontmatter, and provide automatic TypeScript type-safety for all of your content.
  - A content collection is any top-level directory inside the reserved `src/content` project directory, such as `src/content/newsletter` and `src/content/authors`. Only content collections are allowed inside the `src/content` directory. **This directory cannot be used for anything else.**
  - A collection entry is any piece of content stored inside of your content collection directory.
  - Entries can use content authoring formats including Markdown & MDX or as one of the two supported data formats of JSON or YAML.
  - It's recommended to use a consistent naming scheme (lower-case, dashes instead of spaces) for your files to make it easier to find and organize my content, but this is not required.
  - You can also exclude entries from being built by prefixing the filename with an underscore (`_`).
  - Once there is a collection, it can be queried using Astro API(s).
  
  
  #### Content Config
    - Inside of the `src/content` directory, a `config.ts` file that will be used to configure the content collection.
    - The `src/content/config.ts` file is *optional*. However, choosing not to define your collections will disable some of their best features like frontmatter schema validation or automatic TypeScript typings.
  
  #### Defining A Collection Schema
    - Schemas enforce consistent frontmatter or entry data within a collection.
    - A schema guarantees that this data exists in a predictable form when you need to reference or query it. If any file violates its collection schema, Astro will provide a helpful error to let you know.
    - Schemas also power Astro’s automatic TypeScript typings for your content. When you define a schema for your collection, Astro will automatically generate and apply a TypeScript interface to it. The result is full TypeScript support when you query your collection, including property autocompletion and type-checking.
  
  #### Defining Multiple Collection & Collection References
    - If multiple schemas are needed, I can use `defineCollection()` as many times as you want to create multiple schemas. All collections must be exported from inside the single collections object.
    - With the `reference()` function from the Collections API, you can define a property in a collection schema as an entry from another collection. For example, you can require that every space-shuttle entry includes a pilot property which uses the pilot collection’s own schema for type checking, autocomplete, and validation.
    - A common example is a blog post that references reusable author profiles stored as JSON, or related post URLs stored in the same collection:
      `src/content/blog/welcome.md`
        ```md
        ---
        title: "Welcome to my blog"
        author: ben-holmes # references `src/content/authors/ben-holmes.json`
        relatedPosts:
        - about-me # references `src/content/blog/about-me.md`
        - my-year-in-review # references `src/content/blog/my-year-in-review.md`
        ---
        ```


### Astro Dynamic API Endpoints
  * SSG:
    - In a default `SSG` Astro project, the only HTTP method that is available for exposure is `GET`.
    - You can define an API endpoint that returns JSON or YAML data using the `endpoint` function in Astro API(s).
    - As an example a JSON file or YAML file could be generated at build time and an endpoint could return the most recent build's JSON or YAML data, making it the response of the endpoint.
  
  * SSR:
    - Astro allows you to choose on-demand rendering for some, or all of your pages and endpoints.
    - This is also known as server-side rendering (SSR): generating HTML pages on the server when requested and sending them to the client.
    - An `adapter` is used to run your project on the server and handle these requests.
    - This on-demand rendering allows you to:
      - Implement sessions for login state in your app.
      - Render data from an API called dynamically with `fetch()`.
      - Deploy your site to a host using an `adapter`.
    - Consider enabling on-demand server rendering in your Astro project if you need the following:
      - API endpoints:
          - Create specific pages that function as API endpoints for tasks like database access, authentication, and authorization while keeping sensitive data hidden from the client.
      - Protected pages: 
        - Restrict access to a page based on user privileges, by handling user access on the server.
      - Frequently changing content: Generate individual pages without requiring a static rebuild of your site. This is useful when the content of a page updates frequently.