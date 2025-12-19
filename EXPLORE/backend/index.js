import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title:'A joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id: 2,
            title:'Another joke',
            content: 'Why don’t scientists trust atoms? Because they make up everything!'
        },
        {
            id: 3,
            title:'One more joke',
            content: 'Why did the bicycle fall over? Because it was two-tired!'
        },
        {
            id: 4,
            title:'Last joke',
            content: 'What do you call fake spaghetti? An impasta!'
        }
    ];

    res.send(jokes);
});

app.listen(PORT, () => {
    console.log(`Server at http://localhost:${PORT}`);
});