### Virtual DOM

What: 
- It’s the in memory **js object representation of the original DOM** created by react library.

Why:
- Because, exisiting DOM painiting using "js or jquery" is expensive and traversing is manual. So, VDOM will perform all the changes
inside this object and only when required in batches it updates the original DOM by **traversing recursively** till the end of DOM tree.
- It reduces the direct manipulation of the original DOM

How:
- It achieves this behavior by using its **diffing algorithm**.

Tools:
- Diffing algorithm.

Links
- https://www.youtube.com/watch?v=7YhdqIR2Yzo
