import SortableTable from "../components/SortableTable";

function PlayersPage (){
    const data = [
        {name: 'Bubble', level: '240', profession: 'Elite Knight'},
        {name: 'Xroww', level: '130', profession: 'Master Sorcerer'},
        {name: 'Akrul', level: '312', profession: 'Elite Knight'},
        {name: 'Slow Murderer', level: '423', profession: 'Master Sorcerer'},
        {name: 'Shusha da Shopee', level: '380', profession: 'Elder Druid'},
    ];

    const config = [
        {
            label: 'name',
            render: (player) => player.name,
            sortValue: (player) => player.name
        },
        {
            label: 'level',
            render: (player) => player.level,
            sortValue: (player) => player.level
        },
        {
            label: 'profession',
            render: (player) => player.profession,
            sortValue: (player) => player.profession
        }
    ];

    const keyFn = (player) => {
        return player.name;
    };

    return (
        <div>
          <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );

}

export default PlayersPage;