import React from 'react'
import { observer } from 'mobx-react'

@observer
class BaseList extends React.Component {
  render () {
    const Button = this.Button;
    const { count,add,desc } = this.AppStore.BaseListStore || {};
    return <div>
       <Button onClick={add}>+</Button>
       {count}
       <Button onClick={desc}>-</Button>
    </div>
  }
}

export default BaseList
