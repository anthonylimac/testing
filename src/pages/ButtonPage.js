import Button from "../components/Button";
import { IoLogoBitcoin, IoIosBonfire, IoIosFitness } from "react-icons/io";

function ButtonPage() {

  const handleClick = () => {

  }


  return (
    <div>
      <div >
        <Button success rounded onClick={handleClick} ><IoLogoBitcoin/>Click my ass</Button>
      </div>
      <div>
        <Button secundary rounded onClick={handleClick} >buy now</Button>
      </div>
      <div>
        <Button warning rounded onClick={handleClick}><IoIosBonfire/>check deal </Button>
      </div>
      <div>
        <Button danger rounded onClick={handleClick}>call me maybe</Button>
      </div>
      <div>
        <Button warning rounded onClick={handleClick}>test</Button>
      </div>
      <div>
        <Button success rounded><IoIosFitness/>yo haudy </Button>
      </div>
      <div>
        <Button primary rounded>kiss my ass</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
