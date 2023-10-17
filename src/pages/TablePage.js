import SortableTable from "../components/SortableTable";

function TablePage() {
  const tableComponents = [
    { name: "Orange", color: "bg-orange-500", score: 5, flavour: "good", },
    { name: "Apple", color: "bg-red-300", score: 3, flavour: "delicious", },
    { name: "Banana", color: "bg-yellow-500", score: 1, flavour: "too sweet" },
    { name: "Lime", color: "bg-green-500", score: 4, flavour: "good for a drink" },
  ];

  const config = [
    { label: "Name",
     render: (fruit) => fruit.name,
     sortValue: (fruit) => fruit.name
     },
    { label: "Color",
     render: (fruit) => <div className={` p-3 m-2 ${fruit.color}`}></div>, 
    },
    { label: "Score",
     render: (fruit) => fruit.score,
     sortValue: (fruit) => fruit.score
    },
    { label: "Flavour",
     render: (fruit) => fruit.flavour, 
     sortValue: (fruit) => fruit.flavour
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;

  }

  return (
    <div>
      <SortableTable data={tableComponents} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
