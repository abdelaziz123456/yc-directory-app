
import books from "@/app/api/db"
export async function DELETE(request:Request,context:{params:{id:string}}){

    const id=context.params.id
    const index=books.findIndex((book)=>book.id===Number(id))
    books.splice(index,1);

    return Response.json(books)

}