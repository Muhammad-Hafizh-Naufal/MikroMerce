// pada component card tambahkan props untuk mendapatkan data yang telah dikirim dari products.jsx
export default function Card(props) {
  return (
    <div>
      <div className="  p-5 rounded  gap-5 ">
        <div className="max-w-sm  ">
          <img src={props.image} alt="" className="w-auto object-cover " />
          <div className="p-5 flex flex-col bg-neutral-900 text-white">
            <h2 className="text-xl font-semibold my-2">{props.title}</h2>
            <p>{props.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-sm my-3">
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
