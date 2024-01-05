class Node {
    constructor(value){
        this.value= value
        this.next = null
    }
}
class linkedList {
    constructor(){
        this.head= null
        this.size =0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    append(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else{
        let prev = this.head
        while(prev.next){
            prev = prev.next
        }
        prev.next = node
      }
      this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }
        else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}
const list = new linkedList()
console.log('list is empty',list.isEmpty());
console.log('getsize',list.getSize());
list.print()
list.print()

list.append(5)
list.append(10)
list.print()

list.append(20)
list.append(30)
list.print()