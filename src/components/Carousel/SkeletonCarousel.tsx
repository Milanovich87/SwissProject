import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCarousel = (props: any) => (
    <ContentLoader
        speed={2}
        width={350}
        height={160}
        viewBox="0 0 350 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-9" y="16" rx="3" ry="3" width="340" height="415" />
    </ContentLoader>
)

export default SkeletonCarousel