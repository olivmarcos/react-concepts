import { users } from "../fakeData"

const auth = ({ email, password }) => {
    return users.filter(user => user.email === email && user.password === password)
}

export { auth }