package lk.bitproject.login.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class LoginController {
    
    @RequestMapping(value = "/login")
    public ModelAndView getLogin() {

        ModelAndView loginPage = new ModelAndView();
        loginPage.setViewName("login.html");
    
        return loginPage;
    
    }
    @RequestMapping(value = "/dashboard")
    public ModelAndView getDashboard() {

        ModelAndView dashboardPage = new ModelAndView();
        dashboardPage.setViewName("dashboard.html");
    
        return dashboardPage;
    
    }


}
