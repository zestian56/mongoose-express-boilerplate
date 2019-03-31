import status from 'http-status';
import shortid from 'shortid';

const usersApi = (app, { User }) => {
    app.get('/users', (req, res, next) => {
        res.send('OK')
    })
    app.post('/users', async (req, res, next) => {
        const { body } = req;
        try{
            const customId = shortid.generate();
            const user = await User.create({
                ...body,
                id: customId
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