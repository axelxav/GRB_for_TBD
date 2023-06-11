//app/books/addBook.tsx

"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { book } from "@prisma/client";
const AddBook = () => {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [tahun, setYear] = useState("");
    const [pages, setPages] = useState("");
    const [publisher_id, setPublisher] =useState("");
    const [store_id, setStore] =useState("");
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async(e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('/api/books',{
            id:Number(id),
            name:name,
            tahun:Number(tahun),
            pages:Number(pages),
            publisher_id: Number(publisher_id),
            store_id: Number(store_id)
        } )
        setID("");
        setName("");
        setYear("");
        setPages("");
        setPublisher("");
        setStore("");
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
            <button className="bg-green-500 text-white btn" onClick={handleModal}>
                Add New
            </button>

        <div className={isOpen ? 'modal modal-open' : 'modal' }>
            <div className="modal-box">
                <form onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg">Add New Book</h3>
                    <div className="form-control w-full">
                        <label className="label font-bold">ID Buku</label>
                        <input 
                            type="text"
                            value={id}
                            onChange={(e) => setID(e.target.value)} 
                            className="input input-bordered" 
                            placeholder= "Jangan sama dengan ID yang lain"
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
                            onChange={(e) => setYear(e.target.value)} 
                            className="input input-bordered" 
                            placeholder="Tahun Rilis" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Halaman</label>
                        <input 
                            type="text"
                            value={pages}
                            onChange={(e) => setPages(e.target.value)} 
                            className="input input-bordered" 
                            placeholder="Jumlah Halaman" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Penerbit</label>
                        <input 
                            type="text"
                            value={publisher_id}
                            onChange={(e) => setPublisher(e.target.value)} 
                            className="input input-bordered" 
                            placeholder="Nama Penerbit" 
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Toko</label>
                        <input 
                            type="text"
                            value={store_id}
                            onChange={(e) => setStore(e.target.value)} 
                            className="input input-bordered" 
                            placeholder="Toko" 
                        />
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal} >
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary" >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddBook
