import { withCurrentUser } from 'lib/withCurrentUser'

const Index = (props) => {
  return (
    <div>
      yo, {JSON.stringify(props.currentUser)}
    </div>
  )
}

export default withCurrentUser(Index)
