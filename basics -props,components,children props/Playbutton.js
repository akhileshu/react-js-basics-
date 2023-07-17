function Playbutton({message,onSmash,children,onPlay,onPause}){
    let playing=false//dont use this approach

    function handleClick({target}){
        // onSmash(message)
        // destructuring event object
        // console.log(target)
        playing ? onPause():onPlay()
        playing=!playing
       
    }
    return (
        <>
        {/* (e)=>handleClick(e) */}
        {/* {children} => using children props */}
    <button className="btn btn-primary" onClick={handleClick}>{children}</button>
        </>
    )

}
export default Playbutton