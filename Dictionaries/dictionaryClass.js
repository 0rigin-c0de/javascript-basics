/* keys() function, when called with an object, returns all the keys stored in that
object */

function Dictionary() {
    this.add = add;
    this.datastore = [ ];
    // this.datastore = new array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
   }
   // this function is used to add a particular key value pair 
   function add(key, value) {
    this.datastore[key] = value;
   }
// this function
   function find(key) {
    return this.datastore[key];
   }
   // this function is used to remove key or value 
   function remove(key) {
    delete this.datastore[key];
   }
   // this function is used to display all objects 
   function showAll() {
    for(var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
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
