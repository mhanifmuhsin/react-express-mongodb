import Axios from 'axios';
import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Form , Row, Col} from 'react-bootstrap';

const TambahSiswa = () => {
    const history = useHistory();
    const [siswa, setSiswa] = useState({
        kk:'',
        nik:'',
        nama: '',
        tempatLahir:'',
        tanggalLahir:'',
        alamat:'',
        kelas: '',
        provinsi: '',
        kabkota: '',
        kecamatan: '',
        desakelurahan: '',
        nis: '',
        ayah: '',
        ibu: ''
    })

    const handleChange = (e, name) => {
        const value = e.target.value
        setSiswa({ ...siswa, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await
                Axios.post('http://localhost:3000/siswa', siswa)
            const { status, message } = response.data
            if (status === 'success') {
                alert(message)
                history.push('/siswa');
            } else {
                alert(message)
            }
        } catch (error) {
            alert('Koneksi Gagal')
        }
    }
    return (
        <>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="kk">
                                <Form.Label>Nomor Kartu Keluarga</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.kk}
                                    onChange={(e) => handleChange(e, 'kk')} />
                            </Form.Group>
                            <Form.Group controlId="nik">
                                <Form.Label>Nomor Induk Keluarga</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.nik}
                                    onChange={(e) => handleChange(e, 'nik')} />
                            </Form.Group>
                            <Form.Group controlId="nama">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.nama}
                                    onChange={(e) => handleChange(e, 'nama')} />
                            </Form.Group>
                            <Form.Group controlId="tempatLahir">
                                <Form.Label>Tempat Lahir</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.tempatLahir}
                                    onChange={(e) => handleChange(e, 'tempatLahir')} />
                            </Form.Group>
                            <Form.Group controlId="tanggalLahir">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.tanggalLahir}
                                    onChange={(e) => handleChange(e, 'tanggalLahir')} />
                            </Form.Group>
                            <Form.Group controlId="kelas">
                                <Form.Label>Kelas</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.kelas}
                                    onChange={(e) => handleChange(e, 'kelas')} />
                            </Form.Group>
                            <Form.Group controlId="alamat">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.alamat}
                                    onChange={(e) => handleChange(e, 'alamat')} />
                            </Form.Group>
                        </Col>
                    
                        <Col>
                            <Form.Group controlId="provinsi">
                                <Form.Label>Provinsi</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.provinsi}
                                    onChange={(e) => handleChange(e, 'provinsi')} />
                            </Form.Group>
                            <Form.Group controlId="kabkota">
                                <Form.Label>Kab/Kota</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.kabkota}
                                    onChange={(e) => handleChange(e, 'kabkota')} />
                            </Form.Group>
                            <Form.Group controlId="kecamatan">
                                <Form.Label>Kecamatan</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.kecamatan}
                                    onChange={(e) => handleChange(e, 'kecamatan')} />
                            </Form.Group>
                            <Form.Group controlId="desakelurahan">
                                <Form.Label>Desa/Kelurahan</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.desakelurahan}
                                    onChange={(e) => handleChange(e, 'desakelurahan')} />
                            </Form.Group>
                            <Form.Group controlId="nis">
                                <Form.Label>Nomor Induk Siswa</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.nis}
                                    onChange={(e) => handleChange(e, 'nis')} />
                            </Form.Group>
                            <Form.Group controlId="ayah">
                                <Form.Label>Nama Ayah</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.ayah}
                                    onChange={(e) => handleChange(e, 'ayah')} />
                            </Form.Group>
                            <Form.Group controlId="ibu">
                                <Form.Label>Nama Ibu</Form.Label>
                                <Form.Control size="sm" type="text" value={siswa.ibu}
                                    onChange={(e) => handleChange(e, 'ibu')} />
                            </Form.Group>
                        </Col>
                    </Row>


                </Form>
                <Button variant="secondary" onClick={()=> history.push('./siswa')}>Keluar</Button>
                <Button variant="primary" onClick={handleSubmit}>Simpan</Button>
            </Container>
        </>
    )
}

export default TambahSiswa;