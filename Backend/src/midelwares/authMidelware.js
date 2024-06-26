import jwt from 'jsonwebtoken'
import createHttpError from 'http-errors'

const authMidelware = async (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        next(createHttpError(401, 'unauthorized'))
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
        next(createHttpError(401, 'unauthorized'))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS)

        req.user = decoded
        next()
    } catch (error) {
        next(createHttpError(401, 'unauthorized'))
    }

}

export {authMidelware}