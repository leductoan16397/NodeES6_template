import token from './jwt.middleware'

export const isAuth = async (req, res, next) => {
    const tokenFromClient = req.body.token || req.query.token || req.headers["x-access-token"],
        accessTokenSecret = process.env.SECRET_KEY
    if (tokenFromClient) {
        try {
            const decoded = await token.verifyToken(tokenFromClient, accessTokenSecret);
            req.jwtDecoded = decoded;
            next();
        } catch (error) {
            // console.log(error.name);
            return res.status(401).json({
                message: error.message,
            });
        }
    } else {
        return res.status(403).send({
            message: 'No token provided.',
        });
    }
}

