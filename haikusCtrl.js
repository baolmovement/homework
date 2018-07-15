const Haiku = require('./Haiku');

exports.index = (req, res) => {
    Haiku.find({}, (err, haiku) => {
        if(err){
            res.json({status: "FAIL", err})
        } else {
            res.json({status: "SUCCESS", payload: {haiku}})
        }
    }) 
};

exports.new = (req, res) => {
    Haiku.create(req.body, (err, newHaiku) => {
        if(err){
            res.json({status: "FAIL", err});
        } else {
            res.json({status: "SUCCESS", payload: { newHaiku }})
        }
    })
}

// exports.show = (req,res) => {
//     Haiku.findById(req.params.id, (err, haiku) =>{
//         if(err){
//             res.json({status: "Fail", err})
//         } else {
//             res.json({status: "Success", payload: {haiku}})
//         }
//     })
// }

// exports.update = (req,res) => {
//     Haiku.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, (err, haiku) => {
//         if(err) return console.log(err);
//         res.json({status: "Success", payload: req.body})
//     })
// }

// exports.destroy = (req,res) => {
//     Haiku.findByIdAndRemove(req.param.id, (err) => {
//         if(err) return console.log(err);
//         res.json({status: "DELETED", payload: Haiku})
//     })
// }