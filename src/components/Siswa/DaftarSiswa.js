import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import DetailSiswa from './DetailSiswa';
import Axios from 'axios';

const DaftarSiswa = () => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [idSiswa, setIdSiswa] = useState('');
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
        const data = e.target.dataset.idsiswa;
        setIdSiswa(data);
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

    const handleDelete = async (id) => {
        if (window.confirm('yakin mau dihapus?')) {
            try {
                const response = await
                    Axios.delete('http://localhost:3000/siswa/' + id)
                const { message } = response.data
                alert(message)
                history.push('/siswa')
            } catch (error) {
                alert('Network error')
            }
        }
    }

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
                                    <Button variant="info" onClick={handleShow} data-idsiswa={siswa._id}>Lihat</Button>
                                    <Button variant="warning"><a href={`/siswa/ubah/${siswa._id}`}>Ubah</a></Button>
                                    <Button variant="danger" onClick={() => handleDelete(siswa._id)}>Hapus</Button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </Container>
            <DetailSiswa show={show} idSiswa={idSiswa}  handleClose={handleClose} />
        </>
    )
}

export default DaftarSiswa;