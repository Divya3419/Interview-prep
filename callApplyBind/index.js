
const p1={
name:"ram",
occu:"singar"
}

const p2={
    name:"rajesh",
    occu:"dancer"
}

function findPerson(city){
    console.log(this.occu,`${city}`)
}


  let result= findPerson.bind(p1,["delhi"])
  result()


