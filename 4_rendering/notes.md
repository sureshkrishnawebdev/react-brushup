### Rendering

**What:**
- It’s the process by which React creates a virtual representation of the UI based on the current state and props of components. This virtual representation is then used to update the actual DOM efficiently or React components into the DOM elements that make up the user interface
- **Component(current state) → VDOM → UI(Original DOM)**
- **Initial Mount**:** When a component is first added to the DOM.
- **Re-Render**: triggering an update(state).
- Note:
  - prop - explicit state just passed to descendant
  - context - invisible state passed via contextg
  - local state - internal state defined inside the descendant component

**Why:**
- **Declarative UI:** Allows developers to describe the UI declaratively(Simple **mental model** for UI development).
- **Component-Based Architecture:** Facilitates the creation of reusable UI components.
- **Efficient Updates:** Utilizes the virtual DOM and diffing algorithm to update the real DOM efficiently.

**When:**
- Rendering occurs:
    Initially, when the component is first mounted.
    When the component's state or props change.
    When the parent component re-renders and causes its child components to re-render.

**How:**
- Rendering is mostly handled automatically by React. Developers create components and React takes care of rendering
- It has 5 steps
  1. Component calls the render method (or returns JSX in functional components)
  2. React Element: React creates element definition for each of the component.
  3. React creates a virtual DOM representation from the element definition
  4. Reconciliation: For re-renders, React diffs this with the previous virtual DOM
  5. React updates the actual DOM with the necessary changes and UI related.

**Tools:**
- virtual DOM
- diffing algorithm
- Batching
- Concurrent mode
- Suspense

**Links**
- https://www.joshwcomeau.com/react/why-react-re-renders/
- https://www.youtube.com/watch?v=AwW7olQ84Qs&themeRefresh=1
- https://www.developerway.com/tags/re-renders

---
#### Misconceptions

  1. prop change triggers re-rendering
  2. parent component re-renders when there is state update in children
  3. whole application renders when there is change in context.

---
#### CONCEPTS

**1. Re-rendering**
  - **What**: It occurs when there is an update in state.

  - **Why**: It's required to update the DOM so it will be sync with latest data. so, we have our dynamic website :) else we might end up with the static website :(

  - **When**: It happens in below scenarios

    1. Current component state changes
    2. Parent component state changes[devoid of props]
    3. Context changes and it has been used in component

  - **How**: It is handled automatically handled by react as discussed above in rendering section.

  - **Pros**:

    1. Declarative

  - **Cons**:

    1. Performance issues if not handled properly.

**2. Patterns to avoid unwanted re-renders**

  1. Moving state specific to component
  2. Passing component as children - eg: scroll offset --> If there is no state dependency of the children components
  3. Passing component as prop - when there is inter-dependent actions among these components.
