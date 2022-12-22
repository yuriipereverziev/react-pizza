import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={455}
        viewBox="0 0 280 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="135" cy="125" r="125" />
        <rect x="0" y="265" rx="10" ry="10" width="280" height="23" />
        <rect x="0" y="305" rx="10" ry="10" width="280" height="85" />
        <rect x="125" y="408" rx="10" ry="10" width="155" height="46" />
        <rect x="0" y="417" rx="10" ry="10" width="122" height="27" />
    </ContentLoader>
)

export default Skeleton