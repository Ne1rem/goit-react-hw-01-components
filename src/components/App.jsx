import { Description } from "./Profile/description";
import { Statistics } from "./Statistics/statistics";
import descriptionUser from "./data/user.json"
import stitisticData from "./data/data.json"
import transactionsData from "./data/transactions.json"
import FriendsData from "./data/friends.json"
import { Tranactions } from "./Transactions/transactions";
import { Friends } from "./Friends/friends";


export const App = () => {
return <>
  <Description user={descriptionUser}/>
  <Statistics items={stitisticData}/>
  <Friends friends={FriendsData}/>
  <Tranactions transactions={transactionsData}/>
</>
};
