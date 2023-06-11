"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type book = {
    id: number;
    name: string;
    tahun: number;
    pages: number;
    publisher_id: number;
    store_id: number;
}

const DeleteBook = ({book}:{ book:book}) => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleDelete = async(bookId: number) => {
        await axios.delete(`/api/books/${bookId}`)
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="text-black">
            <button className="btn btn-error btn-sm" onClick={handleModal}>
                Delete
            </button>

        <div className={isOpen ? 'modal modal-open' : 'modal' }>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure to delete {book.name}?</h3>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal} >
                            No
                        </button>
                        <button type="button" className="btn btn-primary" onClick={()=>handleDelete(book.id)}>
                            Yes
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBook
