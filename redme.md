## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. Answer: 
-getElementById -> selected a single element by id.
-getElementsByClassName -> selected all elements of same class name by class.
-querySelector -> selected a single element by CSS selector.
-querySelectorAll -> selected all matching elements by CSS selector.

### 2. How do you create and insert a new element into the DOM?

2. Answer:
step-1 : document.createElement('tagName');
step-2 : .setAttribute("id","..") or .className = "..";
step-3 : .appendChild();

### 3. What is Event Bubbling? And how does it work?

3.Answer:
it is a system where an event occurs on an element,that event triggered on the target element and then bubbles up to its parent . 

### 4. What is Event Delegation in JavaScript? Why is it useful?

4. Answer:
it is a system where attach one event listener in a parent element without adding every child.

why it's useful:by this system we save memory by using one listener.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

5. Answer:
preventDefault() -> it stops action of the browser's default and bubble up.
stopPropagation() -> it stops event from bubble up and the action of browser's default happen.