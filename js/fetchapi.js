const username = 'sushma0762'; 
const repoList = document.getElementById('repo-list');
const errorMessage = document.getElementById('error-message');

async function fetchRepositories() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        const data = await response.json();
        displayRepositories(data);
    } catch (error) {
        errorMessage.textContent = 'Error,try again!';
    }
    
}
function displayRepositories(repositories) {
    repoList.innerHTML = ''; // Clear existing list
    repositories.forEach(repo => {
        const li = document.createElement('li');
        li.textContent = repo.name;
        repoList.appendChild(li);
    });
}




fetchRepositories();
