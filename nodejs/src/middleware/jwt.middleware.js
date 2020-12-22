import jwt from 'jsonwebtoken'

const accessTocker = {}

accessTocker.generateToken =async (user, secretKey, tokenLife) => {
    const userData = {
        name: user.name,
        email: user.email,
    }
    // Thực hiện ký và tạo token
    return jwt.sign({ data: userData }, secretKey, { algorithm: "HS256", expiresIn: tokenLife, });

}

accessTocker.verifyToken = async (token, secretKey) => {
    return jwt.verify(token, secretKey)
}

export default accessTocker