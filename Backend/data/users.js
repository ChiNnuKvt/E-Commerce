const bcrypt = require('bcryptjs')
const users = [
    {
        name:"Admin",
        email:"admin@example.com",
        password:bcrypt.hashSync('admin1234',10),
        isAdmin:true
    }
]
module.exports=users;