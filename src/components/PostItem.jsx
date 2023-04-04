import React from 'react';

const PostItem = (props) => {
    console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. JavaScript</strong>
                <div>
                    JavaScript is a programming language
                </div>
            </div>
            <div className="post__btns">
                <button>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostItem;
