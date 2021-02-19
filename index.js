// Load Data json
let datas = require("./data.json");

function calculateData(key, dataJson) {
    /** biar lebih jelas baca dokumentasi
     * Dokumentasi map = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     * Dokumentasi reduce = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     *  */ 
  let result = dataJson
  // parseInt = convert string to int
  // ~~parseInt = jika valuenya beruna NaN (not a number) akan diubah menjadi 0
    .map((data) => ~~parseInt(data[key]))
    // acc = accumulator
    .reduce((acc, data) => data + acc);
  return result;
}

function createNewObject(dataJson) {
  // buat object result (hasil perhitungan)
  let objectResult = {};

  // looping untuk membuat object baru
  // *baca dokumentasi Object.entries biar lebih jelas : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  for (const [key, value] of Object.entries(dataJson[0])) {
    if (
      key != "/sppadi/create" &&
      key != "bulan" &&
      key != "kec" &&
      key != "kode_prop" &&
      key != "kode_kab" &&
      key != "kode_kec" &&
      key != "user_id" &&
      key != "submit"
    ) {
      // menjumlahkan 2 object (kalkulasi setiap key)
      // dataJson ialah isi json array dengan 2 object
      let newValue = calculateData(key, dataJson);
      // menambahkan key beserta value baru dari hasil perhitungan ke dalam objectResult
      objectResult[key] = newValue;
    }
  }
  //   convert javascript object string ke json
  convertToJson = JSON.stringify(objectResult);
  //   return hasil object
  return convertToJson;
}

let hasil = createNewObject(datas);
console.log(hasil);
