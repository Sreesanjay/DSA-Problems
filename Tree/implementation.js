/**
 * basic structure of a tree
 */
class TreeNode{
    constructor(value){
        this.value = value;
        this.child= [];
    }
    appendChild(node){
        this.child.push(node);
    }
}
const traverse = (node)=>{
    console.log(node.value)
    for(let child of node.child){
        traverse(child)
    }
}
const root = new TreeNode(10);
const parent1 = new TreeNode(20);
const parent2 = new TreeNode(30);
const child1 = new TreeNode(40);
const child2 = new TreeNode(50);
const child3 = new TreeNode(60);
const child4 = new TreeNode(70);

root.appendChild(parent1);
root.appendChild(parent2);
parent1.appendChild(child1);
parent1.appendChild(child2);
parent2.appendChild(child3);
parent2.appendChild(child4);

traverse(root) // => 10, 20, 40, 50, 30, 60, 70