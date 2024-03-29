//adding a node 
class Node{
   constructor(value){
    this.value= value
    this.next = null
   }
}
class linkedList{
    constructor(){
        this.head = null
        this.size =0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
}
const list = new linkedList()
console.log('list is empty',list.isEmpty());
console.log('get size ',list.getSize());
list.prepend(10)
list.prepend(20)
