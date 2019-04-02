import status from 'http-status';

const usersApi = (app, { User }) => {
    app.get('/users', (req, res, next) => {
        res.send('OK')
    })
    app.post('/users', async (req, res, next) => {
        const { body } = req;
        try{
            const docs = await User.find();
            const user = await User.create({
                ...body,
                id: docs.length.toString().padStart(4,"0")
            })
            res.status(status.OK).json(user.toGraph());
        }
        catch (err){
            console.error(message)
            return res.status(status.INTERNAL_SERVER_ERROR).send(err.message);
        }

    })

}
export default usersApi;