import fs from 'fs'

let output = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profile Generator</title>
    <script src="https://kit.fontawesome.com/09104c7762.js" crossorigin="anonymous"></script>
</head>
<body>
<nav><h1> My Team</h1></nav>
<main>
<div id = "team"> 




`

const genHTML = roles => {
    roles.Managers.forEach(obj => {
        output+= `<div class="employee">
        <div class="title">
        <h2>${obj.name}</h2>
        <h3><i class="fa-solid fa-user-tie"></i> ${obj.getRole()}</h3>
        </div>
        <ul>
            <li>ID: ${obj.id}</li>
            <li>Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li>Office Number: ${obj.officeNumber}</li>
        </ul>
    </div>`
    })
    roles.Engineers.forEach(obj => {
        output+= `<div class="employee">
        <div class="title">
        <h2>${obj.name}</h2>
        <h3><i class="fa-solid fa-server"></i> ${obj.getRole()}</h3>
        </div>
        <ul>
            <li>ID: ${obj.id}</li>
            <li>Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li>Git Hub: <a href="https://www.github.com/${obj.gitHub}" target="_blank" rel="noopener noreferrer">${obj.gitHub}</a></li>
        </ul>
    </div>`
    })
    roles.Interns.forEach(obj => {
        output+=  `<div class="employee">
        <div class="title">
        <h2>${obj.name}</h2>
        <h3><i class="fa-solid fa-graduation-cap"></i> ${obj.getRole()}</h3>
        </div>
        <ul>
            <li>ID: ${obj.id}</li>
            <li>Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li>School: ${obj.school}</li>
        </ul>
    </div>`
    })
    output+= `
    </div>
</main> 


    
</body>
</html>
    
    
    `
    fs.writeFile('./index.html', output, err=>{if(err) throw err});
}

export default genHTML;