const fetchData = async (id) => {
  return fetch("https://dummyjson.com/products/" + id).then((res) =>
    res.json()
  );
};

export default async function ProductPage({ params }) {
  const product = await fetchData(params.id);
  return <p>{product.title}</p>;
}
