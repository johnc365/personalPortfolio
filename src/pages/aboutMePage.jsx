import smiley from '../assets/smiley.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function AboutMePage() {
    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={smiley} className="img-fluid rounded-start" alt="smiley"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">Hi, I'm John Caldwell.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


