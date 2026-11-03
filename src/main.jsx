
import React from 'react';
import ReactDOM from 'react-dom/client';
import TambahKurang from './tambah_kurang.jsx';
import InputQuiz from './input_quiz.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container">
            <TambahKurang />

            <div className="pemisah">
                <hr />
                <hr />
            </div>

            <InputQuiz />
        </div>
    </React.StrictMode>
);
