class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) return this.root = newNode;
        return this.recursiveInsert(this.root, newNode);
    }
    recursiveInsert(node, newNode) {
        if (newNode.data <= node.data) {
            if (!node.left) return node.left = newNode;
            this.recursiveInsert(node.left, newNode);
        } else {
            if (!node.right) return node.right = newNode;
            this.recursiveInsert(node.right, newNode);
        }
    }
    inOrder(node) {
        if(!node) return 
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
    preOrder(node) {
        if(!node) return
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    postOrder(node) {
        if(!node)  return
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }
}

const bst = new BinaryTree();
bst.insert(5)
bst.insert(3)
bst.insert(10)
bst.insert(2)
bst.insert(5)
bst.insert(8)
bst.insert(30)
bst.postOrder(bst.root)