import React, { } from 'react';
import { } from 'react-router-dom';

import api from '../Services/Api';

export default function () {
    const [userId, setUserId] = ('');
    const [Id, setId] = ('');
    const [title, setTitle] = ('');
    const [body, setBody] = ('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            userId,
            Id,
            title,
            body,
        };

        try {
          const response = await api.post(data);
            alert('Funciona')
        } catch (err) {
            alert('Nao funciona')
        }

    }

    return (
        <div className="container">
            <div className="content">
                <section>
                    {}

                    <h1>Post</h1>

                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="userId"
                        value={Id}
                        onChange={e => setUserId(e.target.value)}
                    />
                    <input
                        placeholder="ID"
                        value={Id}
                        onChange={e => setId(e.target.value)}
                    />
                    <input
                        placeholder="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="body"
                        value={Text}
                        onChange={e => setBody(e.target.value)}
                    />

                </form>
            </div>
        </div>
    )
}