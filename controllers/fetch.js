var json_obj = require('../json/fetch.json');

exports.home = async (req, res) =>{
    try{
        await res.send('Hello, welcome!');
        console.log(json_obj);
    } catch (error){
        res.status('404').json({message: error.message});
    }
};

exports.fetch_all = async (req, res) =>{
    try{
        res.status('200').send({
            success: 'true',
            message: 'All users fetched succesfully',
            json_obj
        });
    }
    catch (error) {
        res.status('500').json({message: error.message});
    }
};
