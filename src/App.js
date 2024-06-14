import React,{useState}from'react';
import RowMahasiswa from './components/RowMahasiswa';
import RowTambahMahasiswa from'./components/RowTambahMahasiswa';

//Data awal tabel mahasiswa
const arrMahasiswas=[
  {
    nim:"18010245",
    nama:"Abdi Abadi",
    jurusan:"Teknik Informatika",
    asalProvinsi:"DKI Jakarta"
  },
  {
    nim:"19010214",
    nama:"Biyan Pratama",
    jurusan:"Kedokteran",
    asalProvinsi:"Sumatera Barat"
  },
  {
    nim:"20010710",
    nama:"Difa Ramadhani",
    jurusan:"Ilmu Komputer",
    asalProvinsi:"Jawa Tengah"
  },
  {
    nim:"20010790",
    nama:"Anisa Putri",
    jurusan:"Sastra Inggris",
    asalProvinsi:"Kalimantan Barat"
  },
  {
    nim:"20010791",
    nama:"Jessika Aruna",
    jurusan:"Psikologi",
    asalProvinsi:"Sulawesi Tenggara"
  }
];

const App=()=>{
  const[mahasiswas,setMahasiswas]=useState(arrMahasiswas);

  const handleTambahMahasiswa = (data)=>{
    const newMahasiswas=[
      ...mahasiswas,data
    ];
    setMahasiswas(newMahasiswas);
  }

  //handleruntukmengeditdatamahasiswa
  //akandi-triggerdarikomponenRowMahasiswa
  const handleEditMahasiswa=(data)=>{
    //cariindexdarimahasiswayangakandieditberdasarkannomornim
    const result=mahasiswas.findIndex(
      (mahasiswa)=>mahasiswa.nim===data.nim
    );

    //copy mahasiswas karena fungsi splice akan mengubah array asal(mutate)
    const newMahasiswas=mahasiswas;
    newMahasiswas.splice(result,1,data);
    setMahasiswas([...newMahasiswas]);
  }

  //handle untuk menghapus data mahasiswa dikomponen RowMahasiswa
  const handleHapusMahasiswa=(e)=>{
    //cariindexdarimahasiswayangakandihapusberdasarkannomornim
    const result=mahasiswas.findIndex(
      (mahasiswa)=>mahasiswa.nim===e.target.id
    );
    //copymahasiswaskarenafungsispliceakanmengubaharrayasal(mutate)
    const newMahasiswas=mahasiswas;
    newMahasiswas.splice(result,1);
    setMahasiswas([...newMahasiswas]);
  }
 
  return(
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Data Mahasiswa UI</h1>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>Asal Provinsi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                  {
                  mahasiswas.map((mahasiswa)=>
                    <RowMahasiswa
                      key={mahasiswa.nim}
                      mahasiswa={mahasiswa}
                      onEditMahasiswa={handleEditMahasiswa}
                      onHapusMahasiswa={handleHapusMahasiswa}
                      />
                    )
                  }
                  <RowTambahMahasiswa mahasiswas={mahasiswas} onTambahMahasiswa={handleTambahMahasiswa}/>
                </tbody>
              </table>
            </div>
        </div>
      </div>
    )
  }
  

  export default App;

  
  