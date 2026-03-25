const storage={};
function simpleHash(str){
    let hash=0;
    for (let i=0;i<str.length;i++){
        hash+=str.charCodeAt(i)*(i+1);
    }
    return hash;
}
function storeData(key,value){
    const hashedKey=simpleHash(key);
    storage[hashedKey]=value;
    console.log("stored at index:",hashedKey);
}
function getData(key){
    const hashedKey=simpleHash(key);
    return storage[hashedKey];
}
storeData("name","Pulkit");
storeData("a","a");
console.log(getData("name"))
console.log(getData("a"))

