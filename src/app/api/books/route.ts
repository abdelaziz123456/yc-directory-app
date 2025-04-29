import books from "@/app/api/db";

export async function GET(){
    return Response.json(books)
}

export async function POST(request:Request){
    const {name}: {name:string}=await request.json()
    const id=books.length+1
    books.push({id,name})
    return Response.json(books)
}