import jwt from 'jsonwebtoken'
import createHttpError from 'http-errors'

const authMidelware = async (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        const err = createHttpError(401, 'unauthorized')
        next(res.json({ err }))
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
        const err = createHttpError(401, 'unauthorized')
        next(res.json({ err }))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS)

        req.user = decoded
        next()
    } catch (error) {
        const err = createHttpError(401, 'unauthorized')
        next(res.json({ err }))
    }

}

export {authMidelware}