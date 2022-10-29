/* keys() function, when called with an object, returns all the keys stored in that
object */

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
   }
   function add(key, value) {
    this.datastore[key] = value;
   }
   function find(key) {
    return this.datastore[key];
   }
   function remove(key) {
    delete this.datastore[key];
   }
   function showAll() {
    for(var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
    }
}
