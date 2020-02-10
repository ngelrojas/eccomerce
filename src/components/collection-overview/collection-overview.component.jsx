import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../preview-collection/preview-collection.component.jsx'
import {selectCollections} from '../../redux/shop/shop.selectors.js'
import './collection-overview.styles.scss'

const CollectionsOveview = ({collections}) => (
  <div className="collections-oveview">
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOveview)
