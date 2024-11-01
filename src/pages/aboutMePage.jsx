import smiley from '../assets/smiley.jpg'
export default function AboutMePage() {
    return (
        <div>
            <h1>About Me</h1>
            <img style={{width: 200}} src= {smiley}></img>
            <p>
                Hi, I'm John Caldwell.
            </p>
        </div>
    );
}
