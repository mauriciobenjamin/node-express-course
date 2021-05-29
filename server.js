const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

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

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "Billy The Kid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'el token encriptado va aquí'
        })
    } else {
        res.json({
            success: false,
            message: 'Password y user name incorrectos'
        })
    }

})

app.listen(8000, () => console.log('el servidor esta funcionando'));