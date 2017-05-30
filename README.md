# AVL Tree

## Background
In computer science, an AVL tree is a self-balancing binary search tree. It was the first such data structure to be invented.[2] In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property. Lookup, insertion, and deletion all take O(log n) time in both the average and worst cases, where n is the number of nodes in the tree prior to the operation. Insertions and deletions may require the tree to be rebalanced by one or more tree rotations.
The AVL tree is named after its two Soviet inventors, Georgy Adelson-Velsky and Evgenii Landis, who published it in their 1962 paper "An algorithm for the organization of information===".[3]
AVL trees are often compared with red–black trees because both support the same set of operations and take O(log n) time for the basic operations. For lookup-intensive applications, AVL trees are faster than red–black trees because they are more strictly balanced.[4] Similar to red–black trees, AVL trees are height-balanced. Both are, in general, neither weight-balanced nor μ-balanced for any μ≤1⁄2;[5] that is, sibling nodes can have hugely differing numbers of descendants.


This is a rough draft of how the application will look like:
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/wireframe.JPG)
### Insertion
Users insert a number into the input field. If they insert the number for the first time or they have reseted the application, the tree is empty. The first number is placed on the root of the tree. The following numbers will be inserted according the following rules:

1. First the number will take a place according to Binary Search Tree rules.
2. Then, if the tree becomes unbalanced, it performs one of the rotations depending on the unbalanced case. The following images illustrate all possible cases and type of rotaion for each of them:
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/firstThreeCases.JPG)
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/forthCase.JPG)

### Deletion
User will be able to delete a number from the tree by hovering and clicking on a cross symbol which will appear on hover. The tree will behave according the same rules as for insertion.

### Examples
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/insertion.JPG)
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/deletion.JPG)

## Functionality and MVP
The visualization will have the following functionality:
* Accept users' input. (a number)
* Place the number to the node which is determined by the algorithm.
* Movements are smoothly animated so users can track how the tree rotation
* Delete a number from the tree
* Rotate the tree after deletion and animate the rotation in the same manner

## Wireframes
This app will consist of a single screen with the input field and the tree when numbers are added, and navlinks to my Github and LinkedIn.
The application will also have a reset button which will delete all nodes from the tree.

## Architecture and Technologies
* Vanilla JavaScript
* Easel.js with HTML5 Canvas
* Webpack to bundle and serve up various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

display.js: this script will handle the logic for creating and updating the necessary Easel.js elements and rendering them to the DOM.''

tree.js: this script will handle the users' iput and the tree rotations

## Bonus:
* Add finding functionality.

# Binary Heap
## Background
A binary heap is a heap data structure that takes the form of a binary tree. Binary heaps are a common way of implementing priority queues. The binary heap was introduced by J. W. J. Williams in 1964, as a data structure for the heapsort.
A binary heap is defined as a binary tree with two additional constraints:
Shape property: a binary heap is a complete binary tree; that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.
Heap property: the key stored in each node is either greater than or equal to (≥) or less than or equal to (≤) the keys in the node's children, according to some total order.
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/heapRepresentaion.JPG)
The UI for this part of the application will look same as for the AVL tree.
### Insertion
Insertion a number to a heap will take the following steps:
1. The number will be inserted into the first available spot starting from the left.
2. The entry will bubble up until the heap-order property is satisfied (No child has a key less than its parent node)
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/heapInsertion.JPG)
### Deletion
1. Remove the root of the tree.
2. The hole will be filled by the last entry in the tree
3. Then that entry will bubble down until the heap-order property is satisfied
![alt text](https://github.com/vilyapilya/JavaScriptProjectProposal/blob/master/images/HeapRemoval.JPG)

# Implementaion Timeline:
* Day 1: Setup all necessary Node modules, including getting webpack up and running and Easel.js installed. Create webpack.config.js as well as package.json. Write a basic entry file and the bare bones of all 3 scripts outlined above. Learn the basics of Easel.js. Goals for the day:

Get a green bundle with webpack
Learn enough Easel.js to render an object to the Canvas element

* Day 2: Write AVL tree and Binary Heap logic Goals for the day:
Get insertion and deletion work in console for both data structures.

* Day 3: Integrade users' input with the written algorithm and write animation for the nodes.
Goal for the day:
Animate insertion and deletion process for both data structures.
