### Rendering

What:
- It’s the process by which React creates a virtual representation of the UI based on the current state and props of components. This virtual representation is then used to update the actual DOM efficiently or React components into the DOM elements that make up the user interface
- **Component(current state) → VDOM → UI(Original DOM)**
- **Initial Mount**:** When a component is first added to the DOM.
- **Re-Render**: triggering an update(state).
- Note:
  - prop - explicit state just passed to descendant
  - context - invisible state passed via context
  - local state - internal state defined inside the descendant component

Why:
- **Declarative UI:** Allows developers to describe the UI declaratively(Simple **mental model** for UI development).
- **Component-Based Architecture:** Facilitates the creation of reusable UI components.
- **Efficient Updates:** Utilizes the virtual DOM and diffing algorithm to update the real DOM efficiently.

When:
- Rendering occurs:
    Initially, when the component is first mounted.
    When the component's state or props change.
    When the parent component re-renders and causes its child components to re-render.

How:
- Rendering is mostly handled automatically by React. Developers create components and React takes care of rendering

Tools:
- virtual DOM
- diffing algorithm

Links
- https://www.joshwcomeau.com/react/why-react-re-renders/
