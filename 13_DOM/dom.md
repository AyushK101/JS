
# WINDOW:-
 * topmost object in the BOM is the window object representing the window or tab.

# DOCUMENT:- 
 * Each HTML document that gets loaded into a window becomes a document object. 
 * The document contains the contents of the page.  Using document object, JavaScript can modify,
 * add and delete the HTML elements, attributes CSS styles in the page.
 * (You can access a document object either using window.document property or 
 * using document object directly as window is global object.)

# SCREEN:-
 * Screen is the window property that holds information of browser screen. 
 * It refers to screen object associated with that window object. 
 * Used to display screen width, height, colorDepth, pixelDepth etc.
 * (screen can be accessed either by window.screen or screen object directly.)

-----
# node
A node is a fundamental part of the DOM tree. Everything in a document is a node. Nodes can be elements, text within elements, attributes, comments, etc.  

# element 
An element is a specific type of node that represents an HTML element.

# nodeList
A collection of nodes.It's an array-like object that contains a list of nodes, such as elements, text nodes, or others, that meet the specified criteria.

# HTMLCollection
An HTMLCollection is also a collection of nodes, specifically a collection of HTML elements.


# selecting the element 
1. getElementById('id');
2. getElementsByClassName('class'); = returns a `array-like` collection of elements which is HTMLCollection.
3. getElementsByTagName('tag'); = returns a `array-like` collection of elements {HTMLCollection}
4. getElementsByName('name'); = give nodeList of elements of specified name attribute
5. querySelector('cssSelector'); = select the first element 
6. querySelectorAll('cssSelector'); = gives a nodeList of selected elements



