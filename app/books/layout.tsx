export const metadata = {
    title: "GRB books"
}

const BookLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="py-10 px-10">{children}</div>
  )
}

export default BookLayout