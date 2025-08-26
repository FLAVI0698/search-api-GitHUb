import { getUser } from "./services/user.js";
import { getResponse } from "./services/repos.js"

import { user } from "./objects.js/user.js";
import { screen } from "./objects.js/screen.js";


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if(verificarInputVazio(userName)) return
    getUserData(userName);
})

document.getElementById('input-search').addEventListener('keyup', ( e ) => {
    const userName = e.target.value;
    if(verificarInputVazio(userName)) return
    const key = e.key || e.code;
    const isEnterKeyPresed = key === 'Enter';
    if (isEnterKeyPresed) {
        getUserData(userName);
    }
})

function verificarInputVazio (userName) {
    if(userName.length === 0){
        alert('Preenchar o campo input');
        return true
    }
}

async function getUserData( userName ) {
    const userResponse = await getUser( userName );
    const repositoriesResponse = await getResponse( userName );
    
    if(userResponse.message === 'Not Found') {
        console.log('entrou');
        
        screen.renderNotFound(); 
        return
    } 
    

    user.setInfor( userResponse );
    user.setRepositories( repositoriesResponse );
    screen.renderUser( user );
}
