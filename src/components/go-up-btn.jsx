import './go-up-btn.scss';

const Upbtn = () =>{

    const scroll = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    
    return(
        <>
        <button className='btnn' onClick={scroll}><img src="/up-btn.png" /></button>
        </>
    )
}

export default Upbtn;