const User = require('./models/User');  

const initUsers = async () => {
    try {
       
        const users = await User.find();

        if (users.length === 0) {
            const usersData = [
                { username: 'user1', password: 'arbolito' },
                { username: 'user2', password: 'casemiro' },
                { username: 'user3', password: 'rolling' }
            ];
            

            for (let userData of usersData) {
                const user = new User({
                    username: userData.username,
                    email: userData.email,
                    password: await new User().encryptPassword(userData.password) 
                });
                await user.save();  
            }

            console.log('Usuarios inicializados correctamente');
        } else {
            console.log('Ya existen usuarios en la base de datos');
        }
    } catch (error) {
        console.error('Error al inicializar usuarios: ', error.message);
    }
};

module.exports = initUsers;
