import {Route, Routes} from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/pages/HomePage';
import HomePageLoggedIn from '../components/pages/HomePageLoggedIn';
import CreateEventPage from '../components/pages/CreateEventPage';
import EditEventPage from '../components/pages/EditEventPage';
import UserTable from '../components/pages/UserPage/UserTable';
import UserPage from '../components/pages/UserPage/UserPage';
import AdminPage from '../components/pages/AdminPage';
import authorities from '../config/Authorities';
import MyEventsPage from "../components/pages/MyEventsPage";
import ErrorPage from "../components/pages/ErrorPage";
import EventDetailPage from "../components/pages/EventDetailPage";

/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
    //const { checkRole } = useContext(ActiveUserContext);

    /** navigate to different "home"-locations depending on Role the user have */

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route
                path={'/home'}
                element={<PrivateRoute requiredAuths={[authorities.EVENT_READ]} element={<HomePageLoggedIn/>}/>}
            />
            <Route
                path={'/create-event'}
                element={<PrivateRoute requiredAuths={[authorities.EVENT_CREATE]} element={<CreateEventPage/>}/>}
            />
            <Route
                path={'/edit-event/:id'}
                element={<PrivateRoute requiredAuths={[authorities.EVENT_MODIFY]} element={<EditEventPage/>}/>}
            />
            <Route
                path={'/event/:id'}
                element={<PrivateRoute requiredAuths={[authorities.EVENT_READ]} element={<EventDetailPage/>}/>}
            />
            <Route
                path={'/users'}
                element={<PrivateRoute requiredAuths={[authorities.USER_READ]} element={<UserTable/>}/>}
            />
            <Route
                path={'/events'}
                element={<PrivateRoute requiredAuths={[authorities.EVENT_READ]} element={<MyEventsPage/>}/>}
            />
            <Route
                path='/useredit'
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.USER_DEACTIVATE, authorities.USER_CREATE]}
                        element={<UserPage/>}
                    ></PrivateRoute>
                }
            />
            <Route
                path='/useredit/:userId'
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.USER_READ]}
                        element={<UserPage/>}
                    ></PrivateRoute>
                }
            />
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/error' element={<ErrorPage/>}/>
            <Route
                path={'/admin'}
                element={<PrivateRoute requiredAuths={[]} element={<AdminPage/>}/>}
            />
        </Routes>
    );
};

export default Router;
