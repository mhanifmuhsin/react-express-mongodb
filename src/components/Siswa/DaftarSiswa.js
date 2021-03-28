import React, { useEffect, useState } from 'react';
import { Table,Container,Button } from 'react-bootstrap';
import DetailSiswa from './DetailSiswa';

const DaftarSiswa = () => {
    const [show, setShow] = useState(false);
    const handleShow = (e) => {
        // e.preventDefault();
        setShow(true);
        // const data = e.target.dataset.imdbid;
        // setImdbKey(data);
      }
      
      const handleClose = () => setShow(false);

    const [daftarSiswa, setSiswa] = useState([]);
    const getDaftarSiswa = async () => {
        const url = 'http://localhost:3000/siswa';
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.data) {
            setSiswa(responseJson.data);
        }
    }
    useEffect(() => {
        getDaftarSiswa();

    }, [])

    return (
        <>
            <Container>
                <Button variant="success"><a href="/siswa/tambah">Tambah</a></Button>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>NIS</th>
                            <th>Nama</th>
                            <th>Kelas</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarSiswa.map((siswa) =>
                            <tr key={siswa._id}>
                                <td>{siswa.nis}</td>
                                <td>{siswa.nama}</td>
                                <td>{siswa.kelas}</td>
                                <td>
                                <Button variant="info" onClick={handleShow}>Lihat</Button>
                                <Button variant="warning">Edit</Button>
                                <Button variant="danger">Hapus</Button> 
                                </td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </Container>
            <DetailSiswa show={show} handleShow={handleShow} handleClose={handleClose}/>
        </>
    )
}

export default DaftarSiswa;