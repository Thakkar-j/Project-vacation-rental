import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import SignIn from "../Pages/SignIn.jsx";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import HomePage from "../Pages/HomePage.jsx";
import NotFoundPage from "../Pages/NotFoundPage.jsx";
import AboutUsPage from "../Pages/AboutUsPage.jsx";
import ContactUsPage from "../Pages/ContactUsPage.jsx";
import BlogPage from "../Pages/BlogPage.jsx";
import FAQPage from "../Pages/FAQPage.jsx";
import SiteMap from "../Pages/site-map.jsx";
import ListProperty from "../Components/host/ListProperty.jsx";
import Booking from "../Pages/Booking.jsx";
import TestingPage from "../Pages/TestingPage.jsx";
//user components
import ProfilePage from "../Components/user/ProfilePage.jsx";

//admin components
import AdminSidebar from "../Components/admin/AdminSidebar.jsx";
import NoAdmin from "../Components/admin/NoAdmin.jsx";
import AllUsers from "../Components/admin/AllUsers.jsx";
import ContactFromEntry from "../Components/admin/ContactFormEntry.jsx";
import PropertyList from "../Components/admin/PropertyList.jsx";
import DashboardAmin from "../Components/admin/DashboardAmin.jsx";
import PropertyPage from "../Components/PropertyPage.jsx";
import CartPage from "../Components/CartPage.jsx";

// import ContactFromEntry from "../Components/admin/ContactFormEntry.jsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="flex-grow-1 p-4 w-100">
        <Outlet />
      </div>
    </div>
  );
};

//notes:- PublicRoute: If a user is already logged in and navigates to /signin,
// they get immediately redirected to /profile.
//ProtectedRoute: If a user is not logged in and tries to type /profile
// or /dashboard in the address bar, they are redirected to /signin.

// Wrapper for pages only accessible to NOT logged in users (e.g., SignIn)
//So here user exits and not null
const PublicRoute = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Outlet />;
  }
  // If user is logged in, redirect them based on their role
  return user.role === "admin" ? (
    <Navigate to="/admin" replace />
  ) : (
    <Navigate to="/profile" replace />
  );
};

// Wrapper for pages only accessible to logged in users (e.g., Profile, Dashboard)
//Here user not exits so user is null
const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

// Wrapper for pages only accessible to admin users
const AdminRoute = () => {
  const { user } = useContext(AuthContext);
  return user && user.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/no-admin" replace />
  );
};

const router = createBrowserRouter([
  // 1. Pages without Navbar/Footer
  {
    element: <PublicRoute />,
    children: [{ path: "/signin", element: <SignIn /> }],
  },

  // 2. Common Pages with Navbar/Footer
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> }, // index: true means default child
      { path: "aboutus", element: <AboutUsPage /> },
      { path: "contactus", element: <ContactUsPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "faqs", element: <FAQPage /> },
      { path: "listproperty", element: <ListProperty /> },
      { path: "booking", element: <Booking /> },
      { path: "property/:id", element: <PropertyPage /> },
      { path: "property/cart/:id", element: <CartPage /> },
      { path: "sitemap", element: <SiteMap /> },
      { path: "testpage", element: <TestingPage /> },
      { path: "no-admin", element: <NoAdmin /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  // 3. Admin Pages with Admin Sidebar
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          // Add admin specific child routes here
          { index: true, element: <Navigate to="allusers" replace /> },
          { path: "dashboard", element: <DashboardAmin /> },
          { path: "allusers", element: <AllUsers /> },
          { path: "contactenrty", element: <ContactFromEntry /> },
          { path: "propertylist", element: <PropertyList /> },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
