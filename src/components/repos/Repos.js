import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import { RepoItem } from './RepoItem'

export const Repos = () => {
const {userRepos} = useContext(GithubContext)
return userRepos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}

