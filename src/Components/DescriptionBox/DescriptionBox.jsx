import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (120)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci placerat, vehicula tortor sit amet, auctor nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer viverra dignissim metus, in rhoncus felis sodales eu. Ut sit amet odio non ligula dapibus rhoncus sit amet a nunc.</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci placerat, vehicula tortor sit amet, auctor nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer viverra dignissim metus, in rhoncus felis sodales eu. Ut sit amet odio non ligula dapibus rhoncus sit amet a nunc.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox