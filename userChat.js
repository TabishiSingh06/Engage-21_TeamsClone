const users = [];

const addUser = ({ id, name, room }) => {
    // let name1;
    // let room;
    // (name ? name1 = name.trim().toLowerCase() : null)
    //     (room1 ? room = room1.trim().toLowerCase() : null)
    console.log(name);

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if (!name || !room) return { error: 'Add username and room to chat 😊.' };
    if (existingUser) return { error: 'Username is taken.' };

    const user = { id, name, room };

    users.push(user);

    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };