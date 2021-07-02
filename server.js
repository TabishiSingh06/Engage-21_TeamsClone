const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        method: ["GET", "POST"]
    }
})

app.use(cors());

//connecting Database here

connectDB();

//Init middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API/Server Running'));

io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    });

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
    })

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    });
});

//Define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/save-call-id', require('./routes/api/users1'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));