import './notfound.scss';

export default function NotFound (){
    return(
        <>
        <div className="error-container">
            <h1>404</h1>
            <p>Oops! The page you’re looking for doesn’t exist.</p>
            <a href="/">Go Back Home</a>
        </div>
        </>
    )
}