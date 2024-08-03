import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import img4 from "../assets/phone.gif"

function pageFourth() {

    const moveRandomRef = useRef(null)

    const moveRandomEl = (elm) => {
        elm.style.position = 'absolute';
        elm.style.top = `${Math.floor(Math.random() * 90 + 5)}%`;
        elm.style.left = `${Math.floor(Math.random() * 90 + 5)}%`;
    }

    const handleMouse = () => {
        if (moveRandomRef.current) {
            moveRandomEl(moveRandomRef.current);
        }
    }

    return (
        <div class="container">
            <div
                class="tenor-gif-embed"
                data-postid="15974530976611222074"
                data-share-method="host"
                data-aspect-ratio="1.26923"
                data-width="100%"
            >
                <img src={img4} alt="" autoPlay loop />
            </div>
            <script
                type="text/javascript"
                async
                src="https://tenor.com/embed.js"
            ></script>

            <p class="h1">Maan ja na! Kitna bhav khaegi 😭</p>
            <p>Yes bol, fir date pe le jaunga tujhe.</p>

            <div class="btn">
                <Link to="/page5">Yes</Link>
                <Link to="#" ref={moveRandomRef} onMouseEnter={handleMouse}>No</Link>
            </div>
        </div>
    )
}

export default pageFourth
