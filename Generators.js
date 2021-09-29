function* myGen(){
    let i=0;
    while(true){
        yield i;
        i++;
    }
}

let gen=myGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
