import React from 'react';
import '../../index.css'

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Venture Plans Yet</h3>;
  }

  return (
    <>
      <h3
        className=" display-inline-block font-poppins"
      >
       Venture Plans
      </h3>
      <div className="flex-row font-poppins">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-1 pb-1 pl-0 font-poppins">
              <div className="p-1 pl-3 text-dark font-poppins" >
                <h6 className="card-header font-poppins">
                  {comment.commentAuthor} added to their bucket list{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt} :
                  </span>
                </h6>
                <p className="card-body font-poppins">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
