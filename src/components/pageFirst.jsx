import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/manja.gif"

function pageFirst() {
    return (
        <div class="container">
            <div
                class="tenor-gif-embed"
                data-postid="22885016"
                data-share-method="host"
                data-aspect-ratio="1.04918"
                data-width="100%"
            >
                <img src={img1} alt="" autoPlay loop />
            </div>
            <script
                type="text/javascript"
                async
                src="https://tenor.com/embed.js"
            ></script>
            <p class="h1">Happy Girlfriend Day! 🤗</p>
            <p>Do you love me?</p>

            <div class="btn">
                <Link to="/page5">Yes</Link>
                <Link to="/page2">No</Link>
            </div>
        </div>
    )
}

export default pageFirst
