
import React, { useState } from 'react';

function InputQuiz() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');

    return (
        <div>
            <h1>Input Data</h1>

            <div>
                <label>Nama: </label>
                <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan Nama ..."
                />
            </div>

            <br />

            <div>
                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Email ..."
                />
            </div>

            <br />

            <div>
                <label>Alamat: </label>
                <input
                    type="text"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Masukkan Alamat ..."
                />
            </div>

            <br />

            <h2>Hasil Inputan:</h2>

            <h3>Nama: {nama}</h3>
            <h3>Email: {email}</h3>
            <h3>Alamat: {alamat}</h3>
        </div>
    );
}

export default InputQuiz;
