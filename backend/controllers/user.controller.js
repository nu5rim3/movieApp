const User = require('../models/user.model');
const { roles } = require('../roles/user.roles')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.test = async (req, res, next) => {
    try {
        console.log('test')
        res.status(200).send({ status: 'working', data: [1, 2, 3, 4] })
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} action 
 * @param {*} resource 
 * @returns 
 */
exports.grantAccess = function (action, resource) {
    return async (req, res, next) => {
        try {
            const permission = roles.can(req.user.role)[action](resource);
            if (!permission.granted) {
                return res.status(401).json({
                    error: "You don't have enough permission to perform this action"
                });
            }
            next()
        } catch (error) {
            next(error)
        }
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        const token = await user.generateAuthToken();
        res.status(200).send({ status: 'Login success', token: token, user: user });
    } catch (error) {
        res.status(401).send( error.message );
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.logout = async (req, res, next) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        })
        await req.user.save();
        res.status(200).send('Logout successfully');
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            throw new Error('User already exists');
        }

        user = {
            username: name,
            email: email,
            password: password
        }

        const newUser = new User(user);
        await newUser.save();
        const token = await newUser.generateAuthToken();
        res.status(200).send({ status: 'User Created', user: newUser, token: token });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        if (!users) return next(new Error('User does not exist'));
        res.status(200).json({
            data: users
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.getUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) return next(new Error('User does not exist'));
        res.status(200).json({
            data: user
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.updateUser = async (req, res, next) => {
    try {
        const update = req.body
        const userId = req.params.userId;
        await User.findByIdAndUpdate(userId, update);
        const user = await User.findById(userId)
        res.status(200).json({
            data: user,
            message: 'User has been updated'
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndDelete(userId);
        res.status(200).json({
            data: null,
            message: 'User has been deleted'
        });
    } catch (error) {
        next(error)
    }
}