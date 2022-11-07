import { baseUrl, repositoriesQuantify } from '/src/scripts/variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantify}`)
    return await response.json()
}

export { getRepositories }