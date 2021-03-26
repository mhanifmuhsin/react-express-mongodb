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
                        <Form.Group controlId="nama">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" value={siswa.nama}
                            onChange={(e)=>handleChange(e,'nama')}/>
                        </Form.Group>
                        <Form.Group controlId="kelas">
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control type="text" value={siswa.kelas}
                            onChange={(e)=>handleChange(e,'kelas')} />
                        </Form.Group>
                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
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