//app/books/page.tsx

import { PrismaClient } from "@prisma/client"
import AddBook from "./addBook";
import DeleteBook from "./deleteBook";
import UpdateBook from "./updateBook";
import SQLbuilder from "./sqlBuilder";
const prisma = new PrismaClient();

const getBooks =async () => {
    const res = await prisma.book.findMany({
        select: {
            id: true,
            name: true,
            tahun: true,
            pages: true,
            publisher_id: true,
            store_id: true,
        }
    });
    return res;
};

const Book = async () => {
    const books = await getBooks();

  return (
    <div>
        <h1 className="text-500px text-yellow-300 flex justify-center rounded bg-primary" >
            Good Reading Bookstore: Books
        </h1>
        <div className="mb-2 mt-10 flex space-x-11">
            <AddBook />
        </div>

        <table className="table w-full bg-slate-700">
            <thead>
                <tr>
                    <th className="text-white">Book ID</th>
                    <th className="text-white">Nama Buku</th>
                    <th className="text-white">Tahun Rilis</th>
                    <th className="text-white">Halaman</th>
                    <th className="text-white">Penerbit</th>
                    <th className="text-white">ID Toko</th>
                    <th className="text-center text-white">Action</th>
                </tr>
            </thead>
            <tbody className="text-white">
                {books.map((book, index)=>(
                    <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.tahun}</td>
                    <td>{book.pages}</td>
                    <td>{book.publisher_id}</td>
                    <td>{book.store_id}</td>
                    <td className="flex justify-center space-x-1">
                        <UpdateBook book={book}/>
                        <DeleteBook book={book}/>
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
        <h3 className="flex justify-center mt-10 text-yellow-400 rounded bg-primary">
            SQL Builder
        </h3>
        <div className="flex justify-center">
            <SQLbuilder />
        </div>
    </div>
  )
}

export default Book