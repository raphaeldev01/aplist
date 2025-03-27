const { doc, getDoc } = require("firebase/firestore")
const Database = require("./databaseConfig")

const getData = async (lang, dataType) => {
    const docRef = doc(Database, lang, dataType);
    const data = await getDoc(docRef);
    if(data.exists()) {
        return {error: false, data: data.data()}
    }else {
        return {error: true, data: "Data not found"}
    }
}

module.exports = {
    getData
}