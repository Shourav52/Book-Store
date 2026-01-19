import Link from "next/link";

export default function Books() {
    return <div>
        this is books page
        <Link href="books/1">Book 01</Link>
        <Link href="books/2">Book 02</Link>
        <Link href="books/3">Book 03</Link>

    </div>;
}

//