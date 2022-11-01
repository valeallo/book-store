import React from 'react'
import ModalCommentList from './ModalCommentList'
import ModalAddComments from './ModalAddComments'

const ModalCommentArea = ({book,closeModal}) => {
       return (
        <div className="w-screen h-screen fixed top-1/2 left-1/2 flex intem-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg rounded">
            <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-stone-100 min-w-[350px] p-2 rounded-xl h-fit ">
                <div className="flex flex-col relative justify-center items-center w-[350px] h-fit p-6 bg-stone-100">
                    <button className="absolute right-2 top-2 cursor-pointer " 
                    onClick={()=>closeModal(false)}
                    >
                        X
                    </button>
                    <ModalAddComments book={book}/>
                    <ModalCommentList book={book} />
                </div>
            </div>
        </div>
    )
}

export default ModalCommentArea