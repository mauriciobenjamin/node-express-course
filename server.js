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

app.get('/usuarios/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Tenemos un usuario',
        user: req.params.id
    })
})

app.listen(8000, () => console.log('el servidor esta funcionando'));