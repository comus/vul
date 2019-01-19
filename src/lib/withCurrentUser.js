import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { getCurrentUser } from './graphql/queries/user/getUser'

class CurrentUserComponent extends Component {
  render () {
    const {
      data: { user: currentUser, networkStatus },
      children,
      render
    } = this.props
    const isLoading = networkStatus === 1 || networkStatus === 2

    if (!children && !render) return null

    return children
      ? children({ currentUser, isLoading })
      : render({ currentUser, isLoading })
  }
}

export const CurrentUser = getCurrentUser(CurrentUserComponent)

export const withCurrentUser = (Component) => {
  const C = props => {
    const { wrappedComponentRef, ...remainingProps } = props
    return (
      <CurrentUser>
        {({ currentUser, isLoading }) => {
          return (
            <Component
              {...remainingProps}
              currentUser={currentUser || null}
              isLoadingCurrentUser={isLoading}
              ref={wrappedComponentRef}
            />
          )
        }}
      </CurrentUser>
    )
  }

  C.WrappedComponent = Component
  return hoistStatics(C, Component)
}
