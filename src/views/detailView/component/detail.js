import React, { Component } from 'react'
import DetailLayout from '../container/detailLayout'
import DetailHeader from '../container/detailHeader'
import DetailBody from '../container/detailBody'


class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DetailLayout>
        <DetailHeader navigation={this.props.navigation} />
        <DetailBody navigation={this.props.navigation}/>
      </DetailLayout>
    )
  }
}

export default Detail