const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',

    repositories: [],
    forks: '',
    stargazers_count: '',
    watchers: '',
    language: '',
    description: '',

    createEvent: '',
    pushEvent: '',

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setEvents(events) {
        this.events = events
        this.createEvent = events.createEvent
        this.pushEvent = events.pushEvent
    },
    setRepositories(repositories) {
        this.repositories = repositories
        this.forks = repositories.forks
        this.stargazers_count = repositories.stargazers_count
        this.watchers = repositories.watchers
        this.language = repositories.language
        this.description = repositories.description
    }
}

export { user }