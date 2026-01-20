export default function Categories() {
  const categories = ["Fiction", "Science", "Lifestyle", "Biography", "Self-help","Detective"];
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Book Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div key={cat} className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold">{cat}</h2>
            <p className="mt-2 text-gray-500">Explore top {cat} books</p>
          </div>
        ))}
      </div>
    </div>
  );
}
