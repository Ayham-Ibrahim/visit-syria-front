import "./CommentCard.css";
// import { motion } from "framer-motion";
const CommentCard = (Props) => {
  // const comments = [
  //   { title: "i", text: "kkkkkkkkkkkkk" },
  //   { title: "is", text: "kkkkkkkakkkkkk" },
  //   { title: "ia", text: "kkkxkkkkkkkkkk" },
  // ];
  return (
    <div className="container comment-card">
      <div className="row align-items-center">
        <div className="col-3 ">
          <img src={Props.img_path} className="rounded" alt="..." />
        </div>
        <div className="col-9 ">
          <div className="row comment-writer-name">{Props.name}</div>
          <div className="row date-of-comment">{Props.date}</div>
        </div>
      </div>
      <div className="row content-comment-card align-items-center">
        My recent stay at [Hotel Name] was nothing short of exceptional. From
        the moment I arrived until my departure, every aspect of the hotel
        exceeded my expectations.
      </div>
    </div>

    // <div className="container mt-5">
    //   <div className="d-flex flex-row flex-nowrap overflow-auto">
    //     {comments.map((comment, index) => (
    //       <div key={index} className="card card-block mx-2 card-custom">
    //         <div className="card-body">
    //           <h5 className="card-title">{comment.title}</h5>
    //           <p className="card-text">{comment.text}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default CommentCard;
