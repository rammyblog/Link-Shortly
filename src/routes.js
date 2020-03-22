import React from 'react';
import { Route } from 'react-router-dom';
import Login from './account/Login';
import Signup from './account/Signup';
import ForgotPassword from './account/ForgotPassword'
import DashboardComponent from './components/dashboard';
import ResetPasswordConfirm from './account/ResetPasswordConfirm';
import ForgotPasswordConfirmed from './account/ForgotPasswordConfirmed'




const BaseRouter = () => {
    return (
        <div> 
            <Route exact path='/login/'  component={Login}/> 
            <Route exact path='/signup/'  component={Signup}/> 
            <Route exact path='/forgot-password/'  component={ForgotPassword}/> 
            <Route exact path='/reset-password/:uid/:token/'  component={ResetPasswordConfirm}/> 
            <Route exact path='/password-reset/done/' component={ForgotPasswordConfirmed} />
            <Route exact path='/' component={DashboardComponent} />
            <Route path='/dashboard/' component={DashboardComponent} /> 
        </div>
    )
}

export default BaseRouter;
