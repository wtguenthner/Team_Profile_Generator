
// let output = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    




// `

const genHTML = roles => {
    roles.Managers.forEach(obj => {
        console.log(`Role: ${obj.getRole()}`)
       console.log(`Name: ${obj.name}`)
       console.log(`ID: ${obj.id}`)
       console.log(`Email: ${obj.email}`)
       console.log(`Office Number: ${obj.officeNumber}`)
    })
    roles.Engineers.forEach(obj => {
        console.log(`Role: ${obj.getRole()}`)
       console.log(`Name: ${obj.name}`)
       console.log(`ID: ${obj.id}`)
       console.log(`Email: ${obj.email}`)
       console.log(`GitHub: ${obj.getGitHub()}`)
    })
    roles.Interns.forEach(obj => {
        console.log(`Role: ${obj.getRole()}`)
       console.log(`Name: ${obj.name}`)
       console.log(`ID: ${obj.id}`)
       console.log(`Email: ${obj.email}`)
       console.log(`School: ${obj.school}`)
    })
    

}

export default genHTML;