const checkMillionDollarIdea = (req, res, next) => {
    const revenue = req.body.numWeeks * req.body.weeklyRevenue
    if(revenue >= 1000000){
        next()
    } else{
        res.status(400).send()
    }
};




// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
