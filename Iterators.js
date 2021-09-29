let myArr=["apple","mango","pineapple","grapes"];
console.log(myArr);

function myIterator(values) {
    let arr = 0;
    return {
         next: function () {
            if (arr < values.length) {
                return {
                    value: values[arr++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
 
let fruits=myIterator(myArr);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
