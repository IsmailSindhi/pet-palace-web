import { NextPageWithLayout } from '@config/types';
import Home from '@views/Home';

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

// HomePage.getLayout = (page) => {
//   return (
//     <div>
//       <nav>Nav</nav>
//       {page}
//     </div>
//   );
// };

export default HomePage;
