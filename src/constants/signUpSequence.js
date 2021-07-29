/**
 * TODO: 
 *  - Error Message
 */

const signUpSequence = [
    {
        title: 'Daftar',
        inputs:[
            {
                name: 'email', 
                placeholder: 'Email',
                validasi : 'Email yang anda masukkan harus sesuai format'
            }
        ],
    },
    {
        title: 'Nama Lengkap',
        inputs:[
            {
                name: 'firstName', 
                placeholder: 'Nama Depan',
            },
            {
                name: 'lastName', 
                placeholder: 'Nama Belakang',
                validasi : 'Nama depan dan nama belakang harus disi'
            }
        ]
    },
    {
        title: 'Buat Kata Sandi',
        inputs:[
            {
                name: 'password', 
                placeholder: 'Kata sandi minimal 8 digit',
                type: 'password',
            },
            {
                name: 'passwordConfirm', 
                placeholder: 'Ulangi kata sandi',
                type: 'password',
            }
        ]
    },
    {
        title: 'Nama Pengguna',
        inputs:[
            {
                name: 'username', 
                placeholder: 'Buat Nama Pengguna, contoh: nusaku45',
            },
        ]
    },
    {
        title: 'Verifikasi Nomor Telepon',
        inputs:[
            {
                name: 'phone', 
                placeholder: '813****',
                variant : 'prefix',
                type: 'number'
            },
        ]
    },
]
  
  export default signUpSequence;