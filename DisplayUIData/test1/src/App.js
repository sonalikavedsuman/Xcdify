import { File } from "./component/File";
import  UserInfo  from "./component/UserInfo";
import { Welcome } from "./component/Welcome";
import CsvFile from "./component/CsvFile";


function App() {
  return (
    <div className="App">
      <File />
      <Welcome />
      <UserInfo />
      <CsvFile/>
    </div>
  );
}

export default App;



 