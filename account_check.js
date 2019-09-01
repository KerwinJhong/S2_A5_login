const users = [{
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
    },
    {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
    },
    {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
    },
    {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
    },
    {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
    }
]

function accountCheck(data) {
    let output = {}
    users.map(person => {
        if (person.email === data.email) {
            output = { err: 'Password 錯誤' }
            if (person.password === data.password) {
                output = { firstName: person.firstName, err: 'have not error' }
            }
        }
    })
    if (output.err === undefined) { output = { err: 'Username 錯誤' } }
    return output
}

module.exports = accountCheck