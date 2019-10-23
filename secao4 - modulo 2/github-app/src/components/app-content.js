'use strict'

import React, {PropTypes} from 'react'
import Search from 'components/search/search'
import UserInfo from 'components/user-info/user-info'
import Actions from 'components/actions/actions'
import Repos from 'components/repos/repos'

const AppContent = (
  { userinfo,
    repos,
    starred,
    handleSearch,
    getRepos,
    getStarred,
    isFetching,
    handlePagination }) => (
  <div className='app'>

    <Search isDisabled={isFetching} handleSearch={handleSearch} />

        {isFetching && <div>Carregando....</div>}
        {!!userinfo && <UserInfo userinfo={userinfo} />}

        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.repos.length &&
          <Repos
            className='repos'
            title='Repositorios:'
            repos={repos}
            handlePagination={(cliked) => handlePagination('repos:', cliked)}
          />
      }

        {!!starred.repos.length &&
          <Repos
            className='starred'
            title='Favoritos:'
            repos={starred}
            handlePagination={(cliked) => handlePagination('starred:', cliked)}
          />
      }

  </div>
)

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
