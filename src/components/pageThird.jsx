import React from 'react'
import { Link } from 'react-router-dom'
import img3 from "../assets/forgive.gif"

function pageThird() {
    return (
        <div class="container">
            <div
                class="tenor-gif-embed"
                data-postid="15195810"
                data-share-method="host"
                data-aspect-ratio="1"
                data-width="100%"
            >
                <img src={img3} alt="" autoPlay loop />
            </div>
            <script
                type="text/javascript"
                async
                src="https://tenor.com/embed.js"
            ></script>

            <p class="h1">Ek aur baar Soch le! 😣</p>
            <p>Do you love me? Yes bol!</p>

            <div class="btn">
                <Link to="/page5">Yes</Link>
                <Link to="/page4">No</Link>
            </div>
        </div>
    )
}

export default pageThird
