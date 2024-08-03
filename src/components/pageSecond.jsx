import React from 'react'
import { Link } from 'react-router-dom'
import img2 from "../assets/mochi.gif"

function pageSecond() {
    return (
        <div class="container">
            <div
                class="tenor-gif-embed"
                data-postid="22050818"
                data-share-method="host"
                data-aspect-ratio="1"
                data-width="100%"
            >
                <img src={img2} alt="" autoPlay loop />
            </div>
            <script
                type="text/javascript"
                async
                src="https://tenor.com/embed.js"
            ></script>
            <p class="h1">Soch le ache se! 🙄</p>
            <p>Do you love me?</p>

            <div class="btn">
                <Link to="/page5">Yes</Link>
                <Link to="/page3">No</Link>
            </div>
        </div>
    )
}

export default pageSecond
