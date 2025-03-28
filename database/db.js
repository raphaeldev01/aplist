const { doc, getDoc, getDocs, collection, setDoc } = require("firebase/firestore")
const Database = require("./databaseConfig")

const getData = async (lang, dataType) => {
    if(!lang || !dataType) {
        return {error: true, data: "Please provide a language and a data type"};
    }
    const docRef = doc(Database, lang, dataType);
    const data = await getDoc(docRef);
    if(data.exists()) {
        return {error: false, data: data.data()}
    }else {
        return {error: true, data: "Data not found"}
    }
}

const getTypes = async (lang) => { 
    if(!lang) {
        return {error: true, data: "Please provide a language"};
    }
    const data = await getDocs(collection(Database, lang));
    if(data.docs.length > 0) {
        console.log(data.docs.length);
        const arr = data.docs.map(doc => doc.id);

        return { types: arr }
    }else {
        return {error: true, data: "Data not found"}
    }
}

const addItens = async (lang, dataType, data) => {
    if(!lang || !dataType || !data) {
        return {error: true, data: "Please provide a language, a data type and the data"};
    }
    const docRef = doc(Database, lang, dataType);
    const res = await setDoc(docRef, data);
    return res;
}

module.exports = {
    getData,
    getTypes
}