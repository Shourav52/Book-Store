

export default async function BookDetails({ params }) {
    const { id } = await params
    return <div>this is product details page {id}</div>;
}