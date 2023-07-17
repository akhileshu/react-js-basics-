function Video({title,date,views,channel,id,children,verified}){
    return (
    <div className="card" style={{ width: "16rem" }}>
    <img src={`https://picsum.photos/id/${id}/200/300`} style={{ height: "12rem" }} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title }</h5>
      <p className="card-text">
        {date }, {views}, {channel} {verified&&'✅'}
      </p>
      {children}
    </div>
  </div>
  )
}
export default Video