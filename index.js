const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.get('/siswa',  (request, response) => {
    response.end("menampilkan data siswa");
})

app.get('/siswa/:nama',  (request, response) => {
    // proses dengan siswa bernama x
    let namaSiswa = request.params.nama;

    response.end("menampilkan siswa dengan nama: " + namaSiswa);
})

app.post('/siswa', (request, response) => {
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Siswa baru nama: " + namaSiswa + ", alamat: " + alamatSiswa);
})

app.delete('/siswa/:nama', (request, response) => {
    let namaSiswa = request.params.nama;

    response.end("siswa dengan nama: " + namaSiswa + " akan dihapus")
})

app.put('/siswa/:id', (request, response) => {
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Siswa dengan ID "+ id +" telah terupdate!");
})

app.listen('8080', (e) => {
    console.log(e);
})