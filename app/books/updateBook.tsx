"use client";
import { useState, SyntheticEvent } from "react";
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

const UpdateBook = ({book}:{ book:book}) => {
    const [id, setID] = useState(book.id);
    const [name, setName] = useState(book.name);
    const [tahun, setYear] = useState(book.tahun);
    const [pages, setPages] = useState(book.pages);
    const [publisher_id, setPublisher] =useState(book.publisher_id);
    const [store_id, setStore] =useState(book.store_id);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleUpdate = async(e: SyntheticEvent) => {
        e.preventDefault();
        await axios.patch(`/api/books/${book.id}`,{
            id:Number(id),
            name:name,
            tahun:Number(tahun),
            pages:Number(pages),
            publisher_id: Number(publisher_id),
            store_id: Number(store_id)
        } )
        
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className="text-black">
            <button className="btn btn-info btn-sm" onClick={handleModal}>
                Edit
            </button>

        <div className={isOpen ? 'modal modal-open' : 'modal' }>
            <div className="modal-box">
                <form onSubmit={handleUpdate}>
                    <h3 className="font-bold text-lg">Update {book.name}</h3>
                    <div className="form-control w-full">
                        <label className="label font-bold">ID Buku</label>
                        <input 
                            type="text"
                            disabled
                            value={id}
                            onChange={(e) => setID(Number(e.target.value))} 
                            className="input input-bordered" 
                            placeholder="ID Buku" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Nama Buku</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            className="input input-bordered" 
                            placeholder="Nama Buku" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Tahun Rilis</label>
                        <input 
                            type="text"
                            value={tahun}
                            onChange={(e) => setYear(Number(e.target.value))} 
                            className="input input-bordered" 
                            placeholder="Tahun Rilis" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Halaman</label>
                        <input 
                            type="text"
                            value={pages}
                            onChange={(e) => setPages(Number(e.target.value))} 
                            className="input input-bordered" 
                            placeholder="Jumlah Halaman" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Penerbit</label>
                        <input 
                            type="text"
                            value={publisher_id}
                            onChange={(e) => setPublisher(Number(e.target.value))} 
                            className="input input-bordered" 
                            placeholder="Nama Penerbit" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Toko</label>
                        <input 
                            type="text"
                            value={store_id}
                            onChange={(e) => setStore(Number(e.target.value))} 
                            className="input input-bordered" 
                            placeholder="Toko" 
                        />
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal} >
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary" >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateBook
