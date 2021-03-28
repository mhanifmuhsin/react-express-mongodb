import Axios from 'axios';
import React,{useState} from 'react';
import { Button, Modal,Form} from 'react-bootstrap';

const TambahSiswa = ({ show, handleShow, handleClose }) => {
    // const history = useHsitory();
    const [siswa,setSiswa] = useState({
        nama:'',
        kelas:''
    })

    const handleChange = (e,name) =>{
        const value = e.target.value
        setSiswa({...siswa,[name]:value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await
            Axios.post('http://localhost:3000/siswa',siswa)
            const{status,message} = response.data
            if(status === 'success'){
                alert(message)
            }else{
                alert(message)
            }
        }catch (error){
            alert('Koneksi Gagal')
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Siswa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="nomorKK">
                            <Form.Label>Nomor Kartu Keluarga</Form.Label>
                            <Form.Control size="sm" type="text" value={siswa.nomorKK}
                            onChange={(e)=>handleChange(e,'nomorKK')}/>
                        </Form.Group>
                        <Form.Group controlId="nomorIndukKeluarga">
                            <Form.Label>Nomor Induk Keluarga</Form.Label>
                            <Form.Control size="sm" type="text" value={siswa.nomorIndukKeluarga}
                            onChange={(e)=>handleChange(e,'nomorIndukKeluarga')}/>
                        </Form.Group>
                        <Form.Group controlId="nama">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control size="sm" type="text" value={siswa.nama}
                            onChange={(e)=>handleChange(e,'nama')}/>
                        </Form.Group>
                        <Form.Group controlId="tempatLahir">
                            <Form.Label>Tempat Lahir</Form.Label>
                            <Form.Control size="sm" type="text" value={siswa.tempatLahir}
                            onChange={(e)=>handleChange(e,'tempatLahir')}/>
                        </Form.Group>
                        <Form.Group controlId="tanggalLahir">
                            <Form.Label>Tanggal Lahir</Form.Label>
                            <Form.Control size="sm" type="date" value={siswa.tanggalLahir}
                            onChange={(e)=>handleChange(e,'tanggalLahir')}/>
                        </Form.Group>
                        <Form.Group controlId="kelas">
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control size="sm" type="text" value={siswa.kelas}
                            onChange={(e)=>handleChange(e,'kelas')} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Keluar</Button>
                    <Button variant="primary" onClick={handleSubmit}>Simpan</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TambahSiswa;