const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser( user ) {
        this.userProfile.innerHTML = `
                                <div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                    <div class="data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado😒'}</h1>
                                        <p>${user.bio ?? 'Não possui bio cadastrado 😒'}</p>
                                    </div>
                                </div>`;
        let repositoriesItens = '';
        user.repositories.forEach( repos => repositoriesItens += `<li><a href="${repos.html_url}">${repos.name}</a></li>`)

        if(repositoriesItens.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Reposiitórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }

}

export { screen }