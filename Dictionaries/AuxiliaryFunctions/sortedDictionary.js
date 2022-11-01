
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
    for(var key in Object.keys(this.datastore).sort()) {
    console.log(key + " -> " + this.datastore[key]);
    }
   }
   
var namebook = new Dictionary();
namebook.add("Raymond", 5353);
namebook.add("David", 9282);
namebook.add("Mike", 2433);
namebook.add("Cynthia", 9377);
namebook.add("Jennifer", 9995);
namebook.add("Danny", 7732);
console.warn( "David's extension " +namebook.find("David"));
console.warn("NameBook Entries " + namebook.showAll());


