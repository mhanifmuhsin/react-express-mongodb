import React from 'react';

const DaftarSiswa = React.lazy(() => import('./components/Siswa/DaftarSiswa'))
const Home = React.lazy(() => import('./components/Home'))

const routes = [
    { path: '/siswa', Component: DaftarSiswa },
    { path: '/', Component: Home }
]
export default routes