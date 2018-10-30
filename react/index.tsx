import * as React from 'react'
import * as ReactDOM from 'react-dom'

const setupId = 'ae9a79d0-d93a-11e8-aebb-51df6010fd72'

class MyComponent extends React.Component {
  private ref: React.RefObject<HTMLDivElement>

  constructor(props: any) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    if (this.ref.current) {
      this.ref.current.addEventListener('bearer|2627b8-slack-sharing|channel|saved', this.channelSaved)
    }
  }

  channelSaved = (event: any) => {
    const {
      detail: { channelId }
    } = event
    console.log('[BEARER]', 'You must keep this reference ', channelId)
  }

  render() {
    return (
      <div ref={this.ref}>
        <h2>I'm a react application</h2>
        {/* We declared these JSX element within declaration.d.ts */}
        <div className="page-header">
          <h3>Connect slack</h3>
        </div>
        <bearer-2627b8-slack-sharing-connect-action setup-id={setupId} />

        <div className="page-header">
          <h3>Select a channel</h3>
        </div>
        <bearer-2627b8-slack-sharing-channel-action setup-id={setupId} />

        <div className="page-header">
          <h3>Sent a message</h3>
        </div>
        <bearer-2627b8-slack-sharing-feature-action setup-id={setupId} />
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
