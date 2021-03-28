import React from 'react';

const DaftarSiswa = React.lazy(() => import('./components/Siswa/DaftarSiswa'))
const TambahSiswa = React.lazy(() => import('./components/Siswa/TambahSiswa'))
const UbahSiswa = React.lazy(() => import('./components/Siswa/UbahSiswa'))
const Home = React.lazy(() => import('./components/Home'))

const routes = [
    { path: '/siswa/tambah', Component: TambahSiswa },
    { path: '/siswa/ubah', Component: UbahSiswa },
    { path: '/siswa', Component: DaftarSiswa },
    { path: '/', Component: Home },
]
export default routes