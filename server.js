const express = require('express');
const app = express();

const mockUserDate = [
    {name: 'Marco'},
    {name: 'Gil'}
];

app.get('/usuarios', (req, res) => {
    res.json({
        success: true,
        message: 'Exito obteniendo a los usuarios',
        users: mockUserDate
    });
});

app.listen(8000, () => console.log('el servidor esta funcionando'));