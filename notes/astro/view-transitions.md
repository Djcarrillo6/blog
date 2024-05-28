# Astro - View Transitions API
### Sourced From: Coding in Public - [YT-Link](https://www.youtube.com/watch?v=9T4N0cIlBUE)
#### Date: 5/27/2024


### Initial Setup

#### Full site view transitions (SPA mode)
  - Import and add the <ViewTransitions /> component to your common <head> or shared layout component. Astro will create default page animations based on the similarities between the old and new page, and will also provide fallback behavior for unsupported browsers.


#### Adding Transitions To Specific Pages
  - Opt in to using view transitions on individual pages by importing and adding the <ViewTransitions /> routing component to <head> on every desired page.


#### Transtional Directives
  - Astro will automatically assign corresponding elements found in both the old page and the new page a shared, unique view-transition-name. This pair of matching elements is inferred by both the type of element and its location in the DOM.
  
  - Use optional transition:* directives on page elements in your .astro components for finer control over the page transition behaviour during navigation.
    - `transition:name`: Allows you to override Astro’s default element matching for old/new content animation and specify a transition name to associate a pair of DOM elements.
    - `transition:animate`: Allows you to override Astro’s default animation while replacing the old element with the new one by specifying an animation type. Use Astro’s built-in animation directives or create custom transition animations.
    - `transition:persist`: Allows you to override Astro’s default replacing old elements for new ones and instead persist components, state, and HTML elements(includig DOM hydration) when navigating to another page.