import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function About() {
  return <div>
    <div className="md:container md:mx-auto md:max-w-6xl">
      <div>
        <div>
          What is MKT?
        </div>

        <div>
          <StaticImage src="../../assets/img/about/1.JPG" />
        </div>
      </div>
    </div>
  </div>
} 