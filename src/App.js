import './App.css';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
// import { PrivateRoute } from './components/PrivateRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Supplier from './Supplier/Supplier';
import Investor from './User/Investor';
import Buyer from './User/Buyer';
import Admin from './User/Admin';
import { ContactUs } from './components/ContactUs';
import ProductAdd from './Products/ProductAdd';
// import ProductList from './Products/ProductList';
import ProductEdit from './Products/ProductEdit';
import Aboutus from './About/Aboutus';
import FeedbackAdd from './Feedback/FeedbackAdd';
import FeedbackEdit from './Feedback/FeedbackEdit';
import FeedbackList from './Feedback/FeedbackList';
import TransactionAdd from './Transaction/TransactionAdd';
import OrderAdd from './Order/OrderAdd';
import ViewProducts from './Buyer/ViewProducts';
import AllProducts from './Products/AllProducts';
import { Address } from './Address/Address';
import BuyNow from './Buyer/BuyNow';
import ViewOrder from './Order/ViewOrder';
import ViewOrders from './Investor/ViewOrders';
import ViewTransaction from './Transaction/ViewTransaction';
import ViewTransactions from './Buyer/ViewTransactions ';
import { PrivateRoute } from './components/PrivateRoute';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
// import ViewProductsIn from './Investor/ViewProductsIn';
import Payment from './Investor/Payment';
import RequestService from './Buyer/RequestService';
import { RedirectIfLoggedIn } from './components/RedirectIfLoggedIn';
import error from './components/ErrorPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    
<BrowserRouter>
      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>

      

      <Route path="/supplier" element={<PrivateRoute><Supplier/></PrivateRoute> }></Route>
      
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/investor" element={<Investor/>}></Route>
      <Route path="/buyer" element={<Buyer/>}></Route>
      <Route path="/addaddress" element={<Address/>}></Route>

        <Route path="/viewallproduct" element={<PrivateRoute><ViewProducts/></PrivateRoute>}></Route>
        <Route path="/addproduct" element={<PrivateRoute><ProductAdd/></PrivateRoute>}></Route>
        <Route path="/supplierproducts" element={<PrivateRoute><AllProducts/></PrivateRoute>}></Route>
        <Route path="/editproduct/:id" element={ <PrivateRoute><ProductEdit/></PrivateRoute> }></Route>

       
        {/* <PrivateRoute><RequestService/></PrivateRoute> */}

       
   
        <Route path="/buynow" element={<PrivateRoute><BuyNow/></PrivateRoute>}></Route>

        <Route path="/addorder" element={<PrivateRoute><OrderAdd/></PrivateRoute>}></Route>
        <Route path="/vieworder" element={<PrivateRoute><ViewOrder/></PrivateRoute>}></Route>

        <Route path="/viewallorder" element={<PrivateRoute><ViewOrders/></PrivateRoute> }></Route>

        <Route path="/addtransaction" element={<PrivateRoute><TransactionAdd/> </PrivateRoute>}></Route>
        <Route path="/viewtransaction" element={<PrivateRoute><ViewTransaction/></PrivateRoute> }></Route>
        <Route path="/viewalltransaction" element={<PrivateRoute><ViewTransactions/></PrivateRoute>}></Route>
      

        <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
       

        <Route path="/email" element={<PrivateRoute><RequestService/></PrivateRoute>}></Route>

        <Route path="/signup" element={<SignUp/>}></Route>

        <Route path="/error" element={<ErrorPage/>}></Route>
       
        <Route path="/signin" element={<RedirectIfLoggedIn><SignIn/></RedirectIfLoggedIn>}></Route>



     {/* <Route path="/signin" element={<RedirectIfLoggedIn><SignIn/></RedirectIfLoggedIn>}></Route> */}

            {/* <Route path="/addfeedback" element={<FeedbackAdd/>}></Route>
        <Route path="/editfeedback" element={<FeedbackEdit/>}></Route>
        <Route path="/viewfeedback" element={<FeedbackList/>}></Route> */}

     
         {/* <Route path="/" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>rectIfLoggedIn>}></Route> */}
        {/* <Route path="/dashboard" element={<<Dashboard/></PrivateRoute>}></Route> */}
       {/* // <Route path="/students-list" element={<PrivateRoute><StudentsList/></PrivateRoute>}></Route> */}
        {/* <Route path="/student-registration" element={<PrivateRoute><StudentRegistrationForm/></PrivateRoute>}></Route> */}
         {/* <Route path="/login" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}></Route> */}
        {/* <Route path="/edit/:roll" element={<PrivateRoute><StudentEditForm/></PrivateRoute>}></Route> */}
       
       </Routes>
      <Footer/>
    </BrowserRouter>    
   
  );
}

export default App;
