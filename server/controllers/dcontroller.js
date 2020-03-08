const destinationList = require('../../src/Components/data.json')
let id=26

module.exports ={

getDestination: (req, res)=>{
    res.status(200).send(destinationList)
},
newDestination:(req,res)=>{
    console.log(req.body)
    const{destination}= req.body
    destination.id = id
    id++
    destinationList.push(destination)
    res.status(200).send(destinationList)  
},
updateDestination:(req,res)=> {
    const{id}=req.params
    const{whatToDo,placesToEat,whereToStay}=req.body
    const index=destinationList.findIndex(element=> element.id===+id)
    destinationList[index].whatToDo=whatToDo||destinationList[index].whatToDo
    destinationList[index].placesToEat=placesToEat||destinationList[index].placesToEat
    destinationList[index].whereToStay=whereToStay||destinationList[index].whereToStay
    res.status(200).send(destinationList)
},
deleteDestination:(req,res)=>{
    const{id}= req.params
    const index=destinationList.findIndex(element=>element.id=== +id)
    destinationList.splice(index,1)
    res.status(200).send(destinationList)

}

    

}

