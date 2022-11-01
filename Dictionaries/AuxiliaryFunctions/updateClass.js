function Dictionary (){
    this.add = add;
    this.datastore = [ ];
    //this.datastore = new array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}
function add (key, value){
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
   }
function remove(key){
    delete this.datastore[key];
}   

function showAll() {
    for  (var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
    }
   }

   function count() {
    var n = 0;
    for  (var key in Object.keys(this.datastore)) {
    ++n;
    }
    return n;
   }

   function clear() {
    for  (var key in Object.keys(this.datastore)) {
    delete this.datastore[key];
    }
   }
   var pbook = new Dictionary();
   pbook.add("mike",1234);
   pbook.add("david",426383);
   pbook.add("tom",870679);

     // Output1
     console.log("mike's extension is  "+pbook.find("mike"));
     console.log("david's extension is  "+pbook.find("david"));
     console.log("tom's extension is  "+pbook.find("tom"));
   
     //Calling for remove method 
     pbook.remove("mike");
     console.log("mike's extension is  "+pbook.find("mike")); //output2

     //output3
     console.log("Number of entries: " + pbook.count());
     console.log("David's extension: " + pbook.find("David"));

