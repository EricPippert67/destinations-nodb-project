const destinationList = require('../../src/Components/data.json')
let id=26

module.exports ={

getDestination: (req, res)=>{
    res.status(200).send(destinationList)
},
newDestination:(req,res)=>{
    console.log(req.body)
    const{city, img, stateCountry,whatToDo,placesToEat,whereToStay}= req.body
    const newObj={
        "id":  id,
        "city": city,
        "img":img,
       "stateCountry": stateCountry,
        "whatToDo": [whatToDo],
        "placesToEat": [placesToEat],
        "whereToStay": [ whereToStay]
    }
    id++
    destinationList.push(newObj)
    res.status(200).send(destinationList)  
},
updateDestination:(req,res)=> {
    const{id}=req.params
    const{city, stateCountry}=req.body
    const index=destinationList.findIndex(element=> element.id===+id)
    console.log(index)
    destinationList[index].city=city||destinationList[index].city
    destinationList[index].stateCountry=stateCountry||destinationList[index].stateCountry
    res.status(200).send(destinationList)
},
deleteDestination:(req,res)=>{
    console.log("id", req.params.id)
    const{id}= req.params
    const index=destinationList.findIndex(element=>element.id=== +id)
    destinationList.splice(index,1)
    res.status(200).send(destinationList)

}

    

}

