import { Link } from "react-router-dom";
export default function Task({ taskId, title, description }) {
  const handleClick = () => {
    console.log("TaskId:", taskId);
  };

  return (
    <div>
      <Link to={`/UpdateTask/${taskId}`} className="text-decoration-none text-dark" onClick={handleClick}>
        <div className="card border-success mb-3 my-2" style={{ maxWidth: "15rem", maxHeight: "9rem" }}>
          <div className="card-body text">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="card-header bg-transparent border-success">{description}</div>
        </div>
      </Link>
    </div>
  );
}


