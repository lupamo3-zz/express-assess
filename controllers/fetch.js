var json_obj = require('../json/fetch.json');


// Welcome message
exports.home = async (req, res) =>{
    try{
        await res.send('Hello, welcome!');
    } catch (error){
        res.status('404').json({message: error.message});
    }
};

// Select all Users
exports.fetch_all = async (req, res) =>{
    try{
        console.log(json_obj);
        await res.status('200').json({
              success: 'true',
              message: 'All users fetched succesfully',
              json_obj
        });
    }
    catch (error) {
        res.status('500').json({message: error.message});
    }
};


//Select single user
exports.fetch_one = async (req, res) => {
    try{
        const user_fetch = req.params.user_id;
        console.log("show user", user_fetch);
        if (user_fetch >= 1 && user_fetch <= 10){
        res.status('200').json({
            success: 'true',
            message: `User ID ${user_fetch} has been fetched`,
            js: json_obj.filter(function(obj) {return obj.id == req.params.user_id})
        });
    }
    return res.status('404').json({
        success: 'false',
        message: `No user with ID ${user_fetch} found`
    });
    }
    catch (error) {
        res.status('500').json({message: error.message});
    }
};