// bubble sort
// O(n2)
// function bubble(arr) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     }
//   } while (swap);
//   return arr;
// }
// console.log(bubble([-2, -3, 45, 2, 3]));

// insertion sort
// O(n2)
// function insertion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let NTI = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > NTI) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = NTI;
//   }
//   return arr;
// }
// console.log(insertion([-2, -3, 45, 2, 3]));

// quick
// O(nlogn)
// function quick(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quick(left), pivot, ...quick(right)];
// }
// console.log(quick([-2, -3, 45, 2, 3]));

// merge Sort
// O(nlogn)
// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let minIndex = Math.floor(arr.length / 2);
//   let leftArr = arr.slice(0, minIndex);
//   let rightArr = arr.slice(minIndex);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   let sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] < rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }
// console.log(mergeSort([-2, -3, 45, 2, 3]));

// selection
// function selection(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }
// console.log(selection([-2, -3, 45, 2, 3]));

// hashtable
class hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key){
    let total=0
    for(let i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
    }
    return total%this.size
  }

  set(key,value){
    const index = this.hash(key)
    this.table[index]= value
  }
  get(key){
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key){
    const index = this.hash(key)
    this.table[index]= undefined
  }
  display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i]);
        }
    }
  }
}
const table = new hashtable();

table.set("name","Bruce")
table.set("age",25)
table.display()

console.log(table.get('name'));
