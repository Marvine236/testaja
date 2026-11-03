
import React, { useState } from 'react';

function TambahKurang() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hasil Hitungan: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Tambah
            </button>

            <button onClick={() => setCount(count - 1)}>
                Kurang
            </button>
        </div>
    );
}

export default TambahKurang;
