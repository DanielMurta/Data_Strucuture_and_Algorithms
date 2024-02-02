class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key) { //(O(1)
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) + i) %
            this.data.length
        }

        return hash
    }

    set(key, value) { //O(1)
        let address = this._hash(key)

        if(!this.data[address]){
            this.data[address] = [];
        }
        
        this.data[address].push([key, value])
        return this.data
    }

    get(key) { //O(1)
        let address = this._hash(key);
        const currentBuket = this.data[address];
        if (currentBuket){
            for (let i = 0; i < currentBuket.length; i++) {
                if(currentBuket[i][0] === key){
                    return currentBuket[i][1]
                }               
            }
        }
    }

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i])
            }
            
            return keysArray
        }
    }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 100);
myHashTable.set('oranges', 10);
console.log(myHashTable.keys());